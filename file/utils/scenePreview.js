/**
 * 名称：场景预览v0.0.2
 * 功能描述：
 *     1. 2D/3D切换；
 *     2. 楼层横向展开、纵向展开；
 *     3. 第一人称行走；
 *     4. 地图背景（影像、行政图层切换）；
 *     5. 小地图；
 *     6. 5s未进行操作自动旋转（可设置项）。
 */

// 创建app
var switchCamera = "2d"; // 下一摄像机查看状态
var miniMapCtrl = null; // 小地图控件
var mapBgCtrl = null; // 地图背景控件
var tileLayer1 = null; // 加入地图背景后选用的图层
var box = null; // 鼠标点击第一人称行走按钮时，红色盒子提示
var fpsCtrl = null; // 第一人称行走控件
var cameraInitPos = null; // 进入第一人称行走前摄像机位置
var fullScreenState = false; // 全屏
var skyBox = null; // 天空盒
var hiddenControlTimer = null; // 隐藏控制按钮计时器
var showControlTimer = null; // 显示控制按钮计时器
var sceneLonlat = [116.4641, 39.98606]; // 园区默认所在经纬度
// 计算摄像机位置与目标点间的x，y，z的差值，由于地不同瓦片图层使用的坐标系不同（如Google、高德等使用火星坐标系，OpenStreetMap使用WGS-84坐标系），
// 园区在地球上摆放需要进行坐标转换，在切换地图的瓦片图层时，摄像机位置应重新计算
var cameraDistace = [];
var building = null; // 建筑
var restartTime = 5000; // 自动旋转停止后重启时间间隔
var rotateTimer = null; // 自动旋转计时器
var filePath =
  "./uploads/wechat/5oiR5pyJ5pyA6ZW/55qE572R5ZCN5LiN5L+h5L2g5pWw5pWw/file/ScenePreview/";
// 需要用到的外部文件
// var fileArr = [
//   "/static/css/index.js", // 功能按钮样式文件
//   "static/css/font-awesome-4.7.0/css/font-awesome.min.css", // 功能按钮字体样式
//   "static/css/myAlert.css", // 弹出框样式
//   "static/css/sweetalert2.min.css", // 弹出框样式
//   "static/js/sweetalert2.all.min.js", // 弹出框脚本
//   "static/js/myAlert.js", // 弹出框脚本
//   "static/js/posTransform.js", // 不同坐标系经纬度互相转换的脚本文件
//   "static/js/expandFloor.js", // 楼层展开脚本
// ];
// 地图背景图层url
var mapConfig = {
  高德: {
    影像: "https://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    行政: "https://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}",
  },
  OSM: {
    行政: "https://{a,b,c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
};

/**
 * 说明：加载外部文件
 */
app.on("load", function (ev) {
  THING.Utils.dynamicLoad(
    [
      "./static/css/index.css", // 功能按钮样式文件
      // "./file/css/index.css", // 功能按钮样式文件
      "./static/css/font-awesome.min.css", // 功能按钮字体样式
      "./static/css/myAlert.css", // 弹出框样式
      "./static/css/sweetalert2.min.css", // 弹出框样式
      "./static/js/sweetalert2.all.min.js", // 弹出框脚本
      "./static/js/myAlert.js", // 弹出框脚本
      "./static/js/posTransform.js", // 不同坐标系经纬度互相转换的脚本文件
      "./static/js/expandFloor.js", // 楼层展开脚本
    ],
    function () {
      skyBox = app.skyBox; // 获取天空盒
      app.level.change(ev.campus); // 切换至园区层级
      ev.campus.azimuth = "180";
      // 获取园区在CampusBuilder编辑时保存的地理位置
      let tjsLnglat = app.root.defaultCampus.extraData;
      if (tjsLnglat != undefined && tjsLnglat != null) {
        tjsLnglat = tjsLnglat.coordinates;
        if (tjsLnglat != undefined && tjsLnglat != null) {
          tjsLnglat = tjsLnglat.split(",");
          sceneLonlat = [parseFloat(tjsLnglat[0]), parseFloat(tjsLnglat[1])];
        }
      } else {
        ev.campus.extraData = { coordinates: "116.4641,39.98606" }; // 园区绑定默认经纬度，地图才生效
      }
      createHtml(); // 创建html
      restarRotate(); // 自动旋转
    }
  );
});

/**
 * 说明：创建页面元素
 */
function createHtml() {
  let sign = `<div id="all-controls">
            <div class="controls">
                <a id="horizontalExpansion" class="control-item">
                    <i class="btn-horizontal"></i>
                    <span class="tooltiptext">横向展开</span>
                </a>
                <a id="verticalExpansion" class="control-item">
                    <i class="btn-vertical"></i>
                    <span class="tooltiptext">纵向展开</span>
                </a>
                <a id="switchCameraLevel" class="control-item">
                    <i class="btn-2d"></i>
                    <i class="btn-3d"></i>
                    <span class="tooltiptext">2D视角（空格键）</span>
                </a>
                <a id="moveByFps" class="control-item">
                    <i class="btn-fps"></i>
                    <span class="tooltiptext">第一人称行走</span>
                </a>
                <a id="mapBg" class="control-item">
                    <i class="btn-mapbg"></i>
                    <span class="tooltiptext">地图背景</span>
                    <div class="control-menu map-bg-select-menu">
                        <div class="control-menu-wrapper" style="position: relative">
                            <div class="control-menu-pane">
                                <ul class="setting-list">
                                    <li class="setting-item setting-item-split selected">关闭地图</li>
                                    <li class="setting-item">高德 影像</li>
                                    <li class="setting-item">高德 行政</li>
                                    <li class="setting-item">OSM 行政</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>
                <a id="miniMap" class="control-item">
                    <i class="btn-map"></i>
                    <span class="tooltiptext">小地图</span>
                </a>
                <a id="sceneSetting" class="control-item">
                    <i class="btn-setting"></i>
                    <span class="tooltiptext">设置</span>
                    <div class="control-menu map-bg-select-menu">
                        <div class="control-menu-wrapper" style="position: relative">
                            <div class="control-menu-pane">
                                <ul class="setting-list">
                                    <li class="autoRotate setting-item selected">自动旋转</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>
                <a id="fullScreen" class="control-item">
                    <i class="btn-full-screen"></i>
                    <i class="btn-narrow"></i>
                    <span class="tooltiptext">全屏</span>
                </a>
            </div>
        </div>`;
  // 将页面元素加入到div2d容器中，相关示例可参考官方示例-->界面2D-->UIAnchor
  $("#div2d").append($(sign));
  registerEvent(); // 注册事件
}

/**
 * 说明：注册事件
 */
function registerEvent() {
  // 楼层横向展开按钮的点击事件，楼层展开只在建筑有2层或2层以上的楼层才会生效
  $("#horizontalExpansion").on("click", function () {
    stopRotate();
    checkBtnActives(["#mapBg", "#sceneSetting"]);
    let expandState = building.getAttribute("expandState");
    if ($(this).hasClass("active")) {
      // 楼层横向展开关闭
      if (expandState == "horizontal") {
        $(this).removeClass("active");
        horizontalExpand(building, "close");
      }
    } else {
      // 楼层横向展开前应判断楼层是否处于垂直展开状态，是，则应先关闭垂直展开，然后横向展开
      if (expandState != "moving") {
        $(this).addClass("active");
        $("#verticalExpansion").removeClass("active");
        if (expandState == "vertical") {
          verticalToHorizontal(building);
        } else {
          horizontalExpand(building, "horizontal");
        }
      }
    }
    restarRotate();
  });

  // 楼层垂直展开按钮的点击事件，楼层展开只在建筑有2层或2层以上的楼层才会生效
  $("#verticalExpansion").on("click", function () {
    stopRotate();
    checkBtnActives(["#mapBg", "#sceneSetting"]);
    let expandState = building.getAttribute("expandState");
    if ($(this).hasClass("active")) {
      // 楼层垂直展开关闭
      if (expandState == "vertical") {
        $(this).removeClass("active");
        verticalExpand(building, "close");
      }
    } else {
      // 楼层垂直展开前应判断楼层是否处于横向展开状态，是，则应先关闭横向展开，然后垂直展开
      if (expandState != "moving") {
        $(this).addClass("active");
        $("#horizontalExpansion").removeClass("active");
        if (expandState == "horizontal") {
          horizontalToVertical(building);
        } else {
          verticalExpand(building, "vertical");
        }
      }
    }
    restarRotate();
  });

  // 设置按钮点击事件，按钮的tip与功能面板的互相切换
  $("#sceneSetting")
    .on("click", function () {
      checkBtnActives(["#mapBg"]);
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).children(".control-menu").removeClass("actives");
        $(this).find(".tooltiptext").css({ visibility: "visible" });
      } else {
        $(this).addClass("active");
        $(this).children(".control-menu").addClass("actives");
        $(this).find(".tooltiptext").css({ visibility: "hidden" });
      }
    })
    .hover(
      function () {
        if (!$(this).hasClass("active")) {
          $(this).find(".tooltiptext").css({ visibility: "visible" });
        }
      },
      function () {
        $(this).find(".tooltiptext").css({ visibility: "hidden" });
      }
    );

  // 设置li标签添加点击事件
  $("#sceneSetting .control-menu-pane li").on("click", function (ev) {
    //ev.stopPropagation();
    if ($(this).hasClass("selected")) {
      stopRotate();
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
      restarRotate();
    }
  });

  // 2D/3D切换按钮的鼠标抬起事件，切换2D/3D视角
  $("#switchCameraLevel").mouseup(function () {
    if (mapBgCtrl != null) {
      newAlert("地图背景打开时本功能暂不可用。", "error");
      return;
    }
    stopRotate();
    switchCameraLevel();
    if (switchCamera == "2d") {
      $(".btn-2d").css("display", "none");
      $(".btn-3d").css("display", "block");
      $("#switchCameraLevel span").text("3D视角(空格键)");
      switchCamera = "3d";
    } else if (switchCamera == "3d") {
      $(".btn-2d").css("display", "block");
      $(".btn-3d").css("display", "none");
      $("#switchCameraLevel span").text("2D视角(空格键)");
      switchCamera = "2d";
    }
    checkBtnActives(["#mapBg", "#sceneSetting"]);
  });

  // 场景添加键盘事件，空格键切换2D/3D视角
  app.on(
    THING.EventType.KeyUp,
    function (ev) {
      if (ev.code == "Space") {
        if (mapBgCtrl != null) {
          newAlert("地图背景打开时本功能暂不可用。", "error");
          return;
        }
        stopRotate();
        switchCameraLevel();
        if (switchCamera == "2d") {
          $(".btn-2d").css("display", "none");
          $(".btn-3d").css("display", "block");
          $("#switchCameraLevel span").text("3D视角(空格键)");
          switchCamera = "3d";
        } else if (switchCamera == "3d") {
          $(".btn-2d").css("display", "block");
          $(".btn-3d").css("display", "none");
          $("#switchCameraLevel span").text("2D视角(空格键)");
          switchCamera = "2d";
        }
        checkBtnActives(["#mapBg", "#sceneSetting"]);
      }
    },
    "空格键切换视角"
  );

  // 小地图的开启/关闭按钮的鼠标点击事件
  $("#miniMap").on("click", function () {
    if (mapBgCtrl != null) {
      newAlert("地图背景打开时本功能暂不可用。", "error");
      return;
    }
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      destoryMiniMap();
    } else {
      $(this).addClass("active");
      createMiniMap();
    }
    checkBtnActives(["#mapBg", "#sceneSetting"]);
  });

  // 地图背景的开启/关闭按钮的鼠标点击事件，按钮的tip与功能面板的互相切换
  $("#mapBg")
    .on("click", function () {
      checkBtnActives(["#sceneSetting"]);
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).children(".control-menu").removeClass("actives");
        $(this).find(".tooltiptext").css({ visibility: "visible" });
      } else {
        $(this).addClass("active");
        $(this).children(".control-menu").addClass("actives");
        $(this).find(".tooltiptext").css({ visibility: "hidden" });
      }
    })
    .hover(
      function () {
        if (!$(this).hasClass("active")) {
          $(this).find(".tooltiptext").css({ visibility: "visible" });
        }
      },
      function () {
        $(this).find(".tooltiptext").css({ visibility: "hidden" });
      }
    );

  // 地图背景li标签添加点击事件
  $("#mapBg .control-menu-pane li").on("click", function (ev) {
    //ev.stopPropagation();
    if ($(this).hasClass("selected")) return;
    stopRotate();
    $(this).siblings("li").removeClass("selected");
    $(this).addClass("selected");
    let childText = $(this)[0].innerText;
    if (childText == "关闭地图") {
      $("#dataAttribution").css({ display: "none" });
      hiddenMapBg();
      location.reload();
    } else {
      checkMapBgEvent();
      $("#all-controls").css({ bottom: "10px" });
      $("#dataAttribution").css({ display: "block" });
      let provider = childText.split(" ")[0];
      let type = childText.split(" ")[1];
      let url = mapConfig[provider][type];
      // 判断是否已经加载过地图，如若已加载，则只需更换瓦片图层url即可
      if (mapBgCtrl != null) {
        tileLayer1.url = url;
        mapBgCtrl.attribution = provider;
        // 在已提供的瓦片图层（数组mapConfig）中只有OSM是WGS-84坐标系。因此，在瓦片图层切换时，摄像机的位置与目标点改变，应重新修正。
        // 修正方法为在切换图层前记录摄像机位置与园区位置的x，y，z值的差，切换瓦片图层后，将摄像机目标点设置为园区当前所处位置，根据
        // 数组cameraDistace存放的x，y，z对应的差来确定摄像机位置
        if (provider != "OSM") {
          app.root.defaultCampus.position = CMAP.Util.convertLonlatToWorld(
            sceneLonlat,
            0.5
          );
          let scenePos = app.root.defaultCampus.position;
          app.camera.position = [
            scenePos[0] + cameraDistace[0],
            scenePos[1] + cameraDistace[1],
            scenePos[2] + cameraDistace[2],
          ];
          app.camera.target = scenePos;
        } else {
          let transformPos = gcj02towgs84(sceneLonlat);
          app.root.defaultCampus.position = CMAP.Util.convertLonlatToWorld(
            transformPos,
            0.5
          );
          let scenePos = app.root.defaultCampus.position;
          app.camera.position = [
            scenePos[0] + cameraDistace[0],
            scenePos[1] + cameraDistace[1],
            scenePos[2] + cameraDistace[2],
          ];
          app.camera.target = scenePos;
        }
      } else {
        showMapBg(provider, url);
      }
      restarRotate();
    }
  });

  // 进入层级事件
  app.on(THING.EventType.EnterLevel, function (ev) {
    stopRotate();
    // 进入建筑层级
    if (ev.object.type == "Building") {
      let floors = ev.object.floors;
      if (floors.length > 1) {
        building = ev.object;
        addFloorPos(building);
        let expandState = building.getAttribute("expandState");
        if (expandState == null) {
          building.setAttribute("expandState", "close");
        }
        $("#horizontalExpansion").css({ display: "block" });
        $("#verticalExpansion").css({ display: "block" });
      }
    } else {
      $("#horizontalExpansion").css({ display: "none" });
      $("#verticalExpansion").css({ display: "none" });
      // 进入园区层级
      if (ev.object.type == "Campus") {
        if (building != null) {
          exitBuildingCloseFloor(building);
          $("#horizontalExpansion").removeClass("active");
          $("#verticalExpansion").removeClass("active");
          building = null;
        }
      }
    }
    if (skyBox != null) {
      app.skyBox = skyBox;
    }
    if (switchCamera == "3d") {
      $(".btn-2d").css("display", "block");
      $(".btn-3d").css("display", "none");
      $("#switchCameraLevel span").text("2D视角(空格键)");
      switchCamera = "2d";
      restarRotate();
    }
    // 重新创建小地图
    if ($("#miniMap").hasClass("active")) {
      destoryMiniMap();
      createMiniMap();
    }
  });

  // 行走按钮的鼠标点击事件
  $("#moveByFps").on("click", function () {
    if (mapBgCtrl != null) {
      newAlert("地图背景打开时本功能暂不可用。", "error");
      return;
    }
    stopRotate();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      if (box != null) {
        // 恢复默认双击进入层级事件
        app.resumeEvent(
          THING.EventType.DBLClick,
          "*",
          THING.EventTag.LevelEnterOperation
        );
        // 恢复默认右键退出层级事件
        app.resumeEvent(
          THING.EventType.Click,
          "*",
          THING.EventTag.LevelBackOperation
        );
        box.destroy();
        box = null;
      }
      if (fpsCtrl != null) {
        exitFps();
      }
    } else {
      $(this).addClass("active");
      // 禁用默认双击进入层级事件
      app.pauseEvent(
        THING.EventType.DBLClick,
        "*",
        THING.EventTag.LevelEnterOperation
      );
      // 禁用默认右键退出层级事件
      app.pauseEvent(
        THING.EventType.Click,
        "*",
        THING.EventTag.LevelBackOperation
      );
      // 记录摄像机当前位置
      cameraInitPos = [app.camera.position, app.camera.target];
      createBox();
    }
    checkBtnActives(["#mapBg", "#sceneSetting"]);
  });

  // 全屏按钮的鼠标抬起事件
  $("#fullScreen").mouseup(function () {
    if (!fullScreenState) {
      $(".btn-full-screen").css("display", "none");
      $(".btn-narrow").css("display", "block");
      $("#fullScreen span").text("退出全屏");
      fullScreen();
      fullScreenState = true;
    } else {
      $(".btn-full-screen").css("display", "block");
      $(".btn-narrow").css("display", "none");
      $("#fullScreen span").text("全屏");
      exitFullScreen();
      fullScreenState = false;
      if ($("#mapBg").hasClass("active")) {
        destoryMiniMap();
        createMiniMap();
      }
    }
    checkBtnActives(["#mapBg", "#sceneSetting"]);
  });

  // 鼠标键按下事件，功能按钮隐藏
  app.on(THING.EventType.MouseDown, function () {
    app.pauseEvent(
      THING.EventType.CameraZoom,
      null,
      "摄像机前后滚动，功能图片隐藏"
    );
    if (showControlTimer != null) {
      clearTimeout(showControlTimer);
      showControlTimer = null;
    }
    stopRotate();
    if (hiddenControlTimer == null) {
      clearTimeout(showControlTimer);
      hiddenControlTimer = setTimeout(function () {
        $("#all-controls").css("display", "none");
        clearTimeout(hiddenControlTimer);
        hiddenControlTimer = null;
      }, 300);
    }
  });

  // 鼠标键抬起事件，功能按钮显示
  app.on(THING.EventType.MouseUp, function () {
    app.resumeEvent(
      THING.EventType.CameraZoom,
      null,
      "摄像机前后滚动，功能图片隐藏"
    );
    if (hiddenControlTimer != null) {
      clearTimeout(hiddenControlTimer);
      hiddenControlTimer = null;
    }
    if (showControlTimer == null) {
      showControlTimer = setTimeout(function () {
        $("#all-controls").css("display", "block");
        clearTimeout(showControlTimer);
        showControlTimer = null;
        restarRotate();
      }, 300);
    }
  });

  let count = 0;
  // 鼠标滑轮滚动
  app.on(
    THING.EventType.CameraZoom,
    function () {
      if (showControlTimer != null) {
        count = 0;
        return;
      }
      stopRotate();
      if (showControlTimer == null) {
        $("#all-controls").css("display", "none");
        showControlTimer = setInterval(function () {
          count++;
          if (count >= 2) {
            $("#all-controls").css("display", "block");
            restarRotate();
            clearInterval(showControlTimer);
            showControlTimer = null;
          }
        }, 300);
      }
    },
    "摄像机前后滚动，功能图片隐藏"
  );

  // 鼠标移动事件，已创建的红色胶囊跟随鼠标移动
  app.on(THING.EventType.MouseMove, function (ev) {
    if (box != null) {
      if (ev.picked) {
        box.position = ev.pickedPosition;
      }
    }
  });

  // 摄像机位置改变结束事件，记录当前摄像机位置与目标点x，y，z的差
  app.on(THING.EventType.CameraChangeEnd, function () {
    if (cameraDistace.length > 0) {
      let caPos = app.camera.position;
      let scePos = app.root.defaultCampus.position;
      cameraDistace = [
        caPos[0] - scePos[0],
        caPos[1] - scePos[1],
        caPos[2] - scePos[2],
      ];
    }
    restarRotate();
  });

  // 点击事件，放置红色胶囊，进入第一人称行走
  app.on(THING.EventType.Click, function (ev) {
    stopRotate();
    if (ev.button == 0 && box != null) {
      let pos = box.position;
      box.destroy();
      box = null;
      app.camera.flyTo(pos);
      enterFps([pos[0], pos[1] + 2, pos[2]]);
    }
    checkBtnActives(["#mapBg", "#sceneSetting"]);
  });

  // 进入层级事件，退出第一人称行走
  app.on(THING.EventType.EnterLevel, function () {
    if (fpsCtrl != null) {
      exitFps();
    }
  });

  // 离开层级事件，停止旋转
  app.on(THING.EventType.LeaveLevel, function () {
    stopRotate();
  });

  // 鼠标滑轮事件，停止旋转
  app.on(THING.EventType.MouseWheel, function () {
    stopRotate();
  });

  // 场景添加键盘按下事件，当进入第一人称行走时，按下esc键退出第一人称行走
  app.on(THING.EventType.KeyDown, function (ev) {
    if (ev.code == "Escape") {
      if (box != null) {
        app.resumeEvent(
          THING.EventType.DBLClick,
          "*",
          THING.EventTag.LevelEnterOperation
        );
        app.resumeEvent(
          THING.EventType.Click,
          "*",
          THING.EventTag.LevelBackOperation
        );
        box.destroy();
        box = null;
        $("#moveByFps").removeClass("active");
        restarRotate();
      }
      if (fpsCtrl != null) {
        exitFps();
        if (switchCamera == "3d") {
          app.camera.viewMode = THING.CameraView.TopView;
          app.background = "#909090";
        }
        restarRotate();
      }
      checkBtnActives(["#mapBg", "#sceneSetting"]);
    }
  });

  window.onresize = function () {
    if (!checkFull()) {
      //要执行的动作
      if (fullScreenState == true) {
        $(".btn-full-screen").css("display", "block");
        $(".btn-narrow").css("display", "none");
        $("#fullScreen span").text("全屏");
        fullScreenState = false;
      }
    }
  };
}

/**
 * 说明：检测菜单项是否已打开
 */
function checkBtnActives(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if ($(temp).hasClass("active")) {
      $(temp).removeClass("active");
      $(temp).find(".control-menu").removeClass("actives");
    }
  }
}

/**
 * 说明：判断是否全屏
 */
function checkFull() {
  var isFull =
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement;
  //to fix : false || undefined == undefined
  if (isFull === undefined) isFull = false;
  return isFull;
}
/**
 * 说明：2D/3D视角切换
 */
function switchCameraLevel() {
  if (switchCamera == "2d") {
    app.camera.viewMode = THING.CameraView.TopView;
    app.background = "#909090";
  } else if (switchCamera == "3d") {
    app.camera.viewMode = THING.CameraView.Normal;
    restarRotate();
  }
}

/**
 * 说明：创建胶囊
 */
function createBox() {
  if (box == null) {
    box = app.create({
      type: "Thing",
      url: "https://model.3dmomoda.com/models/9CD08ED91F5C4E0ABB6B0833C86F2942/0/gltf/",
      position: [0, 0, 0],
      angle: 180,
      scale: [1.7, 1.7, 1.7],
      style: {
        color: "#FF0000",
      },
    });
  }
}

/**
 * 说明：第一人称行走
 */
function enterFps(pos) {
  if (fpsCtrl == null) {
    app.pauseEvent(
      THING.EventType.Pick,
      "*",
      THING.EventTag.LevelPickOperation
    );
    app.pauseEvent(THING.EventType.KeyUp, null, "空格键切换视角");
    app.camera.position = pos; // 起始位置为鼠标点击时的位置
    // 添加第一人称行走控件
    fpsCtrl = app.addControl(
      new THING.WalkControl({
        // 参数可以动态修改
        walkSpeed: 0.02, // 行走速度
        turnSpeed: 0.25, // 右键旋转速度
        gravity: 26, // 物体重量
        eyeHeight: 1.6, // 人高度
        jumpSpeed: 10, // 按空格键 跳跃的速度
        enableKeyRotate: false, // 默认不开启键盘控制旋转
        useCollision: true, // 默认不开启碰撞检测
        useGravity: true, // 默认开启重力
        groundObjects: [app.scene], // 把整个场景都添加,可把楼层或其他需要检测的添加进入碰撞体系里 | 默认值 园区地板，如果园区过大，可取消提升性能
        collisionObjects: [app.scene], // 把整个场景都添加,可把楼层或其他需要检测的添加进入碰撞体系里 | 默认值 园区地板，如果园区过大，可取消提升性能
      })
    );
  }
}

/**
 * 说明：退出第一人称行走
 */
function exitFps() {
  app.removeControl(fpsCtrl);
  fpsCtrl = null;
  cameraFly(cameraInitPos[0], cameraInitPos[1]);
  // 恢复默认双击事件
  app.resumeEvent(
    THING.EventType.DBLClick,
    "*",
    THING.EventTag.LevelEnterOperation
  );
  // 恢复默认点击事件
  app.resumeEvent(
    THING.EventType.Click,
    "*",
    THING.EventTag.LevelBackOperation
  );
  // 恢复默认拾取事件
  app.resumeEvent(THING.EventType.Pick, "*", THING.EventTag.LevelPickOperation);
  // 恢复默认键盘键抬起事件
  app.resumeEvent(THING.EventType.KeyUp, null, "空格键切换视角");
  $("#moveByFps").removeClass("active");
}

/**
 * 说明：开启小地图
 */
function createMiniMap() {
  if (miniMapCtrl == null) {
    // 添加小地图控件
    miniMapCtrl = app.addControl(
      new THING.MiniMapControl({
        width: 200,
        height: 200,
        position: THING.CornerType.LeftBottom,
        opacity: 0.8,
        scale: 1,
        angle: 0,
        mousewheel: true,
        cameraViewImg: "https://www.thingjs.com/static/images/minimap1.png",
        cameraCenterImg: "https://www.thingjs.com/static/images/minimap0.png",
      })
    );
    $(".minimap").css("border", "1px solid rgba(255, 255, 255, 0.8)");
    $(".minimap").css("left", "3px");
    $(".minimap").css("bottom", "3px");
  } else {
    destoryMiniMap();
    createMiniMap();
  }
}

/**
 * 说明：关闭小地图
 */
function destoryMiniMap() {
  if (miniMapCtrl != null) {
    app.removeControl(miniMapCtrl);
    miniMapCtrl = null;
  }
}

/**
 * 说明：显示地图背景
 */
function showMapBg(attribution, url) {
  if (mapBgCtrl == null) {
    THING.Utils.dynamicLoadJS(
      ["https://www.thingjs.com/uearth/uearth.min.js"],
      function () {
        //创建一个地图实例
        mapBgCtrl = app.create({
          type: "Map",
          attribution: attribution,
          style: {
            night: false, // 关闭白天黑夜的特效
            fog: false,
          },
        });
        //创建一个瓦片图层
        tileLayer1 = app.create({
          type: "TileLayer",
          name: "卫星影像图层",
          url: url,
        });
        // 将瓦片图添加到底图图层中
        mapBgCtrl.addLayer(tileLayer1);
        app.camera.curOrbit.leftInteractive = false;
        if (attribution != "OSM") {
          app.root.defaultCampus.position = CMAP.Util.convertLonlatToWorld(
            sceneLonlat,
            0
          );
        } else {
          let transformPos = gcj02towgs84(sceneLonlat);
          app.root.defaultCampus.position = CMAP.Util.convertLonlatToWorld(
            transformPos,
            0
          );
        }
        var getCameraPos = setTimeout(function () {
          clearTimeout(getCameraPos);
          let cameraPos = app.camera.position;
          let cameraTarget = app.camera.target;
          cameraDistace = [
            cameraPos[0] - cameraTarget[0],
            cameraPos[1] - cameraTarget[1],
            cameraPos[2] - cameraTarget[2],
          ];
          let scenePos = app.root.defaultCampus.position;
          app.camera.position = [
            scenePos[0] + cameraDistace[0],
            scenePos[1] + cameraDistace[1],
            scenePos[2] + cameraDistace[2],
          ];
          app.camera.target = scenePos;
        }, 100);
      }
    );
  } else {
    //显示瓦片图
    mapBgCtrl.baseLayers.visible = true;
  }
}

/**
 * 说明：隐藏地图背景
 */
function hiddenMapBg() {
  if (mapBgCtrl != null) {
    mapBgCtrl.baseLayers.visible = false;
  }
}

/**
 * 说明：地图背景打开后关闭功能
 */
function checkMapBgEvent() {
  if (switchCamera == "3d") {
    app.camera.viewMode = THING.CameraView.Normal;
    $(".btn-2d").css("display", "block");
    $(".btn-3d").css("display", "none");
    $("#switchCameraLevel span").text("2D视角(空格键)");
  }
  if ($("#miniMap").hasClass("active")) {
    $("#miniMap").removeClass("active");
    destoryMiniMap();
  }
  if ($("#moveByFps").hasClass("active")) {
    $("#moveByFps").removeClass("active");
    exitFps();
  }
}

/**
 * 说明：国测局坐标转wgs84坐标，相关转换请参考“coordtransform”提供方法
 */
function gcj02towgs84(sceneLonlat) {
  let wgs84Pos = coordtransform.gcj02towgs84(sceneLonlat[0], sceneLonlat[1]);
  return wgs84Pos;
}

/**
 * 说明：全屏显示
 */
function fullScreen() {
  let el = document.documentElement;
  let rfs = el.requestFullScreen || el.webkitRequestFullScreen;
  if (typeof rfs != "undefined" && rfs) {
    rfs.call(el);
  } else if (typeof window.ActiveXObject != "undefined") {
    let wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }
}

/**
 * 说明：退出全屏
 */
function exitFullScreen() {
  let el = document;
  let cfs =
    el.cancelFullScreen || el.webkitCancelFullScreen || el.exitFullScreen;
  if (typeof cfs != "undefined" && cfs) {
    cfs.call(el);
  } else if (typeof window.ActiveXObject != "undefined") {
    let wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }
}

/**
 * 说明：摄像机飞行
 */
function cameraFly(position, target) {
  // 摄像机飞行到某位置
  app.camera.flyTo({
    position: position,
    target: target,
    time: 1000,
    complete: function () {},
  });
}

/**
 * 说明：自动旋转
 */
function startRotate() {
  app.camera.enableRotate = false; // 关闭默认的旋转操作
  app.camera.enablePan = false; // 关闭默认的平移操作
  app.camera.enableZoom = false; // 关闭默认的缩放操作
  if (mapBgCtrl != null) {
    app.camera.earthFlyRotateBySpeed({
      target: app.camera.target,
      speed: 4,
    });
  } else {
    // 绕摄像机当前目标点旋转
    app.camera.rotateAround({
      target: app.camera.target, // 围绕摄像机当前目标点
      // object: obj,  // 环绕的物体 (object 与 target 的设置互斥)
      speed: 4, // 环绕飞行的时间（3min）
      yRotateAngle: 360, // 环绕y轴飞行的旋转角度
      loopType: THING.LoopType.Repeat, // 设置循环类型
    });
  }
}

/**
 * 说明：停止自动旋转
 */
function stopRotate() {
  app.camera.enableRotate = true; // 开启默认的旋转操作
  app.camera.enablePan = true; // 开启默认的平移操作
  app.camera.enableZoom = true; // 开启默认的缩放操作
  if (mapBgCtrl != null) {
    app.camera.stopEarthFly();
  } else {
    app.camera.stopRotateAround();
  }
  if (rotateTimer) {
    clearTimeout(rotateTimer);
    rotateTimer = null;
  }
}

/**
 * 说明：重新开始转动，未进行任何操作5s后开始自动旋转
 */
function restarRotate() {
  if (
    fpsCtrl != null ||
    switchCamera == "3d" ||
    !$("#sceneSetting .control-menu-pane li.autoRotate").hasClass("selected")
  ) {
    return;
  }
  if (rotateTimer == null) {
    rotateTimer = setTimeout(function () {
      startRotate();
    }, restartTime);
  } else {
    clearTimeout(rotateTimer);
    rotateTimer = null;
    restarRotate();
  }
}

document.title = "党校_test";
/**
 * 党校
 * @author baiqiLinp 2023.12.25
 */
// 引入文件
THING.Utils.dynamicLoad(
  ["/static/utils/request.js", "/static/utils/scenePreview.js"],
  function () {
    // 加载场景后执行
    app.on("load", function (ev) {
      // 初始化界面
      // init_ui();

      commonAjax("get", "/captcha", {}, function (data) {
        console.log(data);
      });
    });
  }
);

var app = new THING.App({
  // 引用场景
  url: "/api/scene/20210616095248956300069", // 场景地址
  skyBox: "BlueSky", // 天空盒
  resourceLibraryUrl: "./",
});

app.on("load", function () {
  // 创建模型
  let obj = app.create({
    type: "Thing",
    name: "宇航员",
    url: "./file/models/7bfb3321557a40fead822d7285ac5324/0/gltf/",
    position: [0, 0, 0],
    angle: 45,
  });

  obj.playAnimation({
    name: "_defaultAnim_",
    loopType: THING.LoopType.Repeat,
  });

  let stylesObj = { fontColor: "#ff7f00", fontSize: 32 };

  createText("宇航员", "HelloWorld", stylesObj, [0, 3, 0]);
});

// 为物体创建3D文本
function createText(name, text, style, localPosition) {
  if (!app.query(name) || !app.query(name)[0]) {
    return;
  }

  var obj = app.query(name)[0];
  var textRegion = app.create({
    type: "TextRegion",
    parent: obj,
    localPosition: localPosition,
    text: text,
    style: style,
  });
  return textRegion;
}

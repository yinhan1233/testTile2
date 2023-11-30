// // 加载场景代码 
// var app = new THING.App({ resourceLibraryUrl: "./",
//     url: './scene/1/'
// });

// // 引用效果模板组件脚本
// THING.Utils.dynamicLoad([
//     './static/plugins/thing.effect.min/1.4.0/EffectThemeControl.min.js',
//     './product/resource/11481/frame.js',
//     '/uploads/wechat/785346/file/点火装置数字化生产线/style.css',
//     '/uploads/wechat/785346/file/点火装置数字化生产线/Util.js',
//     '/uploads/wechat/785346/file/点火装置数字化生产线/deviceInfoList.js',
//     '/uploads/wechat/785346/file/点火装置数字化生产线/materialBox.js',
//     '/uploads/wechat/785346/file/点火装置数字化生产线/constants.js',
// ], function () {
//     app.on('load', function (ev) {
//         init_app(ev);
//         //关闭，进到室内自动切换天空盒  
//         app.level.options['autoChangeBackground'] = false;
//         //初始化
//         var control = new THING.EffectThemeControl();
//         app.addControl(control, '效果模板控制器');
//         //获取模板控制器
//         var ctrl = app.getControl('效果模板控制器');
//         //注册模板,data是模板数据。如果是本地效果模板包，必须填第三个参数，该参数是模板包相对于该片代码的路径
//         ctrl.registerTheme('default_parkbusiness', data, './product/resource/11481');
//         //获取园区
//         c = app.query('.Campus')[0];
//         //应用效果模板
//         c.applyTheme('default_parkbusiness');
//         ctrl.applyEffectTheme('default_parkbusiness', c);
//         ctrl.applyThemeEnvironment('default_parkbusiness', c);
//     });
//     inToOtherFloor();
// })

// //初始化场景
// function init_app(ev) {
//     //头部固定面板
//     //headerHtml("content");bottomHtml("content");
    
//     app.level.change(ev.campus);
//     camera_init();
// }

// //默认的首次进楼层
// var floorNum = "成都点火装配4楼";
// //起始默认路径行驶完，动手进入其他楼层
// function inToOtherFloor() {
//     //  修改退出层级操作
//     // 双击右键回到上一层级
//     app.on(THING.EventType.DBLClick, function (ev) {
//         $(".deviceInfoView").remove(); // 移除信息界面
//         if (ev.button != 2) {
//             return;
//         }
//         if (isFloor == true) {
//             //在建筑层级销毁顶牌
//             app.query('.Marker').destroyAll();
//             app.level.back();
//         } else {
//             goToFloor(floorNum, true);
//         }
//     }, 'customLevelBackMethod');

//     //双击进四楼
//     var fourFloor = app.query("#" + "成都点火装配4楼")[0];
//     var fiveFloor = app.query("#" + "成都点火装配5楼")[0];
//     fourFloor.on(THING.EventType.DBLClick, function (ev) {
//         app.camera.flyTo({
//             position: [-6.96202571261263, 66.1285860368458, 42.12017029124141],
//             target: [-6.595246908999146, 24.100968757255373, 24.395483300831227],
//             time: 1500,
//             complete: function () {
//                 floorDevice();
//                 floorNum = "成都点火装配4楼";
//             }
//         });

//     });
//     //双击进五楼
//     fiveFloor.on(THING.EventType.DBLClick, function (ev) {
//         app.camera.flyTo({
//             position: [-6.96202571261263, 66.1285860368458, 42.12017029124141],
//             target: [-6.595246908999146, 24.100968757255373, 24.395483300831227],
//             time: 1500,
//             complete: function () {
//                 floorDevice();
//                 floorNum = "成都点火装配5楼";
//             }
//         });

//     });
//     goToFloor(floorNum);
//     // 暂停单击返回上一层级功能
//     app.pauseEvent(THING.EventType.Click, null, THING.EventTag.LevelBackMethod);
// }

// //摄像机初始位置
// function camera_init() {
//     app.camera.flyTo(
//         {
//             position: [37.078533322144224, 79.12807296835895, 168.26404132204232],
//             target: [-22.920556937129817, -3.219722956378883, 39.2416259955669],
//             time: 2000,
//             complete: function () {
//                 // 将层级切换至建筑层级
//                 goToBuilding();
//             }
//         }
//     );
// }

// //进入building建筑层级
// function goToBuilding() {
//     var building = app.query('.Building')[0];
//     app.level.change(building, {
//         complete: function () {
//             app.camera.flyTo({
//                 position: [-62.50683797541315, 31.27851229149568, 81.87675696003444],
//                 target: [-28.374699207145095, 12.370904217728816, 27.71116856887533],
//                 time: 1500,
//                 complete: function () {
//                     //展开楼层
//                     building.expandFloors({
//                         'distance': 3,
//                         'time': 2000,
//                         'complete': function () {
//                             floor_title();
//                             //进入四楼层级
//                             var timer = setTimeout(function () {
//                                 clearTimeout(timer);
//                                 goToFloor(floorNum);
//                             }, 2000);
//                             //四五楼货架添加物料盒
//                             for (var i = 4; i <= 5; i++) {
//                                 shelvesAddBox(i);
//                             };
//                         }
//                     });
//                 }
//             });
//         }
//     });
// }

// var isFloor = true;
// var selectThing = null;
// //进入楼层层级
// function goToFloor(floornum, isBack) {
//     var floor = app.query("#" + floornum)[0];
//     app.level.change(floor, {
//         complete: function () {
//             app.camera.flyTo({
//                 position: [-8.924531710351374, 56.179778224407286, 63.83138950133082],
//                 target: [-6.44972400773734, 10.721394600211882, 20.319367599618992],
//                 time: 1500,
//                 complete: function () {
//                     isFloor = true;
//                     //展示设备顶牌
//                     displayTitle();
//                     if (isBack == true) {
//                         selectThing.parents.forEach((item) => {
//                             item.style.opacity = 1
//                         });
//                     } else {
//                         var Device = app.query('["mold" = "设备"]');
//                         for (var i = 0; i < Device.length; i++) {
//                             var device = Device[i];
//                             floorDeviceTitle(device);
//                             clickThing(device);
//                         }
//                     }
//                     selectThing = null;
//                 }
//             });
//         }
//     });
// }

// //四楼货架单独显示
// function clickThing(thing) {
//     //双击
//     thing.on(THING.EventType.DBLClick, function (ev) {
//         $("#popOver"+thing.id).remove(); // 移除单击时未关闭的信息界面
//         isFloor = false;
//         hideTitle();
//         thing.parents.forEach((item) => { //双击后物体的父级物体设置为透明度为0
//             item.style.opacity = 0 
//         });
//         thing.style.opacity = 1;
//         deviceInfoView(thing);
//         selectThing = thing;

//         //物料盒单击，物料信息出现
//         var Materialbox = app.query('["userData" = "Materialbox"]');
//         for (var i = 0; i < Materialbox.length; i++) {
//             var box = Materialbox[i];
//             clickBox(box);
//         }
//     });
//     //单击
//    thing.on(THING.EventType.SingleClick, function (ev) {
//         debugger;
//         if(!isEmpty(document.querySelector("#popOver"+thing.id)) && document.querySelector(".info-title").innerHTML == thing.name){
//             $("#popOver"+thing.id).remove(); // 移除信息界面
//         } else {
//             singleClickHtml("div3d",thing);   
//         }
//    }); 
// }

// //物料盒单击，物料信息出现
// function clickBox(thing) {
//     thing.on("Click", function (ev) {
//         debugger;
//         selectThing = thing;
//         deviceInfoView(thing);
//     });
// }


// //四楼五楼的设备顶牌
// function floorDevice() {
//     var Device = app.query('["mold" = "设备"]');
//     for (var i = 0; i < Device.length; i++) {
//         var device = Device[i];
//         floorDeviceTitle(device);
//     }
// }

// function floorDeviceTitle(device) {
//     var plane = app.query('#Marker_' + device.id)[0];
//     if (plane) return;

//     var imgUrl = "/uploads/wechat/785346/file/点火装置数字化生产线/markerPlane.png";
//     var imgWidth = 355;
//     var imgHeight = 455;
//     var img = new Image();
//     img.src = imgUrl;
//     img.onload = function () {
//         var canvas = createCanvas({ image: img, text: device.name, imgWidth, imgHeight });
//         var newImg = new Image(canvas.width, canvas.height);
//         newImg.src = canvas.toDataURL("image/png");
//         planePlane = app.create({
//             type: 'Marker',
//             id: 'Marker_' + device.id,
//             width: imgWidth * 0.0035,
//             height: imgHeight * 0.0035,
//             parent: device,
//             localPosition: [0, 2, 0],
//             size: 3,
//             style: {
//                 image: newImg,
//                 opacity: 1,
//                 color: '#ffffff'
//             }
//         });
//         // 存储原始图片 用于重绘
//         planePlane['origialImg'] = img;
//         // 存储 canvas 用于重绘
//         planePlane['myCanvas'] = canvas;
//     };
// }


// //楼层的顶牌框界面
// function floor_title() {
//     for (var i = 0; i < app.query(".Floor").length; i++) {
//         var floor = app.query('#成都点火装配' + (i + 1) + '楼')[0];
//         var view = `
//         <div id="floorcard${(i + 1)}" class="topview">${floor.name}</div>
//         `
//         $('#div3d').append(view);
//         var obj={
//             parent:floor,
//             localPosition:[-60, -3, -5],
//             element:create_element('floorcard'+ (i+1))
//         }
//         create_ui(obj)
//     }
// }

// //创建UIAnchor
// function create_ui(obj) {
//     app.create({
//         type: 'UIAnchor',
//         parent: obj.parent,
//         element: obj.element,
//         localPosition: obj.localPosition,
//         pivot: [0.5, 1] //  [0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
//     });
// }

// //创建dom元素
// function create_element(id) {
//     var srcElem = document.getElementById(id);
//     var newElem = srcElem.cloneNode(true);
//     newElem.style.display = "block";
//     app.domElement.insertBefore(newElem, srcElem);
//     return newElem;
// }


// //隐藏楼层的标签
// function hideTitle() {
//     for (var i = 0; i < app.query(".Floor").length; i++) {
//         $("#floorcard" + (i + 1)).css("display", "none");
//     }
// }

// //显示楼层的标签
// function displayTitle() {
//     for (var i = 0; i < app.query(".Floor").length; i++) {
//         $("#floorcard" + (i + 1)).css("display", "block");
//     }
// }



// 离线开发引入园区场景
var app = new THING.App({
    url: '/api/scene/1701326692000'  // 场景地址
});
// 设置app背景为黑色
app.background = [0, 0, 0];
// 引用效果模板组件脚本
THING.Utils.dynamicLoad([
    'https://www.thingjs.com/static/plugins/thing.effect.min/1.5.6/EffectThemeControl.min.js',
    '/static/resource/ThingJS/4100/frame.js'
], function () {
    app.on('load', function (ev) {
       app.level.change(ev.campus);
       //关闭，进到室内自动切换天空盒  
       app.level.options['autoChangeBackground'] = false;
       //初始化
       var control = new THING.EffectThemeControl();
       app.addControl(control, '效果模板控制器');
       //获取模板控制器
       var ctrl = app.getControl('效果模板控制器');
       //注册模板,data是模板数据。如果是本地效果模板包，必须填第三个参数，该参数是模板包相对于该片代码的路径
       ctrl.registerTheme('default_parkbusiness', data, '/static/resource/ThingJS/4100');
       //获取园区
       c = app.query('.Campus')[0];
       //应用效果模板
       c.applyTheme('default_parkbusiness');
       ctrl.applyEffectTheme('default_parkbusiness', c);
       ctrl.applyThemeEnvironment('default_parkbusiness', c);
    })
})





























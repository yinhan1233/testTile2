// // 加载地图
// var app = new THING.App();
// // 设置app背景为黑色
// app.background = [0, 0, 0];
// // 引用地图组件脚本
// THING.Utils.dynamicLoad(['./source/uearth.min.js'], function () {
//     app.create({
//         type: 'Map',
//         // 地图场景名：新建城市117
//         url: "./cityBuilder/1/map.bundle.json",
//         complete: function (event) {
//             console.log(event.object.userLayers.length);
//         }
//     });
// });
// /**
//  * 引入场景预览脚本
//  * 说明：引用该脚本需要传递参数，参数为创建的app对象、类型type，type的值有两种，scene和city，
//  *      用于区分园区和地图、如果type值为city，需要额外传递参数，参数值为创建的map对象。
//  * 备注：
//  *      1. 如果引入该脚本是预览园区，自v0.1.8版本起，需要自行决定是否在“load”事件中调用初始
//  *         化方法，初始化方法示例为：new AppPreview({app:app, type:'scene'})
//  *      2. 如果引入该脚本是预览地图，则应在引用地图组件脚本complete回调中引用，初始化
//  *         方法示例为：new AppPreview({app:app, type:'city', map:event.object})
//  */
// // THING.Utils.dynamicLoad(['./guide/ScenePreview/v0.1.9/AppPreview.min.js'],
// //     function () {
// //         new AppPreview({app: app, type: 'city', map:event.object});  // 执行初始化
// //     }
// // )



console.log();


console.log();

// 创建线标记
var app = new THING.App();
app.background = [0, 0, 0];

// 引用地图组件脚本
THING.Utils.dynamicLoad([
    // 引用地图组件脚本（加载地图时进行使用）
    '/source/uearth.min.js',
    // 引入配饰库
    '/static/attachment/js/objectdecorator.min.js',
], function () {
    // 创建一个地图
  var map = app.create({
        type: 'Map',
        attribution: '高德',
        style: {
            night: false,
        },
    });
    // 创建一个瓦片图层
    var tileLayer1 = app.create({
        type: 'TileLayer',
        name: '卫星影像图层',
        url: 'https://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
        style: {
            template: CMAP.TileLayerStyle.DARKBLUE, // 设置瓦片图层的样式为DARKBLUE
        },
    });
    // 将瓦片图添加到底图图层中
    map.addLayer(tileLayer1);

    // 摄像机飞行到某位置
    app.camera.flyTo({
        position: [2182239.4599693236, 4094671.06166381, 4381494.033699439],
        target: [2177632.6085063685, 4098068.082322953, 4375230.0756663885],
        time: 2000,
        complete: function () {
            addLayer();
        },
    });

    /**
     * 创建图层并修改样式
     */
    function addLayer() {
        $.ajax({
            type: 'GET',
            url: '/uearth/uGeo/wangjingRoad.geojson',
            dataType: 'json',
            success: function (data) {
            let acssessorysrc, objs_pathline = [], objsPoints = [];
                // 创建标记实例
                let atm = new Attachment();
                let routeLineData = data
                let baseObj = app.create({
                    type: 'BaseObject',
                    name: 'test-0'
                });
                baseObj.position = CMAP.Util.convertLonlatToWorld(routeLineData.features[0].geometry.coordinates[0][0]);
                baseObj.geojson = routeLineData;
                objs_pathline.push(baseObj);
                // 引用标记资源路径
                acssessorysrc = '/Resources/bundle/admin/2124-3144';
                /**
                 * 创建标记
                 * @param {'地图'，'园区'，'室内'} sceneType - 使用环境
                 */
                atm.create(objs_pathline, acssessorysrc, { sceneType: '地图' }).then(function (obj) {
                    console.log("acssessorysrc",acssessorysrc)
                });
            },
        });
    }
}
);



























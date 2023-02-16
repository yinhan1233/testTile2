// 加载地图
var app = new THING.App();
// 设置app背景为黑色
app.background = [0, 0, 0];
// 引用地图组件脚本
THING.Utils.dynamicLoad(['./source/uearth.min.js'], function () {
    app.create({
        type: 'Map',
        // 地图场景名：新建城市117
        url: "./cityBuilder/1/map.bundle.json",
        resourceConfig : {
            resourcePrefix: './'
        },
        complete: function (event) {
            console.log(event.object.userLayers.length);
        }
    });
});
/**
 * 引入场景预览脚本
 * 说明：引用该脚本需要传递参数，参数为创建的app对象、类型type，type的值有两种，scene和city，
 *      用于区分园区和地图、如果type值为city，需要额外传递参数，参数值为创建的map对象。
 * 备注：
 *      1. 如果引入该脚本是预览园区，自v0.1.8版本起，需要自行决定是否在“load”事件中调用初始
 *         化方法，初始化方法示例为：new AppPreview({app:app, type:'scene'})
 *      2. 如果引入该脚本是预览地图，则应在引用地图组件脚本complete回调中引用，初始化
 *         方法示例为：new AppPreview({app:app, type:'city', map:event.object})
 */
// THING.Utils.dynamicLoad(['./guide/ScenePreview/v0.1.9/AppPreview.min.js'],
//     function () {
//         new AppPreview({app: app, type: 'city', map:event.object});  // 执行初始化
//     }
// )





























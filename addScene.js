
// 加载地图
var app = new THING.App();
// 设置app背景为黑色
app.background = [0, 0, 0];
// 引用地图组件脚本
THING.Utils.dynamicLoad([
'./source/uearth.min.js',
'./static/ScenePreview/chart/PreviewChartControl.js'
], function () {
     // 渲染模板的url
    const mapUrl =  './product/resource/9035/19436/static'
    app.create({
        type: 'Map',
        //此处可更换为CityBuilder生成的地图URL链接
        url: "./cityBuilder/1/map.bundle.json",
        resourceConfig: {
            resourcePrefix: './'
        },
        complete: function (event) {
            // 进行效果模板渲染
            const resourceConfig = {
                resourcePrefix: mapUrl
            };
            CMAP.Util.applyTemplate(mapUrl + '/map.json', resourceConfig);
        }
    });
     // 创建图表
    new PreviewChartControl({
        url: '/api/chart/63870ddd05108267c4a1b6df',
        tag: '1',
        isLoad: true,  // 加载页，默认为true
        isApplyBackground: false,  // 是否应用图表背景，启用该参数会替换app.background的值，默认false
        autoResize: {  // 图表自适应
           enable: false,  // 自适应图表分辨率，默认为false
           orgin: 'center center'  // 自适应的基准点，第一个参数取值为:left、center、right，第二个参数取值为:top、center、bottom，默认值为“center center”
        },
        complete: function(){
           
        }
    });
});


















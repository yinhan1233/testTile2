/** 说明：创建App，url为园区地址（可选）
 *       使用App创建打开的三维空间我们称之为“场景”（scene）。场景包含地球、园区、模型等。
 *       创建App时，传入的url就是园区的地址，不传url则创建一个空的场景。园区可在CampusBuilder
 *       中创建编辑，有两种方法可以将园区添加到线上资源面板，方法如下：
 *          1. 园区保存后，会自动同步到网页同一账号下
 *          2. 园区保存后，导出tjs文件，在园区资源面板上传
 *      上面两种方式生成的园区资源均可在资源面板中双击自动生成脚本
 *  难度：★☆☆☆☆
 **/
// 在线开发打包资源
// // 加载场景代码 
// var app = new THING.App({
//     url: 'https://www.thingjs.com/static/models/factory',  // 场景地址
//     background: '#000000',
//     env: 'Seaside',
// });
// 单资源
// 离线开发引入园区场景
var app = new THING.App({
    url: '/api/scene/2498821681712101173'  // 场景地址
});
// 创建Thing
var obj = app.create({
    type: 'Thing',
    name: '桌子', 
    url:'/Resources/Model/admin/4ce8d7c7045b4782b5caade8db35cda8',
    position: [0, 0, 0],
    angle: 0,
    complete: function () {
      // console.log('thing created: ' + this.id);
      // 单资源加载模型，摄像机看向目标物体
    }
});

 // 设置app背景为黑色
 app.background = [0, 0, 0];
 // 引用地图组件脚本
 THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
     let defaultPath = '/Resources/CityMap/admin/1460610';
     app.create({
       type: 'Map',
       // 地图场景名：路北区_副本
       url: defaultPath + '/map.bundle.json',
       // url: "./cityBuilder/1/map.bundle.json",
       resourceConfig : {
           resourcePrefix: defaultPath
       },
       complete: function (event) {
           console.log(event.object.userLayers.length);
       }
   });
 });
 // 说明：在离线环境中使用森大屏，需使用以下脚本。
// 离线开发引入森大屏图表脚本
THING.Utils.dynamicLoad([
    '/static/release/thing.charts.js',
    '/static/plugins/vue.min.js'
 ],
 async function () {
    const scenebundle = THING.CHARTS.Utils.loadBundle(
        '/Resources/BigScreen/admin/d904808757b7424b88e973584db8602c', // 前缀
        {
            container: document.getElementById('div2d') || '#div2d', // 挂载节点
            // 可选参数
            hide3D: true, // 隐藏场景内的3D
            hideCanvasBackground: true, // 画布背景色是否设置为透明的，默认false
            dataSource: {
                disable: true, // 是否禁用RestAPI数据，默认false
                http: {
                 server: 'wss://charts.thingjs.com/spray/websocket', // 数据源配置
                }
            }
        }
    )
    const instance = await scenebundle.waitForComplete() // 等待场景加载完成
    instance // ui场景实例
 })
 // 引入一键图表脚本
THING.Utils.dynamicLoad(['/static/ScenePreview/chart/PreviewChartControl.js'], function () {
    // 创建图表
    new PreviewChartControl({
        url: '/api/chart/62c39bdbee63ce05082e4a60',
        tag: '1',
        isLoad: true,  // 加载页，默认为true
        isApplyBackground: false,  // 是否应用图表背景，启用该参数会替换app.background的值，默认false
        autoResize: {  // 图表自适应
            enable: false,  // 自适应图表分辨率，默认为false
            orgin: 'center center'  // 自适应的基准点，第一个参数取值为:left、center、right，第二个参数取值为:top、center、bottom，默认值为“center center”
        },
        complete: function () {

        }
    });
})
// 引用拓扑组件脚本
THING.Utils.dynamicLoad(['/static/js/thing.diagram.min.js'], function () {
    // 初始化拓扑场景
    const graph = new THING.DIAGRAM.Graph({
        container: 'div2d', // 容器元素 id
        url: './diagrams/9d124b930cefdf59/topo.json', // 拓扑场景资源路径
        resourceRootPath: '/Resources/topo/admin/9d124b930cefdf59'
    });
    // 视图加载完成
    graph.on('load', () => {
        console.log('加载完成');
    });
})
 
/**
 * 说明：创建线标记
 *
 */
var app = new THING.App();
app.background = [0, 0, 0];

THING.Utils.dynamicLoad([
    // 引用地图组件脚本（加载地图时进行使用）
    '/source/uearth.min.js',
    // 引入标记库
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

    function cameraPosition() {
        // 摄像机飞行到某位置
        app.camera.flyTo({
            'position': [2185965.7295180187, 4097652.8303078655, 4387970.3739431435],
            'target': [2175791.0301513583, 4099449.7231322075, 4374851.924422603],
            'time': 2000,
            'complete': function () {
            }
        });
    }

    let acssessorysrc, objsPathline = [], objsPoints = [];
    // 创建配件实例
    let atm = new Attachment();
    let data = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': [
                        [
                            108.984375,
                            34.45221847282654
                        ],
                        [
                            126.5625,
                            45.9511496866914
                        ]
                    ]
                }
            },
            
        ]
    }
    for (let i = 0; i < data.features.length; i += 1) {
        let baseObj = app.create({
            type: 'BaseObject',
        });
        let coors = data.features[i].geometry.coordinates;
        baseObj.position = CMAP.Util.convertLonlatToWorld(data.features[i].geometry.coordinates[0]);
        baseObj.startLonlat = coors[0];
        baseObj.endLonlat = coors[1];
        baseObj.userData._TYPE_ = 'GEOODLINE';
        baseObj.name = data.features[i].properties['终点'];
        objsPathline.push(baseObj);
    }
    // 引用标记资源路径
    acssessorysrc = '/Resources/bundle/admin/RMK100000000258331';
    atm.create(objsPathline, acssessorysrc, { sceneType: '地图' }).then(function (obj) {
        console.log(obj.configUI);
    });
})
/**
 * 园区中使用线标记
 */
// 引入标记
THING.Utils.dynamicLoad([
    // 引入标记库
    '/static/attachment/js/objectdecorator.min.js',
],
    function () {
        // 创建标记实例
        let atm = new Attachment();

        // 加载场景后执行
        app.on('load', function (ev) {
            // 收集标记挂载对象
            let car = app.query('car01')[0], atmPath, configUI, atmObj;
            car.userData.DATA = {};
            car.userData.DATA.points = [[0, 0, 0], [20, 0, 0]];
            create();

            async function create() {
                // 路径
                atmPath = '/Resources/bundle/admin/RMK100000000258331';
                let results = atm.create(car, atmPath, { sceneType: '园区' });
                configUI = await atm.getConfigUI(atmPath);
                console.log('配置项', configUI);
                // 标记对象
                atmObj = await results.then(rep => { return rep.objects })
                console.log('标记对象', atmObj);
            }
        });
    })
// 离线开发引入森图表脚本
THING.Utils.dynamicLoad([
    '/static/plugins/compile.js',
    '/static/plugins/vue.min.js',
    '/Resources/senChart/admin/01d85797443341f0851af8da03919cb6/01d85797443341f0851af8da03919cb6.js'
  ],
    function () {
        /**
         * 园区或地图初始化完成后加载图表
         */
        createButton();
        let c = new window.conch['C01d85797443341f0851af8da03919cb6'](document.querySelector('#chartDom'), {
            prefix: '/Resources/senChart/admin/01d85797443341f0851af8da03919cb6'
        })
        c.render();
    })

    

  /**
   * 利用模板字符串 创建页面元素并添加到div2d中
   */
  function createButton() {
    // 使用 bootstrap 样式
    var template =
        "<div id='chartDom' style='position:absolute;left:20px;top:20px;z-index:2;width:400px;height:250px;'></div>";
    var btn = $('#div2d').append($(template));
    return btn;
  }
  /**
* 名称：极光地图
* 说明：当前效果模板仅适用于渲染地图效果
*/
// 加载地图
// 设置app背景为黑色
app.background = [0, 0, 0];
// 引用地图组件脚本
THING.Utils.dynamicLoad(['/source/uearth.min.js'], function () {
    // 渲染模板的url
    const mapUrl = '/Resources/EffectTemplate/admin/1445';
    app.create({
        type: 'Map',
        //此处可更换为CityBuilder生成的地图URL链接
        url: 'https://www.thingjs.com/citybuilder_console/mapProject/config/TVRJeE9EQTFDaXR5QnVpbGRlckAyMDE5/true',
        complete: function (event) {
            // 进行效果模板渲染
            const resourceConfig = {
                resourcePrefix: mapUrl
            };
            CMAP.Util.applyTemplate(mapUrl+'/map.json', resourceConfig);
        }
    });
});


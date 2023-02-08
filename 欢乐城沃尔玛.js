

var line;
// 加载场景代码 
var app = new THING.App({ resourceLibraryUrl: "./",
    url: './scene/1/'
});
THING.Utils.dynamicLoad([
    './uploads/wechat/138942/file/欢乐城沃尔玛/css/CementPlant2.css',
    './uploads/wechat/138942/file/欢乐城沃尔玛/css/swiper.min.css',
    './uploads/wechat/138942/file/欢乐城沃尔玛/css/visual.css',
    './uploads/wechat/138942/file/欢乐城沃尔玛/css/index.css',
    './uploads/wechat/138942/file/欢乐城沃尔玛/css/range.css',
    './uploads/wechat/138942/file/欢乐城沃尔玛/js/range.js',
    './uploads/wechat/138942/file/欢乐城沃尔玛/css/index1.css',
    './uploads/wechat/138942/file/欢乐城沃尔玛/js/echarts.min.js',
    './uploads/wechat/138942/file/欢乐城沃尔玛/js/swiper.min.js',
    './uploads/wechat/138942/file/欢乐城沃尔玛/js/bootstrap.min.js',
    './uploads/wechat/138942/file/欢乐城沃尔玛/js/visual.js',
    './uploads/wechat/138942/file/欢乐城沃尔玛/js/test.js',





], function () {
    app.on('load', function () {
        let html = `
            <!--<div class="currentTime" style="position: relative; top: 50px;height: 23px;width: 160px;background-color: #fff;color: #000;margin: auto"></div>-->
            <div class="timeRangeParent" style="position:absolute;bottom:40px;display:none">
            <div class="timeRange fl" style="display:none">
                    <input type="hidden" value="" class="single-slider none">
                </div></div>`;
        $('#div2d').append($(html));
        initTimeBar();
        createChart();
    })
})

app.on('load', function () {
    var obj = app.query('.Building');
    for (let i = 0; i <= obj.length - 1; i++) {
        //鼠标划过顶牌展示
        obj[i].on("mouseenter", function (ev) {
            if ($("#pretjs" + obj[i].id).length <= 0) {
                createTopCardFour(obj[i]);
            }
        })
    }
    carmovesetting1();
    carmovesetting2();
    carmovesetting3();
});
// var a = document.getElementById('div3d');
// a.style.background = '#000';
// function create_html() {
//     var template = '<canvas id="canvas"></canvas>';
//     // 插入到 ThingJS 内置的 2D 界面 div 中
//     $('#div2d').append($(template));
// }

// // 创建 CanvasTexture
// var canvasTexture = new THREE.CanvasTexture(
//     $('#canvas')[0]
// )
// // 如果需要背景平铺
// // canvasTexture.wrapS = THREE.RepeatWrapping;
// // canvasTexture.wrapT = THREE.RepeatWrapping;

// // update事件可加入场景实时动态(公共)
// app.on('update', function () {
//     canvasTexture.needsUpdate = true;
//     app.scene.background = canvasTexture;
// });

// // 屏幕自适应,防止改变分辨率背景拉伸(公共)
// app.on('resize', function (e) {
//     if (!canvasTexture) return;
//     let texture = canvasTexture;
//     let { width, height } = app.renderer.getSize();
//     let screenAspect = width / height;
//     let imageAspect = texture.image.width / texture.image.height;

//     if (screenAspect < imageAspect) { // image width out
//         texture.offset.set(0, 0.5 - imageAspect / screenAspect * 0.5);
//         texture.repeat.set(1, imageAspect / screenAspect);
//     }
//     else { // image heigh out
//         texture.offset.set(0.5 - screenAspect / imageAspect * 0.5, 0);
//         texture.repeat.set(screenAspect / imageAspect, 1);
//     }

// })
//顶牌
function topCardHtmlFour(obj) {
    let topCardbox4 = `
        <div class="pre-topCard-box4" id="pretjs`+ obj.id + `" style="display:none">
            <div class="pre-topCard-box-content">
                <ul class="pre-topCard-content-list">
                    <li class="pre-topCard-content-list-item">
                        <span class="pre-topCard-list-item pre-topCard-list-item-key"></span>
                        <span>:</span>
                        <span class="pre-topCard-list-item pre-topCard-list-item-value">` + obj.name + `</span>
                    </li>
                </ul>
            </div>
        </div>
    `
    $('#div3d').append($(topCardbox4));
}
// 生成一个新面板
function create_element4(e) {
    topCardHtmlFour(e)
    var srcElem = document.getElementById("pretjs" + e.id);
    var newElem = srcElem.cloneNode(true);
    newElem.style.display = "block";
    app.domElement.insertBefore(newElem, srcElem);
    return newElem;
}
var ui4 = null;
function createTopCardFour(e) {
    ui4 = app.create({
        type: 'UIAnchor',
        parent: e,
        element: create_element4(e),
        localPosition: [0, 8, 0],
        pivot: [1, 1]
    });
}

//后期设置
function settingPreView() {

    // 引入天空盒
    $.get('./resource/skybox/api/1d5ad8e9f580675ee5e7c7f7', function (result) {
        app.skyBox = JSON.parse(result);
    });

    // 屏幕后期处理效果参数
    var effectConfig = {
        temporalSuperSampling: {
            enable: false,
            size: 30
        },
        postEffect: {
            enable: true,
            bloom: {
                enable: false,
                strength: 0.14,
                radius: 0.4
            },
            screenSpaceAmbientOcclusion: {
                enable: false,
                radius: 0.2,
                intensity: 0.8
            },
            colorCorrection: {
                enable: true,
                exposure: 0,
                brightness: 0,
                contrast: 1.3000000000000003,
                saturation: 1.2,
                gamma: 1
            },
            vignette: {
                enable: false,
                type: 'blur',
                color: '0',
                offset: 1.5
            },
            film: {
                enable: false,
                grayscale: false,
                noiseIntensity: 0.35,
                scanlinesIntensity: 0,
                scanlinesCount: 2048
            },
            RBSplit: {
                enable: false,
                offsetX: 2,
                offsetY: 2
            },
            FXAA: {
                enable: false
            }
        },
    };
    app.postEffect = effectConfig;

    // 环境光对象
    var ambientLight = {
        intensity: 0.6,
        color: '16777215',
    };
    // 半球光照
    var hemisphereLight = {
        intensity: 0,
        color: '16777215',
        groundColor: '2236962',
    };
    // 主灯光对象
    var mainLight = {
        shadow: false,
        intensity: 0.5,
        color: '16777215',
        alpha: 30,
        beta: 30,
    };
    // 第二光源对象
    var secondaryLight = {
        shadow: false,
        intensity: 0,
        color: '16777215',
        alpha: 138,
        beta: 0,
    };
    // 全局配置
    var config = {
        showHelper: false,
        ambientLight,
        hemisphereLight,
        mainLight,
        secondaryLight
    };
    app.lighting = config;
}
//小车1沿轨迹运动
function carmovesetting1() {
    var points = [];
    for (var x = -16.0960007; x <= 190; x += 0.25) {
        var y = 0.01;
        var z = 99.6060028;
        points.push([x, y, z])
    }
    points.push([194, 0.01, 99.6060028]);
    points.push([194, 0.01, 95]);
    points.push([189.9039993, 0.01, 95]);
    for (var x = 189.9039993; x >= -530; x += -0.25) {
        // console.log("走循环")
        var y = 0.01;
        var z = 95;
        points.push([x, y, z])
    }
    points.push([-533, 0.01, 94.1940002]);
    points.push([-533, 0.01, 100]);
    points.push([-529.8799973, 0.01, 100]);
    for (var x = -529.8799973; x <= -16.0960007; x += 0.25) {
        var y = 0.01;
        var z = 99.6060028;
        points.push([x, y, z])
    }
    // 创建轨迹线
    line = app.create({
        type: 'Line',
        color: 0xFFFFFF, // 轨迹线颜色
        points: points,

    })
    line.showLines(false);
    // 小车开始沿轨迹线运动
    var texi01 = app.query('#出租车A00')[0];
    texi01.movePath({
        'path': line.points, // 轨迹路线
        'time': 50000, // 移动时间
        'orientToPath': true, // 物体移动时沿向路径方向
        'loopType': THING.LoopType.Repeat
    });

}
//小车2沿轨迹移动
function carmovesetting2() {
    var path1 = [];
    for (var x = -72.8799973; x >= -530; x += -0.25) {
        var y = 0.01;
        var z = 94.1940002;
        path1.push([x, y, z])
    }
    path1.push([-533, 0.01, 94.1940002]);
    path1.push([-533, 0.01, 100]);
    path1.push([-529.8799973, 0.01, 100]);
    for (var x = -529.8799973; x <= 190; x += 0.25) {
        var y = 0.01;
        var z = 100;
        path1.push([x, y, z])

    }
    path1.push([194, 0.01, 99.6060028]);
    path1.push([194, 0.01, 95]);
    path1.push([189.9039993, 0.01, 95]);
    for (var x = 189.9039993; x >= -72.8799973; x += -0.25) {
        var y = 0.01;
        var z = 95;
        path1.push([x, y, z])

    }
    // 创建轨迹线
    line = app.create({
        type: 'Line',
        color: 0xFFFFFF, // 轨迹线颜色
        points: path1,
    })
    line.showLines(false);
    // 小车开始沿轨迹线运动
    var car03 = app.query('#敞篷小跑03')[0];
    // console.log(car03.position)
    car03.movePath({
        'path': line.points, // 轨迹路线
        'time': 50000, // 移动时间
        'orientToPath': true, // 物体移动时沿向路径方向
        'loopType': THING.LoopType.Repeat
    });
}
//小车3沿轨迹移动
function carmovesetting3() {
    var path2 = [];

    for (var x = -451.375; x <= 190; x += 0.25) {
        var y = 0.01;
        var z = 100.3499985;
        path2.push([x, y, z])
    }
    path2.push([194, 0.01, 99.6060028]);
    path2.push([194, 0.01, 95]);
    path2.push([189.9039993, 0.01, 95]);
    for (var x = 189.9039993; x >= -530; x += -0.25) {
        // console.log("走循环")
        var y = 0.01;
        var z = 95;
        path2.push([x, y, z])
    }
    path2.push([-533, 0.01, 94.1940002]);
    path2.push([-533, 0.01, 100]);
    path2.push([-529.8799973, 0.01, 100]);
    for (var x = -529.8799973; x <= -451.375; x += 0.25) {
        // console.log("走循环")
        var y = 0.01;
        var z = 100.349998;
        path2.push([x, y, z])
    }
    // 创建轨迹线
    line = app.create({
        type: 'Line',
        color: 0xFFFFFF, // 轨迹线颜色
        // dotSize: 2, // 轨迹点的大小
        // dotColor: 0xFF0000, // 轨迹点的颜色
        points: path2,
    })
    line.showLines(false);
    var texi02 = app.query('#出租车A01')[0];
    texi02.movePath({
        'path': line.points, // 轨迹路线
        'time': 60000, // 移动时间
        'orientToPath': true, // 物体移动时沿向路径方向
        'loopType': THING.LoopType.Repeat
    });
}
//初始化时间轴
function initTimeBar() {

    var dayArr = [];
    for (var i = 0; i <= 96; i++) {
        dayArr.push(i);
    }
    var last = parseInt(dayArr[dayArr.length - 1]);
    $('.timeRange').children().remove();
    var div = '<input type="hidden" value="" class="single-slider none">';
    $('.timeRange').html(div)
    $('.single-slider').jRange({
        from: 1,
        to: last,
        step: 1,
        scale: dayArr,
        format: '%s',
        width: 1000,
        showLabels: true,
        snap: true
    });
    //获取当前时间
    setInterval(function () {
        //判断是否在前面加0
        function getNow(s) {
            return s < 10 ? '0' + s : s;
        }
        var myDate = new Date();
        var year = myDate.getFullYear();        //获取当前年
        var month = myDate.getMonth() + 1;  //获取当前月
        var date = myDate.getDate();            //获取当前日
        var week = myDate.getDay();
        var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var h = myDate.getHours();              //获取当前小时数(0-23)
        var m = myDate.getMinutes();          //获取当前分钟数(0-59)
        var s = myDate.getSeconds();
        var now = year + '-' + getNow(month) + "-" + getNow(date) + " " + getNow(h) + ':' + getNow(m) + ":" + getNow(s);
        $(".currentTime").html(now);

    }, 1000);
    // //模拟时间变化
       let num = 0;
       let maxnum = 96;
       function settimego(){
           num++;
           if(num <= maxnum){
               setTimeout(settimego,1000);
               setGuang(num);
                //  console.log(num)
               if(num == maxnum){
                   num=0;
               }
           }
       }
       setTimeout(settimego,1000)
    // $('input.single-slider').on('change', function () {
    //     setGuang($(this).val());
    // })


}



function setGuang(value) {
    let time = value / 4;
    let night = time < 6 || time > 18;
    let lerp = Math.min(1, Math.max(0, 1 - Math.abs(time - 12) / 6));
    let alpha = (time - 6) * 15;
    //夜晚
    if (value == 0 || time < 6 || time > 18) {
        alpha = 360 + alpha;
        // 引入天空盒
        $.get('./resource/skybox/api/48f7f2bfa93eea4a2f52049f', function (result) {
            app.skyBox = JSON.parse(result);
        });
        // create_html();
        
    }
    //日出
    if (time > 6 && time < 8) {
        alpha = 360 + alpha;
        // 引入天空盒
        $.get('./resource/skybox/api/7cb1b1b78bdd87a20741f94e', function (result) {
            app.skyBox = JSON.parse(result);
        });
    }
    //白天
    if (time > 8 && time < 16) {
        alpha = 360 + alpha;
        // 引入天空盒
        $.get('./resource/skybox/api/1d5ad8e9f580675ee5e7c7f7', function (result) {
            app.skyBox = JSON.parse(result);
        });
    }
    //日落
    if (time > 16 && time < 18) {
        alpha = 360 + alpha;
        // 引入天空盒
        $.get('./resource/skybox/api/a43194d49ac4cb3cf83583f8', function (result) {
            app.skyBox = JSON.parse(result);
        });
    }
    var config = {
        // showHelper: true,
        ambientLight: {
            intensity: night ? 0.2 : Math.min(Math.max((lerp + 0.2), 0.1), 0.4),
            color: '16777215',
        },
        hemisphereLight: {
            intensity: night ? 0.2 : Math.min(Math.max((lerp + 0.3), 0.1), 0.4),
            color: '16777215',
            groundColor: '2236962'
        },
        mainLight: {
            shadow: true,
            shadowQuality: 'high',
            intensity: night ? 0.001 : 0.4,
            color: '16777215',
            alpha: alpha,
            beta: 90
        },
        secondaryLight: {
            intensity: 0
        },
        tertiaryLight: {
            intensity: 0
        },
        colorCorrection: {
            enable: true,
            contrast: 1.3,
            saturation: 1.2
        }
    }
    app.lighting = config;
}
function createChart() {
    $.ajax({
        url: '/uploads/wechat/138942/file/欢乐城沃尔玛/html/index.html',
        type: 'get',
        async: false,
        cache: false,
        success: function (res) {
            $('#div2d').append($(res));
            test();
        }
    })
}
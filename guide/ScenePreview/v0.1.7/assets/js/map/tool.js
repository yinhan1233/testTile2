class Tool {
    constructor(param) {
        this.map = param.map;
        this.app = param.app;
        this.isLayer = false;
        this.layerVisible = [];
        this.lineNum = 0;
        this.line= '';
        this.isOpen = false;
        this.init();
    }
    init() {
        let that = this
        this.initHtml();
        this.creatControls();
        this.flyToProjectClick();
        this.zoomCameraClick();
        this.turnToNorthClick();
        this.mapSearch();
        this.stopRotate();
        this.searchSelectedClick();
        this.distance();
    }

    initHtml() {
        let sign;
        let sign2;
        sign= `<div  class="rightTop-icon-nav" id="rightTop-icon-nav" >
            <div  class="answer-list">
                <div class="single-row-ellipsis1" >
                    <ul  class="ivu-dropdown-menu">
                    </ul>
                </div>
                <div class="no-answer-info-box style="display:block"">
                        <span>暂无搜索结果</span>
                </div>
            </div>
            <div  class="rightTop-icon rtdmerge1 search " id='mapSearch'>
                <span  class="search-icon-box" id="search-input">
                    <span title="搜索" class="icon-map  icon-sousuo "></span>  
                </span>       
                <input id='thing-search-input' autocomplete="off" type="text" placeholder="搜索地点"/>
                <span class="span3 up icon-map  icon-fanhui-down"  id ='searchType'>地图</span>
                <div class="search-type-g">
                    <ul>
                        <i class='earthInfo iconDui icon-dui' id='earthInfo'></i>
                        <li id='searchSelected_1'  data-type="1">
                            地图信息
                        </li>
                        <i class='layerInfo iconDui icon-dui' id='layerInfo'></i>
                        <li id='searchSelected_2'  data-type="2">
                            图层数据
                        </li>
                    </ul>
                </div>
            </div>
            <div  title="定位" class="rightTop-icon1 rtdmerge" id="flyToProject">
                <span  class="icon-map icon-dingwei3"></span>
            </div>
            <div  title="测距" class="rightTop-icon1 rtdmerge" id="distance">
            <span  class="icon-map icon-chizi iconfont-bold"></span>
            </div>
            <div  title="放大" class="rightTop-icon1 rtdmerge" id='zoomCameraAdd'>
                    <span  class="icon-map icon-fangda"></span>
            </div>
            <div  title="缩小" class="rightTop-icon1 rtdmerge" id='zoomCameraSub'>
                <span  class="icon-map icon-suoxiao"></span>
            </div>
        </div>`             
        
        
        sign2 = `<div title="指北针"class="rightTop-icon rtmerge-bottom "  id='turnToNorth'>
            <span id="earthCompass" class="icon-map icon-zhibeizhen  " title="指北针"></span> 
        </div>`;

        $('#div2d').append(sign);
        $('#div3d').append(sign2);
       
        
    }
    // 地图查询
    mapSearch() {
        let that = this;
        $('#mapSearch').on('click', function (event) {
            if ($('#mapSearch').css('width') == '34px') {
                that.openOrCloseSearch(true);
            } else {
                if ($("#thing-search-input")[0].value) {
                    that.clearAnswerList();
                    that.getAnswerList($("#thing-search-input")[0].value);
                }
            }
            event.preventDefault();
            event.stopPropagation();
        })
        // 输入事件
        that.searchOnInput();
    }

    openOrCloseSearch(flag) {
        let that = this;
        if (flag) {
            $('#mapSearch').animate({ width: '196px' });
            $('#thing-search-input').css("display", "block");
            $('#searchType').css("display", "block");
            $("#thing-search-input").focus();
        } else {
            that.clearAnswerList();
            document.getElementById("thing-search-input").value = ''
            $('#mapSearch').animate({ width: '34px' });
            $("#thing-search-input").blur();
            $('#thing-search-input').css("display", "none");
            $('#searchType').css("display", "none");

            if ($('.search-type-g').css('display') != 'none') {

                $('.search-type-g').css({
                    display: 'none'
                });
            }

            // that.destroyLayer();
        }
    }

    /**
     * 清除输入框中的内容
     */
    clearAnswerList() {
        $('.ivu-dropdown-menu').children().filter('li').remove()
        $('.ivu-dropdown-item .single-row-ellipsis .name').remove()
        $('.ivu-dropdown-item .single-row-ellipsis .name').html('')
        $(".no-answer-info-box").css("display", "none");
    }


    searchOnInput() {
        let that = this;
        $('#thing-search-input').on('input', function (event) {
            if (event.target.value.length > 0) {
                that.getAnswerList(event.target.value);
                $(".no-answer-info-box").css("display", "none");
            } else {
                that.getAnswerList(null);
                $(".no-answer-info-box").css("display", "block");
            }
        })

        $('#thing-search-input').on('click',function(event){
            $('.span3').addClass('up');
            $('.search-type-g').slideUp();
            $('.span3').addClass('icon-fanhui-down');
            $('.span3').removeClass('icon-jiantou');
        })
    }

    /**
     * 点击 地图标签
     */
    searchSelectedClick() {
        let that = this;
        $('#searchSelected_1').on('click', function (event) {
            let value = '地图'
            that.isLayer = false;
            $('#earthInfo').css({ display: 'block' });
            $('#layerInfo').css({ display: 'none' });
            $('.span3').text(value);
            $('.rightTop-icon.rtdmerge1.search').attr('data-id', value);
            that.searchBoxShowHide($('.span3')[0]);
            let name = $('#thing-search-input').val("");
            $('#earthInfo').css({ display: 'block' });
            $('#layerInfo').css({ display: 'none' });
            if (name) that.getAnswerList(name);
            event.preventDefault();
            event.stopPropagation();
        })
        $('#searchSelected_2').on('click', function (event) {
            let value = '图层'
            that.isLayer = true;
            $('#earthInfo').css({ display: 'none' });
            $('#layerInfo').css({ display: 'block' });
            $('.span3').text(value);
            $('.rightTop-icon.rtdmerge1.search').attr('data-id', value);
            that.searchBoxShowHide($('.span3')[0]);
            let name = $('#thing-search-input').val("");
            if (name) that.getAnswerList(name);
            event.preventDefault();
            event.stopPropagation();
        })

        $('#searchType').on('click', function (event) {
            that.searchBoxShowHide($('.span3')[0]);
            event.preventDefault();
            event.stopPropagation();
        });
    }

    /**
     * 选择地图信息和图层数据
     */
    searchBoxShowHide(ev) {
        if ($(ev).hasClass('up')) {
            $(ev).removeClass('up');
            $('.search-type-g').slideDown();
            $(ev).removeClass('icon-fanhui-down');
            $(ev).addClass('icon-jiantou');
        } else {
            $(ev).addClass('up');
            $('.search-type-g').slideUp();
            $(ev).addClass('icon-fanhui-down');
            $(ev).removeClass('icon-jiantou');
        }
    }

    getAnswerList(searchKey) {
        let that = this;
        let answerList = [];
        that.clearAnswerList();
        that.app.pauseEvent(THING.EventType.MapLevelChange,null,'getCurLevel__');   //暂停层级事件getCurLevel
        if (that.isLayer) {
            //图层
            CMAP.getCurrentMap().allLayers.forEach(function (layer) {
                if (layer.name != '高德地图') {
                    if (layer.name.indexOf(searchKey) != -1) {
                        //找到了
                        answerList.push(layer.name);
                    }
                }
            });

            var baseLayerListClick = function (name) {
                that.destroyLayer(); // 清空图层
                that.getCurrentBaseLayerVisible();  //保存所有的图层的visible值

                $('#thing-search-input').val(name);    //赋值
                let layers = CMAP.getCurrentMap().allLayers;
                layers.forEach(function (layer) {
                    if (layer.name.indexOf('乡镇边界') != -1) {
                        that.app.camera.earthFlyTo({
                            object: layer,
                            time: 2000,
                            heading: 94,
                            pitch: 38,
                            height: 6000,
                            complete: function () {
                                layers.forEach(function (otherLayer) {
                                    if (otherLayer.name != '高德地图' && otherLayer.name != name) {
                                        otherLayer.visible = false;
                                    } else {
                                        otherLayer.visible = true;
                                    }
                                });
                            }
                        });
                    }
                });
            }
            that.setList(answerList, baseLayerListClick);     //测试    
        } else {
            //地球
            $.ajax({
                type: 'GET',
                url: 'https://restapi.amap.com/v3/config/district?keywords=' + searchKey + '&key=5791cdaf02f4d44fd979a9f89739d06c&extensions=all',
                dataType: 'json',
                success: function (result_) {
                    let coor
                    if (result_.count > 0) {
                        JSON.stringify(answerList.push(result_.districts[0].name + '(区划)'));
                        coor = result_.districts[0].polyline;
                    }
                    $.ajax({
                        type: 'GET',
                        url: 'https://restapi.amap.com/v5/place/text?keywords=' + searchKey + '&output=json&offset=50&page=1&key=5791cdaf02f4d44fd979a9f89739d06c&extensions=all',
                        dataType: 'json',
                        success: function (result) {
                            if (result.pois && result.pois.length > 0) {
                                let res = result.pois;
                                res.forEach((e) => {
                                    JSON.stringify(answerList.push(e.name));
                                });

                                var listClick = function (name) {
                                    that.destroyLayer(); // 清空图层
                                    that.resumeLayer(); //恢复基础图层显示
                                    if (JSON.parse(JSON.stringify(answerList))[0] == name) {
                                        // 点击的是区划  调用面图层
                                        if (result_.districts.length > 0) {
                                            let pos = result_.districts[0].center.split(',');
                                            let lonlat = [parseFloat(pos[0]), parseFloat(pos[1])];
                                            $("#thing-search-input").val(name);
                                            $("#thing-search-input").blur();

                                            that.app.camera.flyToGeoPosition({
                                                lonlat: lonlat,
                                                height: 209811,
                                                time: 2000,
                                                pitch: 50,
                                                complete: function () {
                                                    let layers = that.initBaseLayer();
                                                    that.createArea(coor);
                                                    that.createTagPoint(lonlat, 'point', 2, layers, 0, name);  //创建标记点 原来的
                                                    if (name == null) {
                                                        coor = []
                                                    }
                                                }
                                            });
                                        }
                                    } else {
                                        for (let key in res) {
                                            if (res[key].name == name) {
                                                let pos = res[key].location.split(',');
                                                let lonlat = [parseFloat(pos[0]), parseFloat(pos[1])];
                                                $("#thing-search-input").val(name);
                                                $("#thing-search-input").blur();
                                                that.app.camera.flyToGeoPosition({
                                                    lonlat: lonlat,
                                                    height: 1500,
                                                    time: 2000,
                                                    pitch: 60,
                                                    complete: function () {
                                                        let layers = that.initBaseLayer();
                                                        that.createTagPoint(lonlat, 'point', 2, layers, 0, name);  //创建标记点
                                                    }
                                                });
                                            }
                                        }
                                    }
                                }
                                that.setList(answerList, listClick);
                                searchKey = ''
                            }
                        }
                    })


                }
            });
        }     
    }

    /**
     * 恢复地球省市图层
     */
    resumeLayer() {
        let that = this;
        that.app.query('#thingjs_layer').forEach(function (layer) {
            layer.visible = true;
        });
    }

    setList(answerList_, listClick) {
        let that = this;
        that.clearAnswerList();
        if (answerList_.length == 0) {
            return;
        }
        // $(".no-answer-info-box").css("display", "none");
        $(".answer-list").css("display", "block");
        for (let i = 0; i < answerList_.length; i++) {
            let thisLi = `<li class="ivu-dropdown-item" id="ivu-dropdown-item">
                            <div class="single-row-ellipsis">
                                <span class="name" title="` + answerList_[i] + `" >`
                + answerList_[i] + `</span>
                            </div>
                         </li>`
            $('.single-row-ellipsis1 .ivu-dropdown-menu').append(thisLi);
        }
        $('.ivu-dropdown-item').on('click', function (event) {
            let name = $(this).children('div').children('span').text().replace(/[ ]/g, "")
            if (listClick && typeof listClick == "function") {
                listClick(name);
                $(".answer-list").css("display", "none");
            }
            event.preventDefault();
            event.stopPropagation();
        })
    }

    // 销毁图层下的子元素 默认销毁thingjs_layer
    destroyLayer(layerName) {
        let that = this;
        layerName = layerName || 'thingjs_layer';
        let baseLayer = that.app.query(layerName)[0];
        if (!baseLayer || !baseLayer.children) return
        // 删除临时创建的区域 (一定要反向遍历)
        for (let i = baseLayer.children.length - 1; i >= 0; i--) {
            let v = baseLayer.children[i];
            v.destroy();
        }
    }

    // 创建基础图层 默认叫thingjs_layer
    initBaseLayer(baseLayerName) {
        let that = this;
        baseLayerName = baseLayerName || 'thingjs_layer'
        let layers = that.app.query(baseLayerName)[0];
        if (layers) { return layers }; // 已存在基础图层

        layers = that.app.create({
            type: 'ThingLayer',
            name: baseLayerName,
        });
        that.map.addLayer(layers);
        return layers
    }

    // center 点坐标、  Tag 类型、 i 第几个 data-id =i + Tag、 layers 存到的图层
    createTagPoint(center, Tag, i, layers, height, text) {
        let that = this;
        layers = layers || that.initBaseLayer();
        if (typeof text == "undefined") text = i;
        height = height || 10
        // 创建点
        let geoPoint = that.app.create({
            type: 'GeoPoint',
            name: 'point1',
            coordinates: center,
            offsetHeight: 1, //离地高度 单位:米
            userData: { 'name': text},
            pivot: [0.5, 1], //指定轴心点位置为图片x方向中点y方向最下
            scale:[0,0,0],
            infoWindow: {
                'displayMode': CMAP.DisplayMode.Always,
                'type': CMAP.InfoWindowType.Custom, // 自定义InfoWindow
                'customHtml': `<div class = "point-wrapper">
                    <div class="point-container">
                        <span class="point-text">{{name}}</span>
                        <div class="point-button"></div>
                    </div>
                </div>`,
                offset: [0, height, 0],
            },
            renderer: {
                type: "vector", //type有'image','model','vector'三种
                vectorType: 'circle',// 矢量符号形状 circle(圆形),triangle(三角形),rectangle(正方形),cross(十字)
                size: 0              // 对于image,vector 是一个数字 代表缩放倍数 对于model 是一个数组 代表xyz轴向的缩放比例
            }
        });
        layers.add(geoPoint);

        // 动画效果
        let time = 0.2 * (i - 1);
        $('div[data-id=' + (i + Tag) + ']').css({
            animation: 'jump 0.2s linear 1',
            'animation-delay': time + 's',
            'animation-fill-mode': 'forwards'
        });
    }

    //创建区域面
    createArea(coor, layers) {
        let that = this;
        that.destroyLayer();

        let a = coor.split('|');
        let endDataArray = [];
        a.forEach(function (b) { 
            let c = b.split(';')
            let arrayData = [];
            c.forEach(function (d) {
                let e = d.split(',');
                arrayData.push([Number.parseFloat(e[0]), Number.parseFloat(e[1])]);
            });
            endDataArray.push(arrayData);
        });
        layers = layers || that.initBaseLayer();
        var geoPolygon = that.app.create({
            type: 'GeoPolygon',
            name: 'thingjs_layer',
            coordinates: endDataArray, // 支持Polygon和MultiPolygon,格式可参考geoJson规范
            renderer: {
                type: 'vector', // GeoPolygon渲染类型 支持纯色(vector)和贴图(image)两种类型
                color: [170, 217, 239], // 面填充颜色, type是vector时生效
                opacity: 0.2, // 填充不透明度
                // outlineColor: [119, 178, 234], // 边框色
                outlineColor: [255, 255, 255], // 边框色
                outlineWidth: 3 // 边框宽度
            }
        });
        // that.map.addLayer(geoPolygon)
        layers.add(geoPolygon);
    }

    //图层当前图层信息搜索
    searchCurrentLayer(answerList, baseLayerListClick) {
        var _this = this;
        _this.destroyLayer(); // 清空图层
        _this.clearAnswerList();

        CMAP.getCurrentMap().allLayers.forEach(function (layer) {
            if (layer.name != '高德地图') {
                answerList.push(layer.name);
            }
        });
        $('#thing-search-input').val(answerList[0]);    //赋值
        _this.setList(answerList, baseLayerListClick);     //测试
    }


    //获取当前图层的visible值
    getCurrentBaseLayerVisible() {
        let _this = this;
        CMAP.getCurrentMap().allLayers.forEach(function (layer) {
            _this.layerVisible.push(layer.visible);
        });
    }

    //恢复
    resumeBaseLayerVisible() {
        let _this = this;
        if (_this.layerVisible.length > 0) {
            let baseLayers = CMAP.getCurrentMap().allLayers;
            for (let i = 0; i < baseLayers.length; i++) {
                baseLayers[i].visible = _this.layerVisible[i];
            }
        }
    }

    //定位
    flyToProjectClick() {
        let that = this;
        $('#flyToProject').on('click', function (event) {
            that.app.resumeEvent(THING.EventType.MapLevelChange,null,'getCurLevel__');   //恢复层级事件getCurLevel
            that.openOrCloseSearch(false);
            that.destroyLayer(); // 清空图层
            let startView;
            $.ajax({
                type: 'GET',
                url: that.map._originUrl,
                dataType: 'json',
                success: function (data) {
                    that.resumeBaseLayerVisible();  //恢复图层
                    startView = data.data.cameraFlyTo;
                    that.app.camera.earthFlyTo({
                        heading: startView.heading,
                        height: startView.height,
                        lonlat: startView.lonlat,
                        pitch: startView.pitch
                        // time:3000
                    });
                }
            })
        })
    }

    //测距
    distance(){
        let that = this;
        $('#distance').on('click',function(e){
            if(!$(this).hasClass("distanceactive")){
                $(this).addClass("distanceactive");
                that.isOpen = true;
                that.createHtml();
                that.registerEvent();
            }else{
                $(this).removeClass("distanceactive");
                that.app.off(THING.EventType.SingleClick, '*', '创建测距线');
            }
        })
    }

    /**
     * 创建页面元素
     */
    createHtml() {
        var _this = this;
        // 距离标识界面
        let marker =
            `<div id="marker" class="card" style="display: none;">
                <span class="text">总长 ： <span class="value" style ='color:#cf1b1b'>0</span>  <span class="unit">公里</span> <br>  单击继续,双击或右键结束</span>
            </div>`;
        $('#div3d').append(marker);
        // 鼠标滑入节点提示界面
        let pointMarker = `<div id="pointMarker" class="card-label" style="display: none;"><span class='text'>拖拽可调整位置</span></div>`;
        $('#div3d').append(pointMarker);
        _this.registerEvent();
    }

    /**
     * 注册事件
     */
    registerEvent() {
        var _this = this;
        // 注册单击事件，创建测距线段实例
        _this.app.on(THING.EventType.SingleClick, '*', function(e) {
            if (e.button == 0) {
                _this.lineNum++;
                _this.line = new DrawLine({
                    app: _this.app,
                    modelNum: _this.lineNum,
                    currPosition: e.pickedPosition,
                    isOpen:_this.isOpen
                })
                _this.app.pauseEvent(THING.EventType.SingleClick, '*', '创建测距线');
            }
        }, "创建测距线");
    }

    //加减号缩放
    zoomCameraClick() {
        let that = this;
        $('#zoomCameraAdd').on('click', function (ev) {
            that.stopRotate();
            that.openOrCloseSearch(false);
            setTimeout(function () {
                that.map.zoom('in', 0.8);
            }, 100)
        })
        $('#zoomCameraSub').on('click', function (ev) {
            that.stopRotate();
            that.openOrCloseSearch(false);
            setTimeout(function () {
                that.map.zoom('out', 0.8);
            }, 100)
        })
    }

    //指北点击函数
    turnToNorthClick() {
        let that = this
        $('#earthCompass').on('click',function (event) {
            that.app.pauseEvent(THING.EventType.SingleClick,null,'进入第一人称点击事件');
            that.creatControls();
            setTimeout(function(){
                that.app.resumeEvent(THING.EventType.SingleClick,null,'进入第一人称点击事件');
            },500);
        })
    }

    // 添加指南针控件 使用dom元素创建 指北针不在3d内
    creatControls() {
        let that = this;
            that.app.addControl(new THING.EarthCompass({
                useElement: true,
                element: $('#earthCompass')[0],
                rotateToNorthSpeed: 0.5
            })
        );
    }

    //地球停止转动
    stopRotate() {
        let that = this;
        that.app.camera.stopRotateAround({
            isEarth: true
        });
    }
}
class Poi {
    constructor() {
        if (!CMAP.getCurrentMap() || !THING.App.current ) return;
        this.level_1 = 'poi_Capital'
        this.level_2 = 'poi_province'
        this.level_3 = 'poi_city'
        this.level_4 = 'poi_area'
        this.level_5 = 'poi_street'
        this.data = '';
        this.map = CMAP.getCurrentMap();
        this.app = THING.App.current;
        this.currentLevel = '';
        var currentLayers = [];//当前展示的图层
        this.initPerBar = {};
        this.initColorBar = {};
        var layers = this.map.userLayers.objects;
        layers.forEach((item)=>{
            if(item._type=="FeatureLayer" && !isNaN(item._id) && item.visible == true){
                currentLayers.push(item);
            }
        });
        this.currentLayers = currentLayers;
        this.isclick = '';
        this.init();
        this.initdata();
    }

    initdata(){
        let that = this;
        this.initPerBar = that.map.baseLayers[0].style.grayFilterPerBar;
        this.initColorBar = that.map.baseLayers[0].style.grayFilterColorBar;
        var  polygonLayer = that.app.query("总边界线图层")[0];
        if (!polygonLayer) {
            $.ajax({
                type: "GET",
                url: "/guide/ScenePreview/v0.1.4/assets/json/subline.json",
                dataType: "json",
                success: function (data) {
                    polygonLayer = that.app.create({
                        type: "FeatureLayer",
                        name: "总边界线图层",
                        dataSource: data,
                        geometryType: "GeoLine",
                        renderer: {
                            type: "image", // 贴图材质
                            lineType: "Plane", // 片状线
                            imageUrl: '/guide/ScenePreview/v0.1.4/assets/img/poi/orangeline.png', // 贴图路径
                            speed: 0.3, // 流动速度
                            width: 5, // 线的宽度
                        },
                    });
                    that.map.addLayer(polygonLayer);
                    polygonLayer.visible= false;
                }
            }) 
        }

        var cityLayer;
        $.ajax({
            type: "GET",
                url: "/guide/ScenePreview/v0.1.4/assets/json/cityLayers.json",
                dataType: "json",
                success: function (data) {
                    cityLayer = that.app.create({
                        type: "FeatureLayer",
                        name: "市边界线图层",
                        dataSource: data,
                        geometryType: "GeoLine",
                        renderer: {
                            type: "image", 
                            lineType:"Plane", 
                            width: 3, // 边框宽度
                            imageUrl:'/guide/ScenePreview/v0.1.4/assets/img/poi/purpleline.png',
                            speed:0.2,
                            
                        },
                    });
                    that.map.addLayer(cityLayer);
                    cityLayer.visible= false;
                }
        })
        var boundaryLine;
        var globalLineLayer ;
        var globalLayer;
        var globalPointone;
        var globalPointtwo;
        $.ajax({
            type: "GET",
                url: "/guide/ScenePreview/v0.1.4/assets/json/globalLine.json",
                dataType: "json",
                success: function (data) {
                    boundaryLine = that.app.create({
                        type: "FeatureLayer",
                        name: "全球分界线图层",
                        dataSource: data,
                        geometryType: "GeoLine",
                        renderer: {
                            type: "image", 
                            lineType:"Plane", 
                            width: 5, // 边框宽度
                            imageUrl:'/guide/ScenePreview/v0.1.4/assets/img/poi/bluewhiteline.png',
                            speed:0.2,
                            
                        },
                    });
                    that.map.addLayer(boundaryLine);
                    boundaryLine.visible= false;
                }
        })
        $.ajax({
            type:"GET",
            url:"/guide/ScenePreview/v0.1.4/assets/json/global.json",
            dataType:"json",
            success:function (data) {
                globalLineLayer = that.app.create({
                    type: "FeatureLayer",
                    name: "全球边界线图层",
                    dataSource: data,
                    geometryType: "GeoPolygon",
                    offsetHeight:700000,
                    renderer: {
                        outlinetype: "image", 
                        opacity: 0.001, 
                        outlineWidth: 6, 
                        outlineImageUrl:'/guide/ScenePreview/v0.1.4/assets/img/poi/tietuline.png',
                        outlineEffect:true,
                    },
                });
                globalLayer = that.app.create({
                    type: "FeatureLayer",
                    name: "全球边界图层",
                    dataSource: data,
                    geometryType: "GeoPolygon",
                    renderer: {
                        type: "vector", // 纯色填充
                        color: [6,92,222], // 填充色
                        opacity: 0.4, 
                        outlinetype: "image",
                        outlineWidth: 2, 
                        outlineImageUrl:'/guide/ScenePreview/v0.1.4/assets/img/poi/purpleline.png',
                        outlineSpeed:0.3,
                        outlineEffect:true,
                    },
                });
                globalPointone = that.app.create({
                    type: "FeatureLayer",
                    name: "全球点一图层",
                    dataSource: data,
                    geometryType: "GeoPolygon",
                    offsetHeight:450000,
                    renderer: {
                        type: "image", 
                        opacity: 1, 
                        imageUrl:'/guide/ScenePreview/v0.1.4/assets/img/poi/orange.png',
                        textureSize:[1000000,1000000],
                        outlineEffect:true,
                    },
                });
                globalPointtwo = that.app.create({
                    type: "FeatureLayer",
                    name: "全球点二图层",
                    dataSource: data,
                    geometryType: "GeoPolygon",
                    offsetHeight:600000,
                    renderer: {
                        type: "image", 
                        opacity: 1, 
                        imageUrl:'/guide/ScenePreview/v0.1.4/assets/img/poi/lightblue.png',
                        textureSize:[3000000,3000000],
                        outlineEffect:true,
                    },
                });
                that.map.addLayer(globalLineLayer);
                that.map.addLayer(globalLayer);
                that.map.addLayer(globalPointone);
                that.map.addLayer(globalPointtwo);
                globalLineLayer.visible= false;
                globalLayer.visible= false;
                globalPointone.visible= false;
                globalPointtwo.visible= false;
            }
        })
    }

    init(isclick) {
        let that = this;
        this.isclick = isclick;
        this.currentLevel = that.map.currentLevel;
        that.baseLayer = that.initbaseLayer('poi_基础图层')
        $.ajax({
            url:  '/guide/ScenePreview/v0.1.4/assets/json/location.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                that.data = data;
                that.changeLevel();
                that.mian();
                if(that.isclick){ 
                    that.mian(that.currentLevel);
                    that.zoomLevel(that.currentLevel);
                    that.poiPanelHtml();
                    that.poiPanel();
                }else{
                    that.zoomLevel(10);
                    that.offchangeLevel();
                    that.destroypoiPanel();
                }
            }
        })
    }

    // 创建基础图层
    initbaseLayer(baseLayerName) {
        let that = this;
        let baseLayer;
        let layers = that.map.query(baseLayerName)[0];
        if (layers) { return layers }; // 判断是否存在基础图层;

        baseLayer = this.app.create({
            type: 'ThingLayer',
            name: baseLayerName,
        });
        that.map.addLayer(baseLayer);  // 添加到地图上
        return baseLayer
    }

    // 创建顶牌
    createTopCard(data, baseLayer) {
        let that = this;
        let coor = data.coor;
        let userData = data.userData;
        let level = data.level;

        let geoPoint = that.app.create({
            type: 'GeoPoint',
            name: level,
            coordinates: coor,
            userData: userData,
            scale:[0,0,0],
            renderer: {
                type: 'vector',         // vector 代表使用内置矢量符号
                vectorType: 'circle',   // 矢量符号形状 circle(圆形),triangle(三角形),rectangle(正方形),cross(十字)
                size: 0                 // 尺寸
            },
            infoWindow: {
                'displayMode': CMAP.DisplayMode.Always, // 顶牌类型,
                'type': CMAP.InfoWindowType.Custom,      //自定义InfoWindow
                'customHtml': that.getInfoWindowHtml(level),
                'offset': [0, 5, 0]// 定点高度,
            }
        });

        if (baseLayer) {
            baseLayer.add(geoPoint)
            return
        }
        that.baseLayer.add(geoPoint);
    }

    // 层级切换事件
    changeLevel() {
        let that = this;
        that.app.on(THING.EventType.MapLevelChange, function (event) {
            that.mian(event.current)
            that.zoomLevel(event.current)
        }, 'getCurLevel__');
    }

    getInfoWindowHtml(level) {
        let text = 'Name'; // 和 params.userData对象里的key 是映射关系 style="pointer-events: none;"
        let infoHtml = `<div > 
                            <div class="poi-container">
                                <span class="panel-img" data-id=`+ level + `></span>
                                <span class='panel-text'>{{`+ text + `}}</span>
                                <div class="panel-sym">
                                    <div  class="panel-circle1"></div>
                                </div>
                            </div>
                        </div>`
        return infoHtml
    }

    mian(currentLevel) {
        let that = this;
        let level;
        that.hidePoint();
        if (that.isclick){
                // 显示北京
            if (currentLevel <= 2) {
                level = that.level_1;
                let item = that.data['100000'].children[0];

                if (that.app.query(/poi_Capital/).length > 0) {
                    that.app.query(/poi_Capital/).visible = true;
                    return
                }
                let data = {
                    coor: item.center,
                    userData: {
                        Name: item.name,
                    },
                    level: level
                }
                that.createTopCard(data);
                return
            }
            // 显示省
            if (2 < currentLevel && currentLevel <= 5) {
                level = that.level_2;
                if (that.app.query(/poi_province/).length > 0) {
                    that.app.query(/poi_province/).visible = true;
                    return
                }
                let province = that.data['100000'].children;
                province.forEach(item => {
                    let data = {
                        coor: item.center,
                        userData: {
                            Name: item.name,
                        },
                        level: level
                    }
                    that.createTopCard(data);
                })
                return
            }

            // 显示市
            if (5 < currentLevel && currentLevel <= 8) {
                let arr = []
                level = that.level_3;
                let baseP = that.initbaseLayer('poi_市区');
                that.destroyAll('poi_市区');
            
                Object.keys(that.data).forEach(key => {
                    let item = that.data[key];
                    if (item.level == 'province') {
                        if (item.name.indexOf('市') > -1) {
                            let data = {
                                coor: item.center,
                                userData: { Name: item.name },
                                level: level
                            }
                            that.createTopCard(data, baseP);
                        } else {
                            let c = item.children;
                            if (c) {
                                c.forEach(i => {
                                    arr.push(i.name)
                                    let flage = that.booleanPointInPolygon(i.center);
                                    if (flage) {
                                        let data = {
                                            coor: i.center,
                                            userData: { Name: i.name },
                                            level: level
                                        }
                                        that.createTopCard(data, baseP);
                                    }
                                })
                            }

                        }
                    }
                })
                that.app.query(/poi_city/).visible = true;
                return
            }

            // 显示区县
            if (8 < currentLevel && currentLevel <= 10) {
                // 特殊处理
                level = that.level_4;
                let baseP = that.initbaseLayer('poi_区县');
                that.destroyAll('poi_区县');
                // 获取区的 children
                Object.keys(that.data).forEach(key => {
                    let item = that.data[key];
                    if (item.level == 'district') {
                        let flage = that.booleanPointInPolygon(item.center);
                        if (flage) {
                            let data = {
                                coor: item.center,
                                userData: { Name: item.name },
                                level: level
                            }
                            that.createTopCard(data, baseP);
                        }
                    }
                })
            
                return
            }

            // 显示乡镇
            if (10 < currentLevel) {
                let item = that.app.query(/边界/)[0];
                if (item) {
                    let arr = item.children;
                    let uninclude = ['服务中心', '办事处'];
                    level = that.level_5;
                    arr.forEach(e => {
                        if (e.name.indexOf(uninclude) < 0) {
                            let center = e.centerCoordinates;
                            let data = {
                                coor: center,
                                userData: { Name: e.name },
                                level: level
                            }
                            that.createTopCard(data);
                        }
                    })
                }
            }
        }
    }

    hidePoint() {
        let that = this;
        that.app.query(/poi_基础图层/).visible = false
        that.app.query(/poi_区县/).visible = false;
        that.app.query(/poi_市区/).visible = false;
    }

    getClientBox() {
        let cw = JSON.parse($('#div3d').css('width').split('px')[0])
        let ch = JSON.parse($('#div3d').css('height').split('px')[0])
        
        let world1 = CMAP.Util.convertWindowToWorld([0, 0]);
        let world2 = CMAP.Util.convertWindowToWorld([cw, 0]);
        let world3 = CMAP.Util.convertWindowToWorld([cw, ch ]);
        if(!world1 || !world2 || !world3){
            return;
        }
        let world4 = CMAP.Util.convertWindowToWorld([0, ch ]);
        let p_1 = CMAP.Util.convertWorldToLonlat(world1);
        let p_2 = CMAP.Util.convertWorldToLonlat(world2);
        let p_3 = CMAP.Util.convertWorldToLonlat(world3);
        let p_4 = CMAP.Util.convertWorldToLonlat(world4);
        let arr = [[p_1, p_2, p_3, p_4, p_1]];
        return arr;
    }
    booleanPointInPolygon(point) {
        let that = this;
        let box = that.getClientBox();
        if(!box){
            return false;
        }
        var pt = turf.point(point);
        var poly = turf.polygon(box);
        return turf.booleanPointInPolygon(pt, poly);
    }

    // 销毁基础图层下的内容
    destroyAll(name) {
        let that = this;
        let baseLayer = that.app.query(name)[0]
        if (!baseLayer) return
        // 删除临时创建的区域 (一定要反向遍历)
        for (let i = baseLayer.children.length - 1; i >= 0; i--) {
            let v = baseLayer.children[i];
            v.destroy();
        }
    }

    //图层缩放显示隐藏
    zoomLevel(currentLevel) {
        let that = this;
        var globalLineLayer = that.app.query(/全球边界线图层/)[0];
        var boundaryLine = that.app.query(/全球分界线图层/)[0];
        var globalLayer = that.app.query(/全球边界图层/)[0];
        var globalPointone = that.app.query(/全球点一图层/)[0];
        var globalPointtwo = that.app.query(/全球点二图层/)[0];
        var subLayer = that.app.query(/总边界线图层/)[0];
        var cityLayer = that.app.query(/市边界线图层/)[0];
        var firstLayer =[];//面、水、点图层
        var secondLayer =[];//线、建筑图层 
        var tileLayer = that.map.baseLayers[0];
        that.currentLayers.forEach((itemlayer)=>{
            if(itemlayer.geometryType == "GeoPolygon" || itemlayer.geometryType == "GeoWater" || itemlayer.geometryType == "GeoPoint"){
                firstLayer.push(itemlayer);
            }
            else{
                secondLayer.push(itemlayer);
            }
        })
        //所有都图层隐藏
        if (that.isclick) {
            that.map.restrictedLevel = [0, 18];//控制地图最大显示层级
            that.app.background = '/guide/ScenePreview/v0.1.4/assets/img/poi/skybox.jpg';
            that.map.atmosphere = false;
            
            if (currentLevel <=3){
                tileLayer.style.template = CMAP.TileLayerStyle.CUSTOMCOLOR;
                tileLayer.style.grayFilterPerBar = [0, 0.10, 0.81, 0.88, 1];
                tileLayer.style.grayFilterColorBar = ["#66D5F1", "#639BA5", "#031234", "#081C4C", "#1A1A1A"];//表示颜色的渐变值
                globalLineLayer.visible =true;
                boundaryLine.visible = true;
                globalLayer.visible=true;
                globalPointone.visible =true;
                globalPointtwo.visible =true;
                subLayer.visible = true;
            }else{
                globalLineLayer.visible =false;
                if ($(".icon-poi").eq(0).hasClass("icon-lock")){

                    boundaryLine.visible = true;
                }else{
                    boundaryLine.visible = false;
                }
                globalLayer.visible=false;
                globalPointone.visible =false;
                globalPointtwo.visible =false;
                tileLayer.style.grayFilterPerBar = this.initPerBar; 
                tileLayer.style.grayFilterColorBar = this.initColorBar; 
            }
            //隐藏全国区划线，显示全市区划线
            if(currentLevel <= 5){
                subLayer.visible = true;
                if($(".icon-poi").eq(2).hasClass("icon-lock")){

                    cityLayer.visible = true;
                }else{
                    cityLayer.visible = false;
                }
            }
            else if(currentLevel>5){
                if($(".icon-poi").eq(1).hasClass("icon-lock")){

                    subLayer.visible = true;
                }else{
                    subLayer.visible = false;

                }
                cityLayer.visible = true;
               
            }
            if (currentLevel <= 8) {
                that.currentLayers.forEach((layer)=>{
                    layer.visible =false;
                })
            }
            //第一层图层显示
            else if(8<currentLevel){
                firstLayer.forEach((layer) =>{
                    layer.visible = true;
                    if($(".icon-poi").eq(1).hasClass("icon-lock")){
                        subLayer.visible = true;
                    }else{
                        subLayer.visible = false;;
                    }
                });
            } 
            //所有都图层显示
            if (currentLevel>10) {
                that.currentLayers.forEach((layer)=>{
                    layer.visible =true;
                    cityLayer.visible = true;
                })
            }
            //第二层图层隐藏
            else if (currentLevel<=10){
                secondLayer.forEach((layer) =>{
                    layer.visible = false;
                })
            }   
        }
        //所有图层都显示
        else{
            that.map.restrictedLevel = [0, 22];//控制地图最大显示层级
            that.map.atmosphere = true;
            that.app.background = [0,0,0];
            that.currentLayers.forEach((layer)=>{
                layer.visible =true;
            })
            globalLineLayer.visible =false;
            boundaryLine.visible = false;
            globalLayer.visible=false;
            globalPointone.visible =false;
            globalPointtwo.visible =false;
            tileLayer.style.grayFilterPerBar = this.initPerBar; 
            tileLayer.style.grayFilterColorBar = this.initColorBar;
            if(that.app.query(/总边界线图层/)[0]){
                that.app.query(/总边界线图层/)[0].visible = false;
            }
            if(that.app.query(/市边界线图层/)[0]){
                that.app.query(/市边界线图层/)[0].visible = false;
            }
         }
    }
    
    //关闭层级事件
    offchangeLevel(){
        var that = this;
        that.app.off(THING.EventType.MapLevelChange,null,'getCurLevel__'); 
    }

    //poi面板
    poiPanelHtml(){
        var html = `<div id="poipanel">
            <div class="poiwrapper">
                <span class="closebox minus"></span>
                <div class="poi-title">行政区划图层管理</div>
                <ul class="panel-list">
                    <li><div class="poi-checkbox poi-checked"></div><span class="poili-text">世界边界线图层</span><span class="poi-item"><i class="icon-poi icon-unlock"></i></span></li>
                    <li><div class="poi-checkbox poi-checked"></div><span class="poili-text">全国边界线图层</span><span class="poi-item"><i class="icon-poi icon-unlock"></i></span></li>
                    <li><div class="poi-checkbox poi-checked"></div><span class="poili-text">市级边界线图层</span><span class="poi-item"><i class="icon-poi icon-unlock"></i></span></li>
                </ul>
            </div>
        </div>`
        $('#div2d').append(html);
    }

    poiPanel() {
        var that = this;
        var boundaryLine = that.app.query(/全球分界线图层/)[0];
        var subLayer = that.app.query(/总边界线图层/)[0];
        var cityLayer = that.app.query(/市边界线图层/)[0];
        $(".closebox").on('click',function(e){
            if($(this).hasClass("minus")){
                $(this).removeClass("minus");
                $(this).addClass("add");
                $("#poipanel").animate({height:"42px"},500);
            }else{
                $(this).removeClass("add");
                $(this).addClass("minus");
                $("#poipanel").animate({height:"134px"});
            }
        });
        $(".poi-checkbox").on('click', function (e) {
                var index= $(".poi-checkbox").index(this);
                if($(this).hasClass("poi-checked")){
                    $(this).removeClass("poi-checked");
                    if(index ==0){
                        boundaryLine.visible = false;
                    }
                    else if(index ==1){
                        subLayer.visible = false;
                    }
                    else if(index ==2){
                        cityLayer.visible=false;
                    }
                }else{
                    $(this).addClass("poi-checked");
                    if(index ==0){
                        boundaryLine.visible = true;
                    }
                    else if(index ==1){
                        subLayer.visible = true;
                    }
                    else if(index ==2){
                        cityLayer.visible=true;
                    }
                }
        });
        $(".poi-item").on('click', function (e) {
            var index= $(".poi-item").index(this);
            if($(this).children().hasClass("icon-unlock")){
                $('.icon-poi').eq(index).removeClass("icon-unlock");
                $('.icon-poi').eq(index).addClass("icon-lock");
            }else{
                $('.icon-poi').eq(index).removeClass("icon-lock");
                $('.icon-poi').eq(index).addClass("icon-unlock");
            }
        });
    }

    //销毁poi面板
    destroypoiPanel(){
        $("#poipanel").remove()
    }
}   
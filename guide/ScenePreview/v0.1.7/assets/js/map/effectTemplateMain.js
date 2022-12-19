
class EffectTemplate {
    constructor() {
        this.adminPermissions = PreConfig.getPermission();
        this.isAuthor = PreConfig.getSceneAuthor();
        if (this.adminPermissions != true || this.isAuthor != true) return;
        this.loadType = PreConfig.getLoadType();
        this.documentUrlPre = PreConfig.getFilePath() + 'img/map/';
        this.type = ["初始效果", "雾霭蓝", "青黛蓝", "鎏砂金", "暮山紫", "蓝黑紫", "清新绿", "蓝绿色", "金紫蓝", "深蓝色", "深蓝黑"];
        this.typeUrlMapping = {};
        this.currentType = null;
        this.tempType = null;
        this.typeUrl = null;
        this.tempIndex = 0;
        this.travelIndex = '0';
        this.travelTimer = null;
        this.travelInterval = 10000;
        this.app = THING.App.current;
        this.iniConfig = {};
        this.initConfigData();
        this.personConfig = PreConfig.getPersonData('mapTemplate');
        this.config = PreConfig.getPreData('mapTemplate');
        this.canChangeTemplate = false;
        this.template = '初始效果';
        this.configData = {};
        // 取个人喜好的配置
        if (this.personConfig != null) {
            this.canChangeTemplate = this.personConfig.enable;  // enable表示是否开启禁用
            this.template = this.canChangeTemplate ? this.personConfig.type : "初始效果";
            this.configData = this.personConfig.configData;
        }
        // 取单个地图的配置
        if (this.config != null) {
            this.canChangeTemplate = this.config.enable;  // enable表示是否开启禁用
            this.template = this.canChangeTemplate ? this.config.type : "初始效果";
            this.configData = this.config.configData;
        } else {
            this.config = {
                enable: false,
                type: '初始效果',
                configData: {}
            }
        }
        this.typeUrl = this.template;
        this.travelIndex = this.type.indexOf(this.template) + '' || '0';
        if (this.loadType == 'city') {
            this.preApplyMapTemplate = new PreApplyMapTemplate();
            this.preApplyMapTemplate.rendererAllLayer(this.configData);
            this.initButton();
            this.initHtml();
            this.getTypeurl();
        }
    }
    _getType(type){
        if(type == null) return;
        const typeJson = {
            "初始效果": {}, 
            "雾霭蓝": {}, 
            "青黛蓝": {}, 
            "鎏砂金": {}
        }
        return typeJson[type];
    }
    initConfigData() {
        var _this = this;
        _this.iniConfig = {
            "name": "初始效果",
            "tileLayer": {
                "grayFilterColorBar": [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]],
                "grayFilterPerBar": [0, 0.5, 1]

            },
            "building": {
                "offsetHeight": 0,
                "renderer": {
                    "type": "vector",
                    "textureWrap": "stretch",
                    "color": [
                        {
                            "value": "rgba(132,132,132,1)",
                            "condition": "[height<=10.0]"
                        },
                        {
                            "value": "rgba(197,197,197,1)",
                            "condition": "[height>10.0]&&[height<=20.0]"
                        },
                        {
                            "value": "rgba(210,210,210,1)",
                            "condition": "[height>20.0]"
                        }
                    ],
                    "effect": false,
                    "extrudeFactor": 1,
                    "opacity": 1,
                    "extrudeField": "height"
                },
            },
            "linegs": {
                "offsetHeight": 0,
                "renderer": null
            },
            "linesql": {
                "offsetHeight": 0,
                "renderer": null
            },
            "linedt": {
                "offsetHeight": 0,
                "renderer": null
            },
            "linesd": {
                "offsetHeight": 0,
                "renderer": null
            },
            "linegd": {
                "offsetHeight": 0,
                "renderer": null
            },
            "water": {
                "offsetHeight": 0,
                "renderer": {
                    "type": "vector",
                    "color": [
                        0,
                        250,
                        255,
                        1
                    ],
                    "flowSpeed": 1,
                    "reflectionNormal": "https://www.thingjs.com/citybuilder_console/static/texture/waternormals.jpg",
                    "refractionNormal": "https://www.thingjs.com/citybuilder_console/static/texture/Water_2_M_Normal.jpg",
                    "reflectionImage": "https://www.thingjs.com/citybuilder_console/static/texture/refraction.jpg",
                    "refractionImage": "https://www.thingjs.com/citybuilder_console/static/texture/refraction.jpg"
                }
            },
            "green": {
                "offsetHeight": 0,
                "renderer": null
            },
            "rangeline": {
                "offsetHeight": 0,
                "renderer": null
            },
            "functionalArea": {
                "offsetHeight": 0,
                "renderer": null
            }
        }
        _this.app.query('.TileLayer').forEach(v => {
            _this.iniConfig.tileLayer.grayFilterColorBar = v.style.grayFilterColorBar;
            _this.iniConfig.tileLayer.grayFilterPerBar = v.style.grayFilterPerBar;
        });
        _this.app.query(/建筑/).forEach(v => {
            _this.iniConfig.building.offsetHeight = v.offsetHeight;
            let rendererData = _this.iniConfig.building.renderer;
            for (let key in rendererData) {
                _this.iniConfig.building.renderer[key] = v.renderer[key];
            }
        });
        _this.app.query(/高速/).forEach(v => {
            _this.iniConfig.linegs.offsetHeight = v.offsetHeight;
            _this.iniConfig.linegs.renderer = v.renderer;
        });
        _this.app.query(/市区路/).forEach(v => {
            _this.iniConfig.linesql.offsetHeight = v.offsetHeight;
            _this.iniConfig.linesql.renderer = v.renderer;
        });
        _this.app.query(/地铁/).forEach(v => {
            _this.iniConfig.linedt.offsetHeight = v.offsetHeight;
            _this.iniConfig.linedt.renderer = v.renderer;
        });
        _this.app.query(/省道/).forEach(v => {
            _this.iniConfig.linesd.offsetHeight = v.offsetHeight;
            _this.iniConfig.linesd.renderer = v.renderer;
        });
        _this.app.query(/国道/).forEach(v => {
            _this.iniConfig.linegd.offsetHeight = v.offsetHeight;
            _this.iniConfig.linegd.renderer = v.renderer;
        });
        _this.app.query(/水系/).forEach(v => {
            _this.iniConfig.water.offsetHeight = v.offsetHeight;
            let rendererData = _this.iniConfig.water.renderer;
            for (let key in rendererData) {
                _this.iniConfig.water.renderer[key] = v.renderer[key];
            }
        });
        _this.app.query(/绿地/).forEach(v => {
            _this.iniConfig.green.offsetHeight = v.offsetHeight;
            _this.iniConfig.green.renderer = v.renderer;
        });
        _this.app.query(/乡镇边界/).forEach(v => {
            _this.iniConfig.rangeline.offsetHeight = v.offsetHeight;
            _this.iniConfig.rangeline.renderer = v.renderer;
        });
        _this.app.query(/功能区/).forEach(v => {
            _this.iniConfig.functionalArea.offsetHeight = v.offsetHeight;
            _this.iniConfig.functionalArea.renderer = v.renderer;
        });
        _this.configData = _this.iniConfig;
    }
    /**
     * 创建按钮入口
     */
    initButton() {
        var _this = this;
        let html =
            `<a id="effectTemplate" class="control-item ">
                    <i class="iconfont icon-moban icon-white"></i>
                    <span class="tooltiptext">效果模板</span>
                </a>`;
        $('#mapBg').after($(html));
        _this.initButtonEvent();

    }
    /**
     * 注册按钮事件
     */
    initButtonEvent() {
        // 效果模板事件
        var _this = this;
        $('#effectTemplate').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                _this.closePanel();
            } else {
                $(this).addClass('active');
                _this.showPanel();
            }
        });
    }
    initHtml() {
        let that = this;
        let rightClick =
            `<div class="rigthClickBox" style="z-index: 999;">
                <div class="rightClickItem rigthClickBoxContent">设置默认</div>
            </div>`;
        $('#div2d').append(rightClick);
        let html = `<div id="scene-effect1" class="effecttemplate" style='display:none;z-index:4'>
        <div class="panelHeader">
            <span class = "iconfont icon-caidan icon-white" style="margin-left: -136px;"></span>
            <span class="panelTitle" id="panelTitle">场景效果</span>
            <div class="panelIcon1">                 
                <span class="iconfont icon-bofang refreshs icon-white canPointer" data-ext="自动播放"></span>  
                <span class="seticonfont icon-close pre-close icon-white cancelTemplatePanel canPointer" style="font-size: 10px;"></span>           
            </div>
            <div class="searchBox" >
                <i class="iconfont icon-sousuo" style="margin-left: -136px; color: #8f9091;font-size:12px;"></i>
                <input class="mlSearch" autocomplete="off" placeholder="请输入搜索内容" id="keyword1">
            </div>
        </div>
        <div class="gallerymiddle">
            <ul class="galleryitems galleryItems"> 
            </ul>
        </div>
        <div class="galleryfooter bg-page">
            <div class="page1">首页</div>
            <div onclick="pageup()">上一页</div>
            <div class="nowpage">1/1</div>
            <div class="pageNext">下一页</div>
            <div onclick="pageLast()">尾页</div>
        </div>
    </div>`
        $('#div2d').append(html);
        let showText = `<span id="textshow" class="text_title" style="pointer-events: auto"></span>`;//添加标题栏
        $('#div2d').append(showText);
        this.effectPanel();//模板HTML
        // this.templateClick();
        // this.effectTemplateEventClass.keyupSubmit();//回车搜索
        // 此处不兼容其它用处
        $('.cancelTemplatePanel').on('click', function () {
            that.closePanel();
            if ($('#effectTemplate').hasClass('active')) {
                $('#effectTemplate').removeClass('active');
            }
        })
        // this.presetSwitchToogle();
    }
    //找到对应的json
    getTypeurl() {
        var that = this;
        $.ajax({
            url: '/guide/ScenePreview/map-theme/mapping.json',
            type: 'GET',
            dataType: 'json',
            async: false,
            success: function (result) {
                for (let key in result) {
                    that.typeUrlMapping[key] = {
                        file: result[key]
                    }
                }
            },
            error: function (error) {
                console.log("有错误");
            }
        });
    }
    //找到对应的JSON文件
    getJsonData(callback) {
        var that = this;
        if (that.typeUrlMapping[that.typeUrl] == null) {
            callback(that.iniConfig);
            return;
        }
        if (that.typeUrlMapping[that.typeUrl]['data'] != null) {
            if (callback) {
                callback(that.typeUrlMapping[that.typeUrl]['data']);
            }
            return;
        }
        $.ajax({
            url: '/guide/ScenePreview/map-theme/' + that.typeUrlMapping[that.typeUrl].file,
            type: 'GET',
            dataType: 'json',
            async: false,
            success: function (result) {
                that.typeUrlMapping[that.typeUrl]['data'] = result;
                if (callback) {
                    callback(result);
                }
            },
            error: function (error) {
                console.log("有错误");
            }
        });
    }
    /**
     * 保存单个地图的效果模板
     */
    saveCityTemplateData() {  // 右键以后保存成功数据
        if (typeof (PreConfig) == 'undefined' && typeof (PreConfig.savePreData) == 'undefined') return;
        let pathname = window.location.pathname;  // pathname表示设置或返回当前URL的路径
        let prelink = pathname.split('/').pop();  // pop()删除并返回数组中的最后一个元素
        var _this = this;
        let saveData = this.getSaveData();;
        let reqDatas = {
            target: 'mapTemplate',
            targetType: 'base',
            preLink: prelink,
            jsonData: saveData
        }
        PreConfig.savePreData('mapTemplate', reqDatas, {
            success: function () {  // 保存成功的回调，以下写保存成功后执行的逻辑代码，以下类似
                $('#textshow').removeClass("text_title_style");
                $("#textshow").animate({
                    left: "880px",
                    speed: 500,
                    easing: "linear"
                }, 1000);
                
                //显示边框
                $('.galleryitems').find('div.gallery-thumbnail.gallery-start').removeClass('gallery-start');
                $('.galleryitems').find('div.gallery-thumbnail[data-index="' + _this.tempIndex + '"]').addClass('gallery-start');
                //对号显示
                $('.galleryitems').find('div.templatename').css('display', 'none');
                $('.galleryitems').find('div.gallery-thumbnail[data-index="' + _this.tempIndex + '"]').siblings('div.templatename').css('display', 'block');
                preAlertClass.infoTip('success', '设置效果模板成功!');
            },
            failed: function () {  // 保存失败的回调
                preAlertClass.infoTip('error', '设置效果模板失败!');
            },
            error: function () {  // 保存失败的回调
                preAlertClass.infoTip('error', '设置效果模板失败!');
            },
            complete: function () {

            }
        });
    }
    getSaveData() {
        let data = {
            "app": {
                "version": "1.0.1",
                "config": {
                    "base": {
                        "mapTemplate": this.config
                    }
                }
            }
        }
        return data;
    }
    // 模板html
    effectPanel() {
        var that = this;
        let type = this.type;
        $('#pre-scene-effect').css('display', 'none');
        $(".light-change").removeClass('active-b');
        $('.galleryitems').children().filter('li').remove(); //滤镜移除  gallery-start
        $('#panelTitle').text("场景效果");
        let ligroup = '';
        ligroup += `<li class="galleryitem">
                    <div class="iconfont icon-check templatename"></div>
                    <div id="cjxg0" class="gallery-thumbnail" data-index="0" style="background-image: url('` + that.documentUrlPre + `bg原场景效果.png');background-repeat: no-repeat;background-position:center;background-size:100%;" data-ext="初始效果"   >
                </div>
                </li>`
        for (let i = 1; i < type.length; i++) {//小绿点
            if (i <= 3) {
                ligroup += `<li class="galleryitem">
                    <div id="gallery" class="gallery-thumbnail_span_mf"></div>
                    <div class="iconfont icon-check templatename"></div>
                    <div class="box">
                        <span class="angle"></span>
                        <span class="tip-content">默认效果模板</span>
                    </div>
                    <div id="cjxg` + i + `" class="gallery-thumbnail" data-index="` + i + `" style="background-image: url('` + that.documentUrlPre + `bg` + type[i] + `.png');background-repeat: no-repeat;background-position:center;background-size:100%" data-ext="` + type[i] + `"   >
                    </div>
                </li>`
            } else {
                ligroup += `<li class="galleryitem">
                    <div id="gallery" class="gallery-thumbnail_span_vip"></div>
                    <div class="iconfont icon-check templatename"></div>
                    <div class="box">
                        <span class="angle"></span>
                        <span class="tip-content">默认效果模板</span>
                    </div>
                    <div id="cjxg` + i + `" class="gallery-thumbnail" data-index="` + i + `" style="background-image: url('` + that.documentUrlPre + `bg` + type[i] + `.png');background-repeat: no-repeat;background-position:center;background-size:100%" data-ext="` + type[i] + `"   >
                    </div>
                </li>`
            }
        }
        $('.galleryitems').append(ligroup);
        $('.galleryitems').find('div.gallery-thumbnail[data-index="' + that.travelIndex + '"]').addClass('gallery-start');
        $('.galleryitems').find('div.gallery-thumbnail[data-index="' + that.travelIndex + '"]').siblings('div.icon-check.templatename').css('display', 'block');
        // 列表绑定事件
        $('.galleryitems').find('div.gallery-thumbnail').on('mouseenter', function (ev) {
            that.showTooltip(this);
        }).on('mouseleave', function (ev) {
            that.cancelTooltip(this);
        }).on('click', function (ev, param = {}) {
            if (ev.button == 0 || param.button == 0) {
                if ($(this).hasClass('gallery-start')) {
                    if (param.startRotate == true) {
                        that.startRotate();
                    }
                    return;
                };
                $('#textshow').removeClass("text_title_style");
                $("#textshow").animate({
                    left: "880px",
                    speed: 500,
                    easing: "linear"
                }, 1000);
                //显示边框
                $('.galleryitems').find('div.gallery-thumbnail.gallery-start').removeClass('gallery-start');
                $(this).addClass('gallery-start');
                let index = $(this).attr('data-index');
                that.travelIndex = index;
                that.typeUrl = type[index];
                that.showText(that.typeUrl, index);
                that.getJsonData(function (result) {
                    that.config.enable = true;
                    that.config.type = result.name;
                    that.config.configData = result;
                    that.preApplyMapTemplate.rendererAllLayer(result);
                    if (param.startRotate == true) {
                        that.startRotate();
                    }
                });
            }
        }).contextmenu(function (ev) {
            let index = $(this).attr('data-index');
            that.tempType = type[index];
            that.tempIndex = index;
            let clientX = ev.clientX;
            let clientY = ev.clientY;
            clientX = (clientX + 112) > $(window).width() ? clientX - 112 : clientX;
            $('.rigthClickBox').css({
                display: "block",
                left: clientX + "px",
                top: clientY + "px"
            });
        });
        //自动播放点击事件
        $('.refreshs').on("click", (function () {
            if($(this).hasClass('icon-zantingtingzhi')){
                $(this).removeClass('icon-zantingtingzhi');
                $(this).addClass('icon-bofang')
                that.stopAutoPlay();
            }else if($(this).hasClass('icon-bofang')){
                $(this).removeClass('icon-bofang');
                $(this).addClass('icon-zantingtingzhi');
                that.startAutoPlay();
            }
        }))

        $(window).on("mouseup", function (e) {//鼠标按键被松开时
            e.preventDefault() // 阻止默认行为
            $('.rigthClickBox').css({
                display: "none"
            });
        })

        $('.rigthClickBox div.rightClickItem').on('click', function (ev) {
            if ($(this).hasClass('rigthClickBoxContent')) {
                if (that.tempType == null) return;
                let isFree = that._getType(that.tempIndex);
                if(isFree == null){
                    let isPermission = PreConfig.getPermission();
                    if (isPermission != true) return preAlertClass.newAlert('您不是VIP，无权限设置模板，请开通VIP后再试!', 'warning');
                }
                that.typeUrl = that.tempType;
                that.travelIndex = that.tempIndex;
                that.showText(that.typeUrl, that.tempIndex);
                that.getJsonData(function (result) {
                    that.config.enable = true;
                    that.config.type = result.name;
                    that.config.configData = result;
                    that.preApplyMapTemplate.rendererAllLayer(result);
                    that.saveCityTemplateData();
                });
            }
        });
    }
    startAutoPlay() {
        var _this = this;
        if (_this.travelTimer != null) {
            clearInterval(_this.travelTimer);
            _this.travelTimer = null;
        }
        $('.galleryitems').find('div.gallery-thumbnail[data-index="' + _this.travelIndex + '"]').trigger('click', { button: 0, startRotate: true });
        _this.travelTimer = setInterval(function () {
            _this.stopRotate();
            $('.galleryitems').find('div.gallery-thumbnail[data-index="' + _this.travelIndex + '"]').trigger('click', { button: 0, startRotate: true });
            _this.travelIndex++;
            if (_this.travelIndex >= _this.type.length) _this.travelIndex = 0;
        }, _this.travelInterval);
    }
    stopAutoPlay(){
        var _this = this;
        if (_this.travelTimer != null) {
            clearInterval(_this.travelTimer);
            _this.stopRotate();
            _this.travelTimer = null;
        }
    }
    // 自动旋转开始
    startRotate() {
        this.app.camera.earthFlyRotateBySpeed({//根据目标点绕点旋转
            target: this.app.camera.target,
            speed: 9
        });
    }
    //停止自动旋转
    stopRotate() {
        this.app.camera.stopEarthFly();
    }
    // 上方提示文本
    showText(text, i) {
        var _this = this;
        $('#textshow').css({
            display: "block"
        }).addClass("text_title_style").html(text + "（" + (parseInt(i) + 1) + "/" + _this.type.length + "）");
    }
    // 显示模板上的提示信息
    showTooltip(tag) {
        var content = $(tag).attr("data-ext"); //attr() 方法设置或返回被选元素的属性值
        var tipEle = '<div class="tooltips">' +
            content +
            "</div>";
        $(tag).append(tipEle);
        $(tag).css({
            background: "linear-gradient('0deg','#1e202a','#0d1013')",
            'box-shadow': '0 0  8px rgba(150,150,149,0.45)'
        })
    }
    // 隐藏模板上的提示信息
    cancelTooltip() {
        $(".tooltips").css({
            background: "linear-gradient('0deg','#1e202a','#0d1013')",
            'box-shadow': 'none'
        })
        $("div").remove(".tooltips");
    }
    // 关闭面板
    closePanel() {
        $('.effecttemplate').slideUp();
    }
    // 打开面板
    showPanel() {
        $(".effecttemplate").slideDown();
    }
}
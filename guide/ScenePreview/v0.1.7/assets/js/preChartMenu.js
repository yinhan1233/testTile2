class PreChartMenu {
    constructor() {
        this.init();
    }
    init() {
        this.version = 'v0.1.6';
        this.app = THING.App.current;
        this.elementId = 'prechart-menu-';
        this.showFlag = 'all';
        this.queryData = {
            pageNumber: 1,
            keyWord: "",
            pageNumber: 1,
            pageSize: 17,
        }
        this.totalPage = 1;
        this.totalCount = 0;
        this.currentIndex = '0';
        this.pathname = window.location.pathname;
        this.prelink = this.pathname.split('/').pop();
        this.config = {};
        this.tempLink = null;
        this.chartTempLink = '';  // 当前应用图表的link值
        if (typeof (PreConfig) != "undefined" && typeof (PreConfig.getPreData) == "function") {
            let chartTempData = PreConfig.getPreData('chartTemplate');
            if (typeof (chartTempData) != "undefined") {
                this.chartTempLink = chartTempData.chartLink || '';
                this.config['chartLink'] = chartTempData.chartLink;
                this.config['chartPath'] = chartTempData.chartPath;
            }
        }
        this.create();
    }
    create() {
        var liHtml =
            `<li class="chart-menu setting-item setting-item-split">一键图表</li>`;
        $('.light-change').after($(liHtml));
        this.registButtonEvent();  // 一键图表入口点击事件
        this.initPanelHtml();  // 创建图表面板
        this.initPreviewChartPanel();  // 创建预览大图面板
        this.initRightContent();  // 初始化右键菜单
        // this.getSourceTypeDataEvent();
    }
    show() {
        var _this = this;
        if ($('#' + _this.elementId + 'Campus').length > 0) {
            $('#' + _this.elementId + 'Campus').slideDown();
        }
    }
    hidden() {
        var _this = this;
        if ($('#' + _this.elementId + 'Campus').length > 0) {
            $('#' + _this.elementId + 'Campus').slideUp();
        }
    }
    destroy() {

    }
    /**
     * 一键图表入口点击事件
     */
    registButtonEvent() {
        var _this = this;
        $('#sceneSetting .control-menu-pane li.chart-menu').on('click', function (ev) {
            ev.stopPropagation();
            $(this).parents('.control-menu').removeClass('actives');
            $(this).parents('.control-item').removeClass('active');
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                if ($(this).hasClass('chart-menu')) {
                    _this.hidden();
                }
                // 移除图表
                if ($('.tjs-business-panel').length > 0) {
                    $('.tjs-business-panel').remove();
                }
            } else {
                $(this).addClass('selected');
                if ($(this).hasClass('chart-menu')) {
                    _this.show();
                }
                _this.addApplyTage();
            }
        })
    }
    /**
     * 初始化一键图表列表
     */
    initPanelHtml() {
        var _this = this;
        let chartMenuHtml = 
            `<div class="panelModel-chart" id="` + _this.elementId + `Campus" style="display: none;">
                <div class="panelHeader move" style="padding-left: 68px;">
                    <span class="panelTitle">图表</span>
                    <span class="panelNumber">
                        <span class="panelNumber totalCount"> （0） </span>
                    </span>        
                    <span class="close"></span>
                    <div class="panelIcon">                 
                        <span class="seticonfont icon-shuaxin pre-refresh"></span>
                    </div>
                    <div class="source_type">
                        <span class="fa fa-bars sourceType-btn"></span>
                        <ul class="source_ul">
                            <li class="type_all checkedType">全部</li>
                            <li class="type_pub">官方</li>
                            <li class="type_per">个人</li>
                        </ul>
                    </div>
                </div>
                <div class="panelBody">
                    <div class="scenes-search-box chart-search-box">
                        <i class="fa fa-search" style="padding: 10px 5px;"></i>
                        <input class="search-input" placeholder="请输入搜索内容" id="chart-keyword" onkeyup="">
                    </div>
                    <div class="scenes-menu">
                        <div class="card card-chart initChart chartli" data-index="0">
                            <a class="screenshot-container">
                                <div class="card-img-top screenshot">
                                    <div class="card-body" style="overflow: hidden;">
                                        <p>初始</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="scenes-footer chart-page">
                        <div class="pageEvent chartPageNo1">首页</div>
                        <div class="pageEvent chartPageUp">上一页</div>
                        <div class="nowpage">1/2</div>
                        <div class="pageEvent chartPageNext">下一页</div>
                        <div class="pageEvent chartPageLast">尾页</div>
                    </div>
                </div>
            </div>`
        $('#div2d').append($(chartMenuHtml));
        this.initPanelEvent();  // 初始化面板事件
        this._getAllChartData();  // 获取图表模板数据
    }
    /**
     * 创建预览面板
     */
    initPreviewChartPanel() {
        let html = `<div class="preview-chart-panel" style="width: 820px; height: 572px; display: none;z-index:10;">
            <div class="preview-title">
                <span class="tip-state"></span>
                <div class="title-text"></div>
                <div class="preview-close close"></div>
            </div>
            <div class="preview-img" style="height: 525px; width: 820px;">
                <div class="preview-imgBG" data-id=""></div>
            </div>
            <div class="previewImgLeft"><i aria-hidden="true" class="fa fa-chevron-left"></i></div>
            <div class="previewImgRight"><i aria-hidden="true" class="fa fa-chevron-right"></i></div>
        </div>`
        $('.panelModel-chart').append($(html));
        this.initPreviewChartPanelEvent();
    }
    /**
     * 初始化右键菜单
     */
    initRightContent(){
        let html = 
            `<ul class="preChart-panelMenu" style="left:100%;top:0;display: none;">
                <li class="item applyChart"><span>应用图表</span></li>
            </ul>`;
        $('.panelModel-chart').append($(html));
        this.initRightContentEvent();
    }
    /**
     * 右键菜单点击事件
     */
    initRightContentEvent(){
        var _this = this;
        $('.preChart-panelMenu li.item').on('click', function () {
            if($(this).hasClass('applyChart')){
                _this.applyChart();
            }
        })
    }
    /**
     * 初始化预览面板事件
     */
    initPreviewChartPanelEvent(){
        var _this = this;
        // 预览面板关闭按钮事件
        $('.preview-chart-panel .preview-close.close').on('click', function () {
            $('.preview-chart-panel').css('display', 'none');
        });
        // 预览面板上一个按钮点击事件
        $('.preview-chart-panel .previewImgLeft').on('click', function () {
            _this.currentIndex--;
            if(_this.currentIndex < 0){
                _this.currentIndex = 0;
                preAlertClass.infoTip('info', '已经是第一个了！');
                return;
            }
            $('.panelModel-chart .panelBody .scenes-menu .card[data-index="' + _this.currentIndex + '"]').trigger('click');
        });
        $('.preview-chart-panel .previewImgRight').on('click', function () {
            _this.currentIndex++;
            let tCount = _this.totalCount;
            if(tCount >= 17) tCount = 17;
            if(_this.currentIndex > tCount){
                _this.currentIndex = tCount;
                preAlertClass.infoTip('info', '已经是最后一个了！')
                return;
            }
            $('.panelModel-chart .panelBody .scenes-menu .card[data-index="' + _this.currentIndex + '"]').trigger('click');
        });
    }
    /**
     * 更新预览大图
     */
    updatePreviewChartPanel(dom) {
        var dom = dom;
        let titleText = $(dom).find('.card-body p').text();
        let bgUrl = decodeURI($(dom).css("background-image"));
        let dataID = $(dom).attr('data-id');
        let dataState = $(dom).attr('data-state');
        $('.preview-chart-panel .preview-title .tip-state.FREE_TIP').removeClass('FREE_TIP');
        $('.preview-chart-panel .preview-title .tip-state.BUY_TIP').removeClass('BUY_TIP');
        $('.preview-chart-panel .preview-title .tip-state.ISBUY_TIP').removeClass('ISBUY_TIP');
        if(dataState == 0){
            $('.preview-chart-panel .preview-title .tip-state').addClass('FREE_TIP');
        }else if(dataState == 1){
            $('.preview-chart-panel .preview-title .tip-state').addClass('BUY_TIP');
        }else if(dataState == 2){
            $('.preview-chart-panel .preview-title .tip-state').addClass('ISBUY_TIP');
        }
        $('.preview-chart-panel .preview-title .title-text').text(titleText);
        if($(dom).hasClass('initChart')){
            $('.preview-chart-panel .preview-img .preview-imgBG').css('background-image', '');
        }else{
            $('.preview-chart-panel .preview-img .preview-imgBG').css('background-image', bgUrl);
        }
        $('.preview-chart-panel .preview-img .preview-imgBG').attr('data-id', dataID);
        $('.preview-chart-panel').css('display', 'block');
    }
    /**
     * 面板注册事件
     */
    initPanelEvent() {
        var _this = this;
        // 筛选类型按钮点击事件
        $('.panelModel-chart .panelHeader .source_type .sourceType-btn').on('click', function () {
            if ($('.preview-chart-panel').length > 0) {
                $('.preview-chart-panel').css('display', 'none');
            }
            if ($(this).siblings('ul.source_ul').hasClass('showState')) {
                $(this).siblings('ul.source_ul.showState').removeClass('showState');
            } else {
                $(this).siblings('ul.source_ul').addClass('showState');
            }
        });

        // 刷新按钮点击事件
        $('.panelModel-chart .panelHeader .panelIcon .pre-refresh').on('click', function () {
            _this._getChartDataByType(_this.showFlag);
        })

        // 关闭按钮点击事件
        $('#' + _this.elementId + 'Campus .panelHeader .close').on('click', function () {
            $('#' + _this.elementId + 'Campus').slideUp(800, function () {
                // 移除预览脚本控制一键图表显隐的selected类
                $('#sceneSetting .control-menu-pane li.chart-menu.selected').removeClass('selected');
            });
        });

        // 搜索
        $('#' + _this.elementId + 'Campus .panelBody .chart-search-box input.search-input').keyup(function (ev) {
            if (ev.keyCode != 13) {
                return;
            }
            _this.queryData.pageNumber = 1;
            _this._getChartDataByType(_this.showFlag);
        });

        // 底部切换页数按钮点击事件
        $('#' + _this.elementId + 'Campus .scenes-footer.chart-page div.pageEvent').on('click', function () {
            if ($(this).hasClass('.chartPageNo1')) {
                _this.queryData.pageNumber = 1;
            } else if ($(this).hasClass('.chartPageUp')) {
                _this.queryData.pageNumber--;
                if (_this.queryData.pageNumber <= 0) {
                    _this.queryData.pageNumber = 1;
                }
            } else if ($(this).hasClass('.chartPageNext')) {
                _this.queryData.pageNumber++;
                if (_this.queryData.pageNumber >= _this.totalPage) {
                    _this.queryData.pageNumber = _this.totalPage;
                }
            } else if ($(this).hasClass('.chartPageLast')) {
                _this.queryData.pageNumber = _this.totalPage;
            }
            _this._getChartDataByType(_this.showFlag);
        });

        // 筛选面板的按钮点击事件
        $('.panelModel-chart .panelHeader .source_type ul li').on('click', function () {
            if (!$(this).hasClass('checkedType')) {
                $(this).siblings('.checkedType').removeClass('checkedType');
                $(this).addClass('checkedType');
            }
            // 判断数据来源类型
            if ($(this).text() == '全部') {
                _this._getAllChartData();
            } else if ($(this).text() == '官方') {
                _this._getOfficalChartData();
            } else if ($(this).text() == '个人') {
                _this._getPresonChartData();
            }
        });

        // 鼠标滑出面板时，预览大图隐藏
        $('.panelModel-chart').on('mouseleave', function () {
            $('.preview-chart-panel').css('display', 'none');
        });

        // 鼠标抬起事件
        $(window).on("mouseup", function (e) {  //鼠标按键被松开时
            e.preventDefault();   // 阻止默认行为
            $('.preChart-panelMenu').css({
                display: "none"
            });
        })
    }
    /**
     * 根据类型获取图表模板
     * @param {String} type 
     */
    _getChartDataByType(type) {
        if (type == 'all') {
            this._getAllChartData();
        } else if (type == 'offical') {
            this._getOfficalChartData();
        } else if (type == 'person') {
            this._getPresonChartData();
        }
    }
    /**
     * 获取所有图表模板
     */
    _getAllChartData() {
        this.showFlag = 'all';
        this._getChartData();
    }
    /**
     * 获取官方图表模板
     */
    _getOfficalChartData() {
        this.showFlag = 'offical';
        this._getChartData();
    }
    /**
     * 获取个人图表模板
     */
    _getPresonChartData() {
        this.showFlag = 'person';
        this._getChartData();
    }
    /**
     * 获取图表模板数据
     */
    _getChartData() {
        var _this = this;
        $('#' + _this.elementId + 'Campus .panelBody .scenes-menu').empty();
        _this.queryData.showFlag = _this.showFlag;
        _this.queryData.keyWord = $('.panelModel-chart #chart-keyword').val();
        $.ajax({
            url: '/api/preTemplateList',
            type: 'post',
            dataType: 'json',
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(_this.queryData),
            async: false,
            success: function (res) {
                if (res && res.code == 200) {
                    let resContent = res.content;
                    let resData = resContent.data || [];
                    if (resData.length == 0) {
                        $('.panelModel-chart .panelBody .scenes-menu .card.card-chart.initChart').css('top', '11px');
                    }
                    _this.totalCount = resContent.totalCount + 1;
                    $('.panelModel-chart .panelHeader .panelNumber .totalCount').text('（' + _this.totalCount + '）');
                    // 总页
                    _this.totalPage = resContent.totalPage;
                    $('.panelModel-chart .chart-page .nowpage').text(_this.queryData.pageNumber + "/" + _this.totalPage);
                    _this.addLiItemContent(resData);
                    _this.addApplyTage();
                    _this.initLiItemEvent();
                }
            }
        });
    }
    /**
     * 动态获取列表内容
     */
    addLiItemContent(data) {
        if (data == null) return;
        let html = 
            `<div class="card card-chart initChart chartli" data-index="0" data-id="">
                <a class="screenshot-container">
                    <div class="card-img-top screenshot">
                        <div class="card-body" style="overflow: hidden;">
                            <p>初始</p>
                        </div>
                    </div>
                </a>
            </div>`;
        for (let i = 0, len = data.length; i < len; i++) {
            let curI = data[i];
            html += `<div class="card chartli card-chart chart-temp" data-index="` + (i + 1) + `" data-id="` + curI.link + `" data-content="` + curI.name + `" data-state="` + curI.belong + `" style="background-image: url('` + curI.previewImg + `')">`;
            if (curI.belong == 0) {
                html += `<span class="FREE_TIP tip-state"></span>`;
            } else if (curI.belong == 1) {
                html += `<span class="BUY_TIP tip-state"></span>`;
            } else if (curI.belong == 2) {
                html += `<span class="ISBUY_TIP tip-state"></span>`;
            }
            html += `<a class="screenshot-container" data-name="` + curI.name + `"></a>
                <div class="card-body" style="overflow: hidden;">
                    <p>` + curI.name + `</p>
                </div>
            </div>`;
        }
        $('.panelModel-chart .panelBody .scenes-menu').append($(html));
    }

    /**
     * li标签事件
     */
    initLiItemEvent() {
        var _this = this;
        $('.panelModel-chart .panelBody .scenes-menu .card.chartli').on('mouseover', function () {
            _this.updatePreviewChartPanel(this);
        }).on('click', function () {
            _this.currentIndex = $(this).attr('data-index');
            _this.updatePreviewChartPanel(this);
            if(!$(this).hasClass('current-item')){
                $(this).siblings().removeClass('current-item');
                $(this).addClass('current-item');
            }
        }).contextmenu(function (ev) {
            let clientX = ev.clientX;
            let clientY = ev.clientY;
            clientX = (clientX + 112) > $(window).width() ? clientX - 112 : clientX;
            $('.preChart-panelMenu').css({
                display: "block",
                left: clientX + "px",
                top: clientY + "px"
            });
            _this.tempLink = $(this).attr('data-id');
        });
    }
    /**
     * 添加应用标识
     */
    addApplyTage() {
        var _this = this;
        $('.panelModel-chart .panelBody .scenes-menu .card.current-item').removeClass('current-item');
        if ($('.panelModel-chart .panelBody .scenes-menu .card .applyTage').length > 0) {
            $('.panelModel-chart .panelBody .scenes-menu .card .applyTage').remove();
        }
        let html = `<i class="iconfont icon-check applyTage applyTage-off"></i>`;
        $('.panelModel-chart .panelBody .scenes-menu .card[data-id="' + _this.chartTempLink + '"]').addClass('current-item');
        $('.panelModel-chart .panelBody .scenes-menu .card[data-id="' + _this.chartTempLink + '"]').append($(html));
    }
    /**
     * 应用图表
     */
    applyChart(){
        var _this = this;
        // 判断当前是否登录
        let author = $.cookie('openid');
        if (author == null) return preAlertClass.infoTip('error', '请登录后再进行应用图表');
        if(_this.tempLink == null || _this.tempLink == ''){
            _this.chartTempLink = '';
            _this.config = {};
            _this.addApplyTage();
            $('#chart-content').remove();
            preAlertClass.infoTip('success', '场景设置图表模板成功！');
            _this._saveChartData();
        }else{
            _this.getTempStateToChart();
        }
    }
    /**
     * 判断图表状态，应用图表
     */
    getTempStateToChart() {
        var _this = this;
        let reqData = {
            chartLink: _this.tempLink
        }
        $.ajax({
            url: '/api/preTemplateOne',
            type: 'post',
            dataType: 'json',
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(reqData),
            async: false,
            success: function (res) {
                if(res.code == 200){
                    let state = res.state;
                    // 判断当前模板状态为已购买，免费，收费
                    _this.config['chartLink'] = _this.tempLink;
                    _this.config['chartPath'] = res.filePath;
                    if (state == 1) {
                        _this.addIframeToChart();
                    } else if (state == 0) {
                        // 购买图表
                        _this._buyChartTemplate();
                    }
                }else if(res.code == 500){
                    preAlertClass.infoTip('error', res.message);
                }
            },
            error: function(){
                preAlertClass.infoTip('error', '应用图表失败！');
            }
        })
    }
    /**
     * 添加iframe标签，应用图表
     */
     addIframeToChart() {
        var _this = this;
        if(_this.tempLink == _this.chartTempLink) return preAlertClass.infoTip('info', '当前已应用该图表，请勿重复应用！');
        $('#chart-content').remove();
        _this.chartTempLink = _this.tempLink;
        preAlertClass.loading(true, {text: '图表正在加载中...'});
        let iframeHtml = `<iframe id="chart-content" class="iframeContent" src="/api/pre/chart/` + _this.chartTempLink + `?type=pre" style="position: absolute;width: 100%; height: 100%; background-color: rgba(0,0,0,0);z-index: 1;pointer-events: none; user-select: none; border: 0;"></iframe>`;
        $('#div2d').append($(iframeHtml));
        _this.addApplyTage();
        _this._saveChartData();
    }
    /**
     * 保存数据
     */
    _saveChartData() {
        var _this = this;
        if (typeof (PreConfig) == 'undefined' && typeof (PreConfig.savePreData) == 'undefined') return;
        let saveData = {
            'app': {
                'version': '1.0.1',
                'config': {
                    'base': {
                        'chartTemplate': _this.config
                    }
                }
            }
        }
        let reqDatas = {
            target: 'chartTemplate',
            targetType: 'base',
            preLink: _this.prelink,
            jsonData: saveData
        }
        PreConfig.savePreData('chartTemplate', reqDatas, {
            success: function () {

            },
            failed: function () {

            },
            error: function () {

            },
            complete: function () {

            }
        })
    }
    /**
     * 购买图表
     */
     _buyChartTemplate() {
        var _this = this;
        let subject = 'ThingJS_SpeedApp';
        let userId = $.cookie('mmdId');
        if (userId == null) return preAlertClass.infoTip('error', '请登录后再进行应用图表');
        var data = {
            'title': '购买图表',
            'imgsrc': window.location.origin + '/static/payment/createPay/images/gmtbmb.png',
            'describe': '<span class="_title">购买图表。</span><br/><br/>',
            'price': 0.1,
            'id': userId,
            'type': subject,
            'paySource': window.location.href,
        }
        layer.open({
            type: 2,
            title: false,
            closeBtn: 0,
            area: ['585px', '568px'],
            zIndex: 10001,
            content: [window.location.protocol + '//www.thingjs.com/static/payment/createPay/payment.html?type=' + subject + '&userId=' + userId, 'no'],
            skin: 'buyModelDiv',
            success: function () {
                document.getElementsByClassName('buyModelDiv')[0].children[0].children[0].contentWindow.postMessage(data, '*');
            }
        });
        window.addEventListener('message', function (event) {
            if(event.data&&event.data.type&&event.data.type=="newStyle") {
                $(".buyModelDiv").css({"border-radius":"8px","background-color": "transparent"});
                $(".buyModelDiv iframe").css("border-radius","8px");
            }
            if (event.data == 'closeWin') {
                layer.closeAll();
                let reqBuyData = {
                    chartLink: _this.tempLink
                }
                $.ajax({
                    url: "/api/addPreTemplate",
                    type: 'post',
                    dataType: 'json',
                    contentType: "application/json;charset=utf-8",
                    data: JSON.stringify(reqBuyData),
                    async: false,
                    success: function (result) {
                        let state = result.state;
                        if (state == 'fail') {
                            preAlertClass.infoTip('error', '该图表已购买！')
                        } else if (state == 'success') {
                            preAlertClass.infoTip('success', '图表已购买成功，请刷新图表列表！')
                        }
                        _this._getAllChartData();
                        // 判断当前模板状态为已购买，免费，收费
                        _this.config['chartLink'] = result.link;
                        _this.config['chartPath'] = result.pretempPath;
                        _this.tempLink = result.link;
                        _this.addIframeToChart();
                    },
                    error: function () {

                    }
                })
            } else if (event.data == 'close') {
                layer.closeAll();
            }
        });
    }
}
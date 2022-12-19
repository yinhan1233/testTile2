class PeopleSetting {
    constructor(param) {
        if (param == null) return;
        this.init(param)
    }
    init(param) {
        this.app = THING.App.current;
        if (param.id != null) {
            this.id = param.id;
        } else {
            this.id = 'pre-people-setting';
        }
        if (param.type == 'city' && typeof (CMAP) != 'undefined') {
            this.map = CMAP.getCurrentMap();
        }
        this.iniConfig = {
            'contourLine': {
                'enable': false,
                'color': this.app.level.options.outlineColor || '0xff8000'
            }
        }
        this.config = {
            'contourLine': {
                'enable': false,
                'color': this.app.level.options.outlineColor || '0xff8000'
            }
        };
        this.allConfig = param.config;
        if (this.allConfig != null) {
            this.iniConfig.contourLine.enable = this.allConfig.contourLine.enable;
            this.iniConfig.contourLine.color = this.allConfig.contourLine.color;
            this.config.contourLine.enable = this.allConfig.contourLine.enable;
            this.config.contourLine.color = this.allConfig.contourLine.color;
        }
        this.initColor = this.iniConfig.contourLine.color;
        this.pathname = window.location.pathname;
        this.prelink = this.pathname.split('/').pop();
        this.flag = true;
        this.timer = null;  // 保存按钮计时器
        this.adminPermissions = PreConfig.getPermission();
		this.isAuthor = PreConfig.getSceneAuthor();
        this.initButton();
    }

    /**
     * 初始化按钮入口
     */
    initButton() {
        if (this.adminPermissions != true || this.isAuthor != true) return;
        var _this = this;
        let liHtml = `<li class="personal-preference setting-item">个人喜好</li>`;
        $('.light-change').after($(liHtml));
        _this.registerEvent();
    }

    /**
     * 注册事件
     */
    registerEvent() {
        var _this = this;
        $('#sceneSetting .control-menu-pane li.personal-preference').on('click', function (ev) {
            ev.stopPropagation();
            $(this).parents('.control-menu').removeClass('actives');
            $(this).parents('.control-item').removeClass('active');
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                if ($(this).hasClass('personal-preference')) {
                    _this.destroy();
                }
            } else {
                $(this).addClass('selected');
                if ($('#pre-scene-effect').length > 0) {
                    preScenesEffect.destroy();
                    $('#sceneSetting .control-menu-pane li.light-change').removeClass('selected');
                }
                if ($(this).hasClass('personal-preference')) {
                    _this.create();
                }
            }
        })
    }

    /**
     * 创建
     */
    create() {
        if ($('#' + this.id).length > 0) {
            this.show();
        } else {
            this.createPersonalPreferencePlane();
        }
    }

    /**
     * 显示
     */
    show() {
        if ($('#' + this.id).length > 0) {
            $('#' + this.id + '.pre-panelModel-presonSetting').css('display', 'block');
        }
    }

    /**
     * 隐藏
     */
    hidden() {
        if ($('#' + this.id).length > 0) {
            $('#' + this.id + '.pre-panelModel-presonSetting').css('display', 'none');
        }
    }

    /**
     * 销毁
     */
    destroy() {
        if ($('#' + this.id).length > 0) {
            $('#' + this.id + '.pre-panelModel-presonSetting').remove();
        }
    }

    /**
     * 创建个人喜好面板
     */
    createPersonalPreferencePlane() {
        let personalPreferencePlaneHtml = `
        <div id="`+ this.id + `" class="pre-panelModel-presonSetting" style="z-index:999">
            <div class="pre-panelModel" style="display: block">
                <div class="pre-panelHeader pre-params-setting-move">
                    <span class="pre-panelTitle">个人喜好设置</span>
                    <div class="pre-panelIcon">
                        <span class="seticonfont icon-close pre-close"></span>
                    </div>
                </div>
                <div class="pre-secondHeader">
                    <ul class="pre-second-setting-list">
                        <li class="btn-preference btn active" title="场景设置">
                            <span class="icon seticonfont icon-effect3" style="font-size:15px"></span>
                        </li>
                    </ul>
                </div>
                <div class="pre-panelBody">
                    <div class="pre-params-setting-body">
                        <div class="pre-params-setting-list" style="overflow:auto">
                            <div class="pre-params-setting pre-preference" style="display:block">
                                <div class="pre-params-setting-param contourLine">
                                    <div class="pre-params-setting-param-header">
                                        <span class="pre-params-setting-param-title">轮廓线</span>  
                                        <div class="pre-params-setting-param-title-line"></div>
                                    </div>
                                    <div class="pre-params-setting-param-body">
                                        <div class="pre-params-setting-param-row pre-switch-enable">
                                            <span style="position: relative;top: 1px;">状态：</span>
                                            <div class="contourLine-switch">
                                                <div class="btn_fath clearfix off" id="config-contourLine">
                                                    <div class="move" data-state="off" style="left: 12px; background: rgb(255, 255, 255);"></div>
                                                    <div class="btnSwitch btn1">ON</div>
                                                    <div class="btnSwitch btn2">OFF</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pre-params-setting-param-row">
                                            <span class="pre-params-setting-param-color-title pre-color-title pre-params-setting-disable">颜色：</span>
                                            <input type="text" id="contourLine-color" class="inputBox color contourLine-color personSetting-picker pre-params-setting-disable" value="#ff8000">
                                        </div>
                                    </div>
                                </div>
                            </div>                   
                        </div>
                    </div>
                </div>
            </div>
            <div class="pre-save">
				<button type="button" class="pre-baocun">保存</button>
			</div>
        </div>`;
        $('#div2d').append($(personalPreferencePlaneHtml));
        this.getScenePeronSetting();
        this.presetSwitchToogle();
        this.prePerSettingClickFunction();
    }
    /**
     * 获取个人喜好面板中场景参数
     */
    getScenePeronSetting() {
        var _this = this;
        // 初始化toogle的状态
        $('.contourLine-switch>div').each(function () {
            var toogleId = this.id;
            var targetDom = $(this);
            var tar = null;
            if (toogleId == 'config-contourLine') {
                tar = _this.config.contourLine.enable;
            }
            if (tar == true) {
                targetDom.children(".move").css("left", _this.left);
                targetDom.children(".move").attr("data-state", "on");
                targetDom.removeClass("off").addClass("on");
                targetDom.children(".move").css('background', '#fff');
                $('#config-contourLine').parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('.pre-color-title').removeClass('pre-params-setting-disable');
                $('#config-contourLine').parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('input[type="text"]').removeClass('pre-params-setting-disable');
                $('#config-contourLine').parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('input[disabled="disabled"]').removeAttr('disabled');
            } else if (tar == false) {
                targetDom.children(".move").css("left", "1px");
                targetDom.children(".move").attr("data-state", "off");
                targetDom.removeClass("on").addClass("off");
                targetDom.children(".move").css('background', '#636161');
                $('#config-contourLine').parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('.pre-color-title').addClass('pre-params-setting-disable');
                $('#config-contourLine').parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('input[type="text"]').addClass('pre-params-setting-disable');
                $('#config-contourLine').parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('input[type="text"]').attr("disabled", "disabled");
            }
        })

        // 颜色选择器
        $('.personSetting-picker').colpick({
            layout: 'hex',
            submit: 0,
            colorScheme: 'dark',
            color: _this.config.contourLine.color,
            onChange: function (hsb, hex, rgb, el, bySetColor) {
                $(el).css('border-color', '#' + hex);
                if (!bySetColor) $(el).val('#' + hex);
                var col = '#' + hex;
                var colpickId = $(this).find('input').attr('id');
                if (colpickId == 'contourLine-color') {
                    _this.config.contourLine.color = '0x' + hex;
                    _this.app.level.options.outlineColor = '0x' + hex;
                }
            }
        }).keyup(function () {
            $(this).colpickSetColor(this.value);
            $('.personSetting-picker').colpickHide();
        })
        $(".contourLine-color").val("#" + parseInt(_this.config.contourLine.color).toString(16));
        $(".contourLine-color").css('border-color', "#" + parseInt(_this.config.contourLine.color).toString(16));
    }
    /**
     * 状态开关按钮
     */
    presetSwitchToogle() {
        var _this = this;
        $('#' + _this.id + ' .btn_fath.clearfix').on('click', function () {
            var ele = $(this).children('.move');
            if (ele.attr('data-state') == 'on') {
                ele.css('background', '#636161');
                ele.animate({
                    left: '1'
                }, 300, function () {
                    ele.attr('data-state', 'off');
                });
                $(this).removeClass('on').addClass('off');
                $(this).parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('.pre-color-title').addClass('pre-params-setting-disable');
                $(this).parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('input[type="text"]').addClass('pre-params-setting-disable');
                $(this).parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('input[type="text"]').attr("disabled", "disabled");

                if (this.id.indexOf('config-contourLine') != -1) _this.config.contourLine.enable = false;
            } else if (ele.attr('data-state') == 'off') {
                ele.css('background', '#fff')
                ele.animate({
                    left: '12'
                }, 300, function () {
                    ele.attr('data-state', 'on');
                });
                $(this).removeClass('off').addClass('on');
                $(this).parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('.pre-params-setting-disable').removeClass('pre-params-setting-disable');
                $(this).parents('.pre-params-setting-param-row').siblings('.pre-params-setting-param-row').find('input[disabled="disabled"]').removeAttr('disabled');
                if (this.id.indexOf('config-contourLine') != -1) _this.config.contourLine.enable = true;
            }
            _this.setContourLine();
        })
    }

    /**
     * 设置轮廓线
     */
    setContourLine() {
        var _this = this;
        if (_this.config.contourLine != null && _this.config.contourLine.enable != null) {
            let showContourLine = _this.config.contourLine.enable;
            if (showContourLine) {
                scene.pauseEvent(THING.EventType.MouseEnter, '*', '鼠标划入建筑显示轮廓线');
                scene.pauseEvent(THING.EventType.MouseLeave, '*', '鼠标划出建筑隐藏轮廓线');
                _this.app.level.options.outlineColor = _this.config.contourLine.color;
            } else {
                _this.app.level.options.outlineColor = null;
            }
        }
    }

    /**
     * 面板按钮点击事件
     */
    prePerSettingClickFunction() {
        var _this = this;
        var isClose = false;
        let surereload = function () {
            swal_close();
            if (JSON.stringify(_this.config) == JSON.stringify(_this.iniConfig)) return preAlertClass.infoTip('success', '个人喜好设置保存成功!');
            _this.saveSceneEffectData();
            if(isClose == true){
                _this.destroy();
                $('#sceneSetting .control-menu-pane li.personal-preference').removeClass('selected');
            }
        }
        let cancelreload = function () {
            swal_close();
            if(isClose == true){
                if (_this.initConfig) {
                    _this.app.level.options.outlineColor = _this.initConfig.contourLine.color;
                    $(".contourLine-color").val("#" + parseInt(_this.initConfig.contourLine.color).toString(16));
                    $(".contourLine-color").css('border-color', '#' + parseInt(_this.initConfig.contourLine.color).toString(16));
                }
                _this.destroy();
                $('#sceneSetting .control-menu-pane li.personal-preference').removeClass('selected');
                _this.config.contourLine.enable = _this.iniConfig.contourLine.enable;
                _this.config.contourLine.color = _this.iniConfig.contourLine.color;
            }
        }
        $('#' + _this.id + ' .pre-panelModel .pre-panelHeader .pre-panelIcon .pre-close').on('click', function () {
            if (JSON.stringify(_this.config) != JSON.stringify(_this.iniConfig)) {
                isClose = true;
                preAlertClass.newConfirm('您已修改面板参数，是否保存？', ['确定', '取消'], [surereload, cancelreload]);
            }else{
                _this.destroy();
                $('#sceneSetting .control-menu-pane li.personal-preference').removeClass('selected');
            }
        })
        $('#' + _this.id + ' .pre-save .pre-baocun').on('click', function () {
            if (_this.flag == false) {
                preAlertClass.newAlert('操作太频繁，请稍候再试!', 'warning'); return;
            }
            if (_this.allConfig != null) {
                preAlertClass.newConfirm('该场景已设置个人喜好参数，您确定要覆盖原有参数设置吗？', ['确定', '取消'], [surereload, cancelreload]);
            } else {
                preAlertClass.newConfirm('您确定要保存个人喜好设置吗？', ['确定', '取消'], [function () { _this.saveSceneEffectData(); }, cancelreload]);
            }
        })
    }

    /**
     * 获取场景属性
     */
    getSceneEffectData() {
        let sceneEffectJson = {};
        let appJson = this.getAppData();
        sceneEffectJson['app'] = appJson;
        return sceneEffectJson;
    }

    getAppData() {
        let appJson = {};
        appJson['version'] = '0.1.1';
        appJson['config'] = this.getSceneBaseDate();
        return appJson;
    }

    getSceneBaseDate() {
        let baseConfig = {};
        baseConfig['base'] = this.getPersonSettingData();
        return baseConfig;
    }

    getPersonSettingData() {
        let personSettingJson = {};
        personSettingJson['contourLine'] = this.getContourLineData();
        return personSettingJson;
    }

    getContourLineData() {
        let contourLineJson = {};
        contourLineJson['enable'] = this.config.contourLine.enable;
        contourLineJson['color'] = this.config.contourLine.color;
        return contourLineJson;
    }


    /**
     * 个人喜好设置面板保存数据 
     */
    saveSceneEffectData() {
        var _this = this;
        if (typeof (PreConfig) == 'undefined' && typeof (PreConfig.savePreData) == 'undefined') return;
        let saveData = _this.getSceneEffectData();
        _this.reqDatas = {
            target: 'personSetting',
            targetType: 'base',
            preLink: _this.prelink,
            jsonData: saveData
        }
        PreConfig.savePreData('lightConfig', _this.reqDatas, {
            success: function () {
                _this.initColor = _this.config.contourLine.color;
                preAlertClass.infoTip('success', '个人喜好设置保存成功!');
                _this.flag = false;
                _this.iniConfig.contourLine.enable = _this.config.contourLine.enable;
                _this.iniConfig.contourLine.color = _this.config.contourLine.color;
            },
            failed: function () {
                preAlertClass.infoTip('error', '个人喜好设置保存失败!');
            },
            error: function () {
                preAlertClass.infoTip('error', '个人喜好设置保存失败!');
            },
            complete: function () {
                if (_this.timer == null) {
                    _this.timer = setTimeout(function () {
                        _this.flag = true;
                        clearTimeout(_this.timer);
                        _this.timer = null;
                    }, 3500)
                }
            }
        })
    }
}

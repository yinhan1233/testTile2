/**
 * 应用配置类
 */
class PreApplyConfig {
    /**
     * 构造器
     */
    constructor() {
        this.init();
    }
    /**
     * 初始化
     */
    init() {
        if (typeof PreConfig == 'undefined' && typeof (PreConfig.getPreData) != 'function') return Object.create(null);
        if(PreConfig.getPermission() != true || PreConfig.getSceneAuthor() != true){
            return Object.create(null);
        }
        this.app = THING.App.current;
        this.setPersonSetting();
        this.setPreDataConfig();
    }
    /**
     * 设置单场景保存的设置
     */
    setPreDataConfig() {
        if (typeof PreConfig == 'undefined' && typeof (PreConfig.getPreData) != 'function') return;
        if(PreConfig.getPermission() != true || PreConfig.getSceneAuthor() != true) return;
        var _this = this;
        // 应用保存的灯光
        let effectData = PreConfig.getPreData('effect');
        if (typeof (effectData) != "undefined") {
            if (effectData.lighting != null) _this.app.lighting = JSON.parse(effectData.lighting);
            if (effectData.postEffect != null) _this.app.postEffect = JSON.parse(effectData.postEffect);
            if (effectData.skyEffect != null) _this.app.skyEffect = JSON.parse(effectData.skyEffect);
            if (effectData.fog != null) _this.app.fog = JSON.parse(effectData.fog);
        }
        let chartTemplateData = PreConfig.getPreData('chartTemplate');
        if (typeof (chartTemplateData) != 'undefined') {
            let chartPath = chartTemplateData.chartPath;
            $.getJSON(chartPath + '/thingconfig.json').done(function(res) {
                if (res.file != null && res.file != '' && typeof (res.file) == 'object') {
                    let fileArr = [];
                    for (let i = 0, length = res.file.length; i < length; i++) {
                        let curI = res.file[i];
                        let newPath = chartPath + curI;
                        fileArr.push(newPath);
                    }
                    THING.Utils.dynamicLoad(fileArr, function () {
                        $.ajax({
                            url: chartPath + res.index,
                            type: 'get',
                            async: false,
                            cache: false,
                            success: function (result) {
                                $('#div2d').append($(result));
                                eval(res.initFunc);
                            }
                        });
                    },
                    true,
                    true);
                }
            }).fail(function() {
                if(typeof sendParentMessage == 'function'){
                    sendParentMessage({
                        type: 'loading',
                        state: false
                    });
                    sendParentMessage({
                        type: 'SwalAlertInfo',
                        state: 'error',
                        text: '图表应用失败!'
                    });
                }
            });
        }
    }

    /**
     * 个人喜好面板参数设置场景效果
     */
    setPersonSetting() {
        if (typeof PreConfig == 'undefined' && typeof PreConfig.getPersonData != 'function') return;
        if(PreConfig.getPermission() != true || PreConfig.getSceneAuthor() != true) return;
        var _this = this;
        let personAllData = PreConfig.getPersonData('all');
        if (personAllData == null) return;
        let contourLineData = PreConfig.getPersonData('contourLine');
        if (contourLineData != null) {
            if (contourLineData.enable == true) {
                _this.app.level.options.outlineColor = contourLineData.color;
            } else {
                _this.app.level.options.outlineColor = null;
            }
        }
    }
}
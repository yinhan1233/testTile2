/**
 * 提示控件类
 */
class InfoTips {
    constructor() {
        this.init();
    }
    init() {
        this.elementId = 'info-tips-';
        this.infoJson = {};  // 存储控件
        this.createContainer();
    }

    /**
     * 创建初始容器html，存放提示框
     */
    createContainer() {
        let infoContainer = `<div id="infoContainer" class="infoContainer"></div>`;
        $('#div2d').append($(infoContainer));
    }

    /**
     * 创建提示
     * @param { Object } param 
     * @param param.id 传入的提示html部分的id
     * @param param.type 提示类型,默认为tip
     * @param param.text 提示文本
     * @param param.keepTime 提示持续时间，当为-1时会一直存在，按ms计
     * @param param.isRemove 提示持续时间结束后，是否删除，默认为false
     */
    createInfoTips(param) {
        if (param == null || Object.keys(param).length <= 0) return;
        var _this = this;
        if (param.id == null) {
            param.id = _this.createRandomId();
        } else {
            if (_this.infoJson[param.id] != null) {
                _this.showInfoTips(param.id);
                return;
            }
        }
        let promptHtml =
            `<div id="` + param.id + `" class="infoTips showTips">
                <div class="infoTips-box">
                    <div class="expandFloor-expand">
                        <div class="infoTips-main">
                            <div class="infoTips-main-icon">
                                <i class="icon seticonfont icon-info pre-popup-param-info"></i>
                            </div>
                            <div class="infoTips-main-text" style="margin-top: 1px;max-width: 220px;margin-left: 4px;">
                                <div class="infoTipsText">
                                    `+ param.text + `
                                </div>
                            </div>
                            <div class="infoTips-main-close">
                                <i class="set-iconfont icon-close pre-close" style="font-size:12px"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        $('#infoContainer').append($(promptHtml));
        _this.infoJson[param.id] = param;
        $('#' + param.id + ' .infoTips-main-close').on('click', function () {
            if (param.isRemove == true) {
                $('#' + param.id).addClass('closeTips');
                $('#' + param.id).removeClass('showTips');
                setTimeout(function () {
                    $('#' + param.id).remove();
                }, 1000)
                delete _this.infoJson[param.id];
            } else {
                $('#' + param.id).addClass('closeTips');
                $('#' + param.id).removeClass('showTips');
                setTimeout(function () {
                    $('#' + param.id).css('display', 'none');
                    // $('#' + param.id + ' .infoTips-hidden').css('display', 'block');
                }, 900)
                if (_this.infoJson[param.id]['timer'] != null) {
                    clearTimeout(_this.infoJson[param.id]['timer']);
                    _this.infoJson[param.id]['timer'] = null;
                }
            }
        });
        $('#' + param.id + ' .infoTips-hidden').on('click', function () {
            $(this).css('display', 'none');
            $('#' + param.id).removeClass('closeTips');
            $('#' + param.id).addClass('showTips');
            _this.setTimer(param.id);
        })
        if (param.keepTime != -1) {
            param.keepTime = parseFloat(param.keepTime);
            if (_this.infoJson[param.id]['timer'] != null) {
                clearTimeout(_this.infoJson[param.id]['timer']);
                _this.infoJson[param.id]['timer'] = null;
            }
            _this.setTimer(param.id);
        }
        if (param.type == 'tip' || param.type == '' || param.type == null) {
            $('#' + param.id + ' .infoTips-main-icon').css('color', '#2db7f5');
            // $('#' + param.id + ' .infoTips-hidden').css('color', '#2db7f5');
        } else if (param.type == 'alarm') {
            $('#' + param.id + ' .infoTips-main-icon').css('color', '#E6A23C');
            // $('#' + param.id + ' .infoTips-hidden').css('color', '#E6A23C');
        }

    }

    /**
     * 显示已存在的提示
     */
    showInfoTips(id) {
        var _this = this;
        let param = _this.infoJson[id];
        if (param.timer != null) {
            clearTimeout(_this.infoJson[id].timer);
            _this.infoJson[id].timer = null;
        }
        $('#' + param.id).removeClass('closeTips');
        $('#' + param.id).addClass('showTips');
        $('#' + param.id).css('display', 'block');
        $('#' + param.id + ' .infoTips-hidden').css('display', 'none');
        _this.setTimer(id);
    }

    /**
     * 隐藏已存在的提示
     */
    hiddenInfoTips(id) {
        var _this = this;
        let param = _this.infoJson[id];
        if (param == null) return;
        if (param.timer != null) {
            clearTimeout(_this.infoJson[id].timer);
            _this.infoJson[id].timer = null;
        }
        $('#' + param.id).addClass('closeTips');
        $('#' + param.id).removeClass('showTips');
        let timer_hidden_rollback = setTimeout(function () {
            $('#' + param.id).css('display', 'none');
            if ($('#moveByFpsInfoTips').css('display') == 'none') {
                if ($('.infoContainer').hasClass('infoTipsByMbf')) {
                    $('.infoContainer').removeClass('infoTipsByMbf');
                }
            }
            clearTimeout(timer_hidden_rollback);
        }, 1000)
        _this.setTimer(id);
    }


    /**
     * 设置定时器
     */
    setTimer(id) {
        var _this = this;
        let param = _this.infoJson[id];
        _this.infoJson[id]['timer'] = setTimeout(function () {
            clearTimeout(_this.infoJson[id]['timer']);
            _this.infoJson[id]['timer'] = null;
            if (param.isRemove == true) {
                $('#' + id).addClass('closeTips');
                let timer_remove = setTimeout(function () {
                    $('#' + id).remove();
                    if ($('#moveByFpsInfoTips').css('display') == 'none') {
                        if ($('.infoContainer').hasClass('infoTipsByMbf')) {
                            $('.infoContainer').removeClass('infoTipsByMbf');
                        }
                    }
                    clearTimeout(timer_remove);
                }, 1000)
                delete _this.infoJson[param.id];
            } else {
                $('#' + id).addClass('closeTips');
                $('#' + id).removeClass('showTips');
                let timer_hidden = setTimeout(function () {
                    $('#' + id).css('display', 'none');
                    if ($('#moveByFpsInfoTips').css('display') == 'none') {
                        if ($('.infoContainer').hasClass('infoTipsByMbf')) {
                            $('.infoContainer').removeClass('infoTipsByMbf');
                        }
                    }
                    // $('#' + param.id + ' .infoTips-hidden').css('display', 'block');
                    clearTimeout(timer_hidden);
                }, 1000)
            }
        }, param.keepTime);
    }

    /**
     * 生成随机id
     */
    createRandomId() {
        let randomStr = new Date().getTime().toString();
        let randomId = this.elementId + randomStr;
        return randomId;
    }
}
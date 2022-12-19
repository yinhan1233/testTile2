class PreSwalAlert {
    constructor() {
        this.myfilename = {
            fileName: [],
            ProName: [],
            resourceDir: [],
            teamName:[]
        };
        this.initDom();
    }
    /**
     * 初始化提示框dom元素
     */
    initDom(){
        let newWidth=$(window).width();
        let newHeight = $(window).height();
        let initHtml = `<div class="tipDom" style="width: `+ newWidth +`;height: `+ newHeight +`"></div>`;
        $('#div2d').append($(initHtml));
        this.alertTipMessage();
    }
    /**
     * 保存状态提示框
     * @param {*} type  保存状态值
     * @param {*} elem  jquery获取当前点击的对象
     */
   infoTip(type,msg){
        var _this = this;
        _this.msg = msg;
        if(type == 'success'){
            _this.ctor.saveSuccess();
        } else if(type == 'error'){
            _this.ctor.saveFail();
        } else if(type == 'info'){
            _this.ctor.infotip();
        }
    }
    /**
     * 保存状态提示框样式
     */
    alertTipMessage() {
        var _this = this;
        _this.MainFn = {
            methods: {
                saveFail() {
                    this.$message.error(_this.msg);
                },
                saveSuccess: function() {
                    this.$message({
                        message: _this.msg,
                        type: 'success'
                    });
                },
                infotip() {
                    this.$message(_this.msg);
                },
            },
        }
        var Ctor = Vue.extend(_this.MainFn);
        _this.ctor = new Ctor().$mount('.tipDom')
    }
    /**
     * 弹出提示框
     * @param {*} msg 
     * @param {*} type 
     * @param {*} title 
     * @param {*} time 
     * @param {*} fn 
     */
   newAlert(msg,type,title,time,fn,newWidth) {
        var _this = this;
        var content=_this.setWH(msg,type,newWidth);
        let swalData = {
            type: type,
            title:title||'温馨提示',
            html: content,
            confirmButtonText: '确定',
            showConfirmButton: type == 'success' ? false : true
        }
        if(type == 'success'){
            swalData.timer = 1500;
        }
        if(time){
            swalData.timer = time;
        }
        swal(swalData).then(function (value) {
            if(value) {
                if(fn) fn();
            }
        })
        $('.swal2-container').addClass('newalert');
    }
    /**
     * 弹出对话框
     * @param {*} msg 
     * @param {*} btnArr 
     * @param {*} fnArr 
     * @param {*} closeBack 
     * @param {*} newWidth 
     * @param {*} type 
     * @param {*} title 
     */
    newConfirm(msg, btnArr, fnArr, closeBack, newWidth, type,title) {
        var _this = this;
        var str = '';
        fnArr = fnArr || [];
        for (var i = 0; i < btnArr.length; i++) {
            str += "<button class='btn_item" + i + "'>" + btnArr[i] + "</button>";
        }
        var btn = `<div class='footer-btn'>` + str + `</div>`;
        swal({
            type: 'warning',
            title: title||'温馨提示',
            html: _this.setWH(msg, 'confirm', newWidth),
            showConfirmButton: false,
            footer: btn
        }).then(function (value) {
            if (value.dismiss && closeBack) {
                if (fnArr.length) fnArr[fnArr.length - 1]();
            }
        });
        $('.swal2-container').addClass('newalert');
        $('.swal2-footer .footer-btn').on('click', 'button', function () {
            if (fnArr[$(this).index()]) {
                fnArr[$(this).index()].call(_this);
            } else {
                _this.swal_close();
            }
        });
    }


    swal_close() {
        swal.close();
    }

    getStrLength(str) {
        if (str) {
            // if($(str).length) {
            //     str=$(str).text();
            // }
            var r = /[^\x00-\xff]/g;
            return (str.replace(r, "mm").length);
        }
        return 0;
    };

    setWH(msg, type, newWidth) {
        var _this = this;
        var rNum = msg.split('<hr>').length - 1;
        var type = type || 'info';
        var strLength = _this.getStrLength(msg) / 65;
        var lineNum = Math.ceil(strLength);
        var width = 520 * (0.618 + 0.1 * (lineNum - 1));
        var newLineNum = Math.ceil(_this.getStrLength(msg) * 14 * 12 / 24 / (width - 60)) + rNum;
        var msgHeight = newLineNum * 20;
        var height = (width + 28) * 0.618 - 134;
        var marginH = (height - msgHeight) / 2 + (newLineNum > 1 ? 1 : -4);
        var typeIcon = `<div class="` + type + `-icon"></div>`;
        var msgDiv = `<div class="msg" style='margin-top:` + (newLineNum > 1 && msg.length != 17 ? 0 : 3) + `px'>` + msg + `</div>`;
        if (newWidth) {
            width = newWidth;
        }
        var content = `<div class='main' style="width:` + width + `px;margin:` + marginH + `px auto">` + typeIcon + msgDiv + `</div>`;
        return content;
    }
    /**
     * 加载蒙版
     */
    loading(state, config){
        if(state == false){
            $('.pre-mask-content').remove();
            return;
        }
        let text = '加载中...';
        if(config != null){
            if(config.text != null) text = config.text;
        }
        let html =  
        `<div class="pre-mask-content">
            <div class="pre-mask-logo"></div>
            <div class="pre-mask-text">` + text + `<div>
        </div>`;
        $('#content').after($(html));
    }
    /**
     * 文件名填写dialog
     * @param config {*}
     * @param callback {function} callback
     * @author tx
     */
    fileNamedDialog(config, callback) {
        var _this = this;
        let date = _this.getFormatDate('yy/MM/dd');
        var setName = PreConfig.getSceneName();
        var defaultHtml = '<div class="panel-radio" style="position: relative;left: 1%;min-width: 324px;margin: 7px auto 7px;color:#ccc"><span>公开<input type="radio" name="isOpen" value="1" style="margin: 7px 7px 0 4px;"><label></label></span>' +
                '<span>私有<input type="radio" name="isOpen" value="0" checked="checked" style="margin: 7px 7px 0 4px;"><label></label></span></div>'
        let defaultConfig = {
            title: '保存项目',
            input: 'text',
            inputValue: setName,
            html: defaultHtml,
            showCancelButton: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            preConfirm: (val) => {
                let verName = _this.verifyName(val);
                if(verName != null) {
                    swal.showValidationError(`错误提示: ${verName}`);
                } else {
                    return;
                }
            }
        };

        Object.assign(defaultConfig, config);
        swal(defaultConfig).then((result) => {
            if (result.value) {
                callback(result.value, $('input[name="isOpen"]:checked').val());
            }
        });
        $('.swal2-container').addClass('newalert');
        $('.swal2-container #swal2-content').after(`<span class='tip' style='color:#ccc'>项目名称：</span>`);
    };

    /**
     * 校验文件名
     * @author tx
     * @param {*} nameStr
     */
    verifyName(nameStr) {
        var _this = this;
        var msg = null;
        if (nameStr.length > 24) {
            msg = '项目名不能超过24个字符';
        }
        var p = /[ \.\\\/:*?"<>&%=,@#'·!{}`~;-]/m;
        if (p.test(nameStr)) {
            msg = '项目脚本命名不能包含特殊字符 如.\\:*?"<>&%=,@#·!{}`~;-|';
        }
        if (nameStr == '垃圾箱') {
            msg = '项目脚本命名不能为“垃圾箱”';
        }
        // 校验文件名是否已存在
        $.ajax({
            url: '/api/preVerifyName?prjName=' + nameStr,
            type: 'get',
            dataType: 'json',
            contentType: "application/json;charset=utf-8",
            async: false,
            success: function (res) {
                let state = res.state;
                let message = res.message;
                if(state == 'failed') {
                    msg = message;
                } else if(state == 'fail'){
                    msg = null;
                    // _this.infoTip('info',message)
                } else if(state == 'success') {
                    msg = null;
                }
            }
        })
       return msg;
    };
    /**
     * 获取日期
     * @param {*} fmt 
     * @returns 
     */
    getFormatDate(fmt) {
        if (!fmt || fmt == '') return '';
        let date = new Date();
        let o = {
            "M+": date.getMonth() + 1,  // 月份
            "d+": date.getDate(),  // 日
            "h+": date.getHours(),  // 小时
            "m+": date.getMinutes(),  // 分
            "s+": date.getSeconds(),  // 秒
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
        return fmt;
    }

    // 序号转换
    parseStr(n) {
        if (n < 0) {
            return 0;
        } else if (n <= 9) {
            return n;
        } else if (n < 36) {
            return String.fromCharCode(n - 10 + 65);
        } else {
            return String.fromCharCode(n - 36 + 97);
        }
    }

    // 32进制
    str32ToBit(str) {
        let n = Number(str);
        let bit = '';
        for (let i = 0; i < 4 - n.toString(32).length; i++) {
            bit += '0';
        }
        return bit + n.toString(32);
    }
}
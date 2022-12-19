class PreUtil {
    constructor() {

    }
    isJson(value) {
        if (typeof value == 'string') {
            try {
                JSON.parse(value);
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        } else if (typeof value == 'object') {
            return typeof (value) == "object" && Object.prototype.toString.call(value).toLowerCase() == "[object object]";
        } else {
            return false;
        }
    }
    isOnlyNumber(value){
        var regPos = /^\d+(\.\d+)?$/; //非负浮点数
        var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if(regPos.test(value) || regNeg.test(value)) {
            return true;
        } else {
            return false;
        }
    }
    transformJson(value, keyKey, valueKey){
        if(this.isJson(value) == false){
            return value;
        }
        let arr = [];
        for(let tempKey in value){
            let tempJson = {};
            tempJson[keyKey] = tempKey;
            tempJson[valueKey] = value[tempKey];
            arr.push(tempJson);
        }
        return arr;
    }
    checkInputNumberAndDot(value){
        let str = value + '';
        return str.match(/\d+\.?\d{0,9}/,'');
    }
    checkInputNegativeNumberAndDot(value){
        let str = value + '';
        return str.match(/\-?\d+\.?\d{0,9}/,'');
    }
    checkValEndDot(value){
        let str = '';
        // if(str.substr(str.length - 2, 1) == '.')
    }
    loading(fn){
        var _this = this;
        if(_this.loadingId != null){
            return;
        }
        let tempLoadId = 'pre-loading-' + new Date().getTime();
        _this.loadingId = tempLoadId;
        let loadingHtml = 
            `<div id="` + tempLoadId + `" class="pre-loading">
                <img src="/guide/ScenePreview/assets/img/loading.gif">
                <p class="loading-tips">请稍后...</p>
            </div>`;
        $('#div2d').append($(loadingHtml));
        if(fn){
            fn();
            setTimeout(function(){
                _this.loadingCompleted();
            }, 2000);
        }
    }
    loadingCompleted(){
        $('#' + this.loadingId).remove();
        this.loadingId = null;
    }
    transformSpaceToHtml(value){
        if(typeof(value) != 'string') return;
        let tempVal = '';
        for(let i = 0; i < value.length; i++){
            let tempChar = value[i];
            if(tempChar == ' '){
                tempVal += '&nbsp;';
            }else{
                tempVal += tempChar;
            }
        }
        return tempVal;
    }
    hightLight(str, value){
        let tempReg = new RegExp(("("+value+")"),"gm");
        let replaceStr='<span class="pre-highlight">$1</span>';
        return str.replace(tempReg, replaceStr);
    }
    hightLightReback(el){
        let elHtml = $(el).html();
        let hightLightSpanArr = $(el).find('span.pre-highlight');
        let hightLightSpanArrLength = hightLightSpanArr.length;
        for(let i = 0; i < hightLightSpanArrLength; i++){
            let hightLightSpan = hightLightSpanArr[i];
            let hightLightSpanHtml = $(hightLightSpan).html();
            let replaceStr = '<span class="pre-highlight">' + hightLightSpanHtml + '</span>';
            elHtml = elHtml.replace(replaceStr, hightLightSpanHtml);
        }
        $(el).html(elHtml);
    }
    getFormatDate(fmt){
        if(!fmt || fmt == '') return '';
        let date = new Date();
        let o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o){
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        } 
        return fmt;
    }
    getFormat2Date(t1, t2, tg){
        var ms = Date.parse(t1) - Date.parse(t2);
        var minutes = 1000 * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var years = days * 365;
        var d = Math.floor(ms / days);
        ms %= days;
        var h = Math.floor(ms / hours);
        ms %= hours;
        var m = Math.floor(ms / minutes);
        ms %= minutes;
        var s = Math.floor(ms / 1000);
        switch(tg){
            case 'd' : return d;
            case 'h' : return h;
            case 'm' : return m;
            case 's' : return s;
        }
    }
    getKeysFromJson(value, options){
        var _this = this;
        let state = _this.isJson(value);
        if(state){
            if(options && options.type){
                if(options.type == 'time'){
                    return _this.sortByTime(value, options);
                }
            }
            return Object.keys(value);
        }else{
            return [];
        }
    }
    sortByTime(value, options){
        let option = options.option;
        let order = options.order;
        let keysArr = Object.keys(value);
        let keysArrLength = keysArr.length;
        if(keysArrLength <= 1) return keysArr;
        for(let i = 0; i < keysArrLength - 1; i++){
            for(let j = 0; j < keysArrLength - 1 - i; j++){
                let key = keysArr[j];
                let key1 = keysArr[j + 1];
                let keyDate = value[key][option];
                let key1Date = value[key1][option];
                if(order == 'desc'){
                    if(new Date(keyDate).getTime() < new Date(key1Date).getTime()){
                        let temp = keysArr[j];
                        keysArr[j] = keysArr[j + 1];
                        keysArr[j + 1] = temp;
                    }
                }else{
                    if(new Date(keyDate).getTime() > new Date(key1Date).getTime()){
                        let temp = keysArr[j];
                        keysArr[j] = keysArr[j + 1];
                        keysArr[j + 1] = temp;
                    }
                }
            }
        }
        return keysArr;
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    GetQueryString(name) {
        var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&\?]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }
        return result[1];
    }
}
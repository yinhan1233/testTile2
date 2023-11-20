////---- 空值判断 --------------------
//是空值返回true，不是空值返回false
function isEmpty(dt) {
    if (dt === undefined || dt === null || dt === '')
        return true;
    return false;
}

/**
 * 创建canvas内容
 */
function createCanvas(param) {
    var canvas = param.canvas;
    var image = param.image;
    var text = param.text;

    if (!param.canvas) {
        canvas = document.createElement("canvas");
        canvas.width = param.imgWidth;
        canvas.height = param.imgHeight;
    }
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = '40px sans-serif';
    ctx.textAlign = 'center';//文字水平居中
    ctx.fillText(text, (canvas.width / 2), 80) //第一个参数是绘制文本 第二个x设置画布宽度一半 第三个是y坐标

    return canvas;
}


////============= 接口数据 ============================================================ 
function RequestApi (params, callback){
	$.ajax({
        url: params.url,
        type:isEmpty(params.type)?"post":params.type,
		data: isEmpty(params.data)?{}:params.data,
		success: function(data) {
            if (!isEmpty(data)) {
                data = JSON.parse(data);
            }
			return typeof callback == "function" && callback(data);
		},
		error: function (xhr) {
            console.log(xhr);
		}
	})	
}


//设备点击信息列表
var detailInfo;
function deviceInfoView(device) {
    if (!isEmpty(detailInfo)) {
        $(".deviceInfoView").remove(); // 移除信息界面
    }
    if (!isEmpty(device)) {
        detailInfo = `
        <div class="deviceInfoView">
            <div class="deviceInfo-header">设备详细信息</div>
            <div class="deviceInfo-no">${device.id}</div>
            <div class="deviceInfo-content">
            </div>
        </div>
    `
        $("#content").append(detailInfo);
        // if (!isEmpty(device)) {
        //     Infointerface(device.id)
        // }
        contentInfo();
    }
}




//初始加载时传空值的接口调用 与点击工位时接口调用
// function Infointerface(DeviceNo) {
//     var url_WorkRoutesDigital = ServicePath + "ProductionProcess/ProductionProcessQueryService/GetWorkRoutesDigitalTwin";
//     var params = {
//         url: url_WorkRoutesDigital,
//         data: {
//             "DeviceNo": DeviceNo,
//         }
//     };
//     RequestApi(params, function (data) {
//         if (!isEmpty(data) && data.length > 0) {
//             contentInfo(data[0]);
//         }
//     });
// }


var contentview;
function contentInfo() {
    if (!isEmpty(contentview)) {
        $(".content-list").remove(); // 移除设备信息界面
    }
        contentview = `
        <ul class="content-list">
            <li>
                <span >订单号</span><span class="text-gradient">fanhua_10005</span>
            </li>
            <li>
                <span>工序</span><span class="text-gradient">fanhua_10005</span>
            </li>
            <li>
                <span>产品</span><span class="text-gradient">fanhua_10005</span>
            </li>
            <li>
                <span>目标数</span><span class="text-gradient">fanhua_10005</span>
            </li>
            <li>
                <span>待开工</span><span class="text-gradient">fanhua_10005</span>
            </li>
            <li>
                <span>生产中</span><span class="text-gradient">fanhua_10005</span>
            </li>
            <li>
                <span>已完成</span><span class="text-gradient">fanhua_10005</span>
            </li>
            <li>
                <span>不合格</span><span class="text-gradient">fanhua_10005</span>
            </li>
            <li>
                <span>状态</span><span class="text-gradient">fanhua_10005</span>
            </li>
        </ul>
        `
        $(".deviceInfo-content").append(contentview);
        $('.content-list li').last().css("border-bottom", "none");
}



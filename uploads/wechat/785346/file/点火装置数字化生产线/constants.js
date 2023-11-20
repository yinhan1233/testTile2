////====== 标题 ========================================================================================

function headerHtml(id){
    var headerView=`
        <header>
            <div class="logo"></div> 
            <div class="header-title"></div> 
            <div class="header-right"></div>
        </header>
    `
    if (!isEmpty(id)) {
        $("#" + id).append(headerView);
    }
}

////====== bottom part  ========================================================================================
function bottomHtml(id){
    var bottomView=`
    <footer>
        <div class="bottom-view"></div>
        <div class="bottom-view"></div>
        <div class="bottom-view"></div>
        <div class="bottom-view"></div>
    </footer>
    `
    if (!isEmpty(id)) {
        $("#" + id).append(bottomView);
    }
}

//单击设备时，弹出的面板
var popOverView=null
function singleClickHtml(id,device){
        if (!isEmpty(popOverView)) {
            $(".pop-over").remove(); // 移除信息界面
        }
        popOverView= `
          <div class="pop-over" id="popOver${device.id}">
            <h3 class="info-title">${device.name}</h3>
            <div class="info-content">
                <ul>
                    <li><span>名称</span><p>值</p></li>
                    <li><span>名称</span><p>值</p></li>
                    <li><span>名称</span><p>值</p></li>
                    <li><span>名称</span><p>值</p></li>
                    <li><span>名称</span><p>值</p></li>
                    <li><span>名称</span><p>值</p></li>
                </ul>
            </div>
          </div>
         `
        if (!isEmpty(id)) {
          $("#" + id).append(popOverView);
        }
          var obj={
            parent:device,
            localPosition:[0,8,0],
            element:create_element('popOver'+device.id)
        }
        create_ui(obj);
}

















class MapInfo {
  constructor(params) {
    this.scene = params.scene;
    this.init()
  }
  init() {
    this.createHtml();
    this.mapInfo();
  }
  createHtml() {
    let tep_ = `
                  <div class="info-wrapper" id="info-wrapper">
                      <div id='tooltip_copy' style="position: absolute;display: none;visibility: visible;z-index: 991;/* left: 386px; */top: -36px;left: 50%;left: 45%;transform: translateX(-50%);">
                          <div class="tooltip_popper is-dark" id='tooltip_copy_text'>双击复制</div>
                          <div class="popper_arrow">
                          </div>
                      </div>
                      <div class="info-text">
                      <span>经度: <span id='bottom_lon'></span></span>
                      <span style="margin-left: 16px;">纬度: <span id='bottom_lat'></span></span>
                      <span style="margin-left: 16px;">缩放级别: <span id='bottom_current'></span></span>
                      </div>
                  </div> `;
    $("#div2d").append($(tep_));
  }
  mapInfo() {
    let that = this;
    that.scene.off("MouseMove", null, "全局鼠标移动");
    that.scene.off(THING.EventType.MapLevelChange, null, "getCurLevel");

    let currentLevel = CMAP.getCurrentMap().currentLevel;
    
    let lonLat = [[], []];
    let center =THING.App.current.camera.position;
    lonLat = CMAP.Util.convertWorldToLonlat(center);
    that.setLatLon(lonLat, currentLevel);

    that.scene.on(
      "MouseUp",
      function(ev) {
        // let worldCoor = ev.pickedPosition;
        // if (!worldCoor) return;
        let currentLevel = CMAP.getCurrentMap().currentLevel;
        // lonLat = CMAP.Util.convertWorldToLonlat(worldCoor);
        let center = THING.App.current.camera.position
        let lonLat = CMAP.Util.convertWorldToLonlat(center);
        that.setLatLon(lonLat, currentLevel)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      },
      "全局鼠标移动"
    );

    that.scene.on(
      THING.EventType.MapLevelChange,
      function(event) {
        let center = THING.App.current.camera.position;
        let lonLat = CMAP.Util.convertWorldToLonlat(center);
        let currentLevel = event.current;
        that.setLatLon(lonLat, currentLevel)   
      },
      "getCurLevel"
    );

    $("#info-wrapper").on("mouseover", function(ev) {
      if ($("#tooltip_copy").css("display") == "none") {
        $("#tooltip_copy_text").text("双击复制");
        $("#tooltip_copy").css({ display: "block" });
      }
    });

    $("#info-wrapper").on("mouseout", function(ev) {
      $("#tooltip_copy").css({ display: "none" });
    });

    $("#info-wrapper").on("dblclick", function() {
      $("#tooltip_copy_text").text("复制成功");
      if (lonLat[0]) lonLat[0] = lonLat[0].toFixed(6);
      if (lonLat[1]) lonLat[1] = lonLat[1].toFixed(6);

      let obj = {
        lonlat: [lonLat[0], lonLat[1]],
        currentLevel: currentLevel
      };
      that.copyInfo(obj);
    });
  }

  setLatLon(lonLat, currentLevel) {
    $("#bottom_lon").text(lonLat[0].toFixed(6) + "°");
    $("#bottom_lat").text(lonLat[1].toFixed(6) + "°");
    $("#bottom_current").text(currentLevel);
  }
  copyInfo(text) {
    let transfer = document.createElement("input");
    document.body.appendChild(transfer);
    transfer.value = JSON.stringify(text);
    transfer.focus();
    transfer.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
    }
    transfer.blur();
    document.body.removeChild(transfer);
  }
  hide() {
    $("#info-wrapper").css({display: 'none'})
  }
  show() {
    $("#info-wrapper").css({display: 'block'})
  }
}

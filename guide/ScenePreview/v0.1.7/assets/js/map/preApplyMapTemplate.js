/**
 * 测试效果模板
 */
class PreApplyMapTemplate {
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
        this.app = THING.App.current;
        this.map = CMAP.getCurrentMap();
        this.allLayers = this.map.allLayers;
    }
    /**
     * rendererAllLayer //渲染所有的图层
     */
    rendererAllLayer(params) {
        var that = this;
        if(params == null) return;
        for(let i = 0, len = that.allLayers.length; i < len; i++){
            let key = null;
            let oneLayer = that.allLayers[i];
            if (oneLayer.name.indexOf('建筑') != -1 && oneLayer.geometryType == "GeoBuilding") {
                key = "building";
            }else if (oneLayer.name.indexOf('高速') != -1 && oneLayer.geometryType == "GeoLine") {
                key = "linegs";
            }else if (oneLayer.name.indexOf('市区路') != -1 && oneLayer.geometryType == "GeoLine") {
                key = "linesql";
            }else if (oneLayer.name.indexOf('地铁') != -1 && oneLayer.geometryType == "GeoLine") {
                key = "linedt";
            }else if (oneLayer.name.indexOf('省道') != -1 && oneLayer.geometryType == "GeoLine") {
                key = "linesd";
            }else if (oneLayer.name.indexOf('国道') != -1 && oneLayer.geometryType == "GeoLine") {
                key = "linegd";
            }else if (oneLayer.name.indexOf('水系') != -1 && oneLayer.geometryType == "GeoWater") {
                key = "water";
            }else if (oneLayer.name.indexOf('绿化') != -1 && oneLayer.geometryType == "GeoPolygon") {
                key = "green";
            }else if (oneLayer.name.indexOf('乡镇边界') != -1 && oneLayer.geometryType == "GeoPolygon") {
                key = "rangeline";
            }else if (oneLayer.name.indexOf('功能区') != -1 && oneLayer.geometryType == "GeoPolygon") {
                key = "functionalArea";
            }else if(oneLayer.type == 'TileLayer'){
                if(params.tileLayer != null){
                    oneLayer.style.template = CMAP.TileLayerStyle.CUSTOMCOLOR;  // 瓦片样式的模板
                    oneLayer.style.customColor = [255, 255, 255, 1];  // 瓦片图层滤镜颜色,
                    oneLayer.style.grayFilterEnable = true;  // 瓦片图层灰度滤镜 开关
                    oneLayer.style.grayFilterPerBar = params.tileLayer.grayFilterPerBar; //瓦片图层灰色滤镜
                    oneLayer.style.grayFilterColorBar = params.tileLayer.grayFilterColorBar; //表示颜色的渐变值
                    continue;
                }
            }
            if(key != null){
                if(params[key] != null){
                    if(params[key].offsetHeight != null) oneLayer.offsetHeight = params[key].offsetHeight;
                    if(params[key].renderer != null) oneLayer.updateRenderer(params[key].renderer);
                }
            }
        }
    }
}
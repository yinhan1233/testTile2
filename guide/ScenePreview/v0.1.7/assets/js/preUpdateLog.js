
/**
 * 说明： 日志更新 
 * 备注： 此类是为在预览脚本中的更新日志
 */
class PreUpdatgeLog {
    /**
    * 构造方法
    */
    constructor() {
    }
    /**
     * 初始化
     */
    init() {
        this.version = 'v0.1.4';
        this.app = THING.App.current;
        this.create();
    }
    create() {
        var _this = this;
        var liHtml =
            `<li class="change-log setting-item setting-item-split">更新日志</li>`;
        $('#sceneSetting .control-menu-pane ul.setting-list').append($(liHtml));
        _this.initHtml();
        _this.registerEvent();
    }

    /**
     * 初始化层级导航根节点
     */
    initHtml() {
        var _this = this
        let html = `<div class="preview-log" id="preview-log">
            <div class="preview-content">
                <div class="help-content">
                    <div class="preview-logo"></div>
                    <h2 id="speedapp-版本更新日志">SpeedApp 版本更新日志</h2>
                    <i class="icon-close icon-iconfont"></i>
                </div>
                <div class="help-content middle">
                    <h3 id="v017-20210907">V0.1.7 <strong>(2021.09.07)</strong></h3>
                    <ul>
                        <li>新增右键菜单生成项目（内测）</li>
                        <li>新增园区一键图表保存项目（内测）</li>
                        <li>新增地图效果模板保存项目（内测）</li>
                        <li>新增地图一键图表功能（内测）</li>
                        <li>修复建筑自动识别功能无法识别ID中包含“#”建筑的bug</li>
                        <li>修复右键菜单楼层展开功能不能生效的bug</li>
                    </ul>
                    <hr>
                    <h3 id="v016-20210830">V0.1.6 <strong>(2021.08.30)</strong></h3>
                    <ul>
                        <li>新增园区保存视角</li>
                        <li>新增园区应用图表（内测）</li>
                        <li>新增地图效果模板（内测）</li>
                        <li>新增地图测距</li>
                        <li>优化框选摄像头出视频墙</li>
                    </ul>
                    <hr>
                    <h3 id="v015-20210819">V0.1.5 <strong>(2021.08.19)</strong></h3>
                    <ul>
                        <li>新增园区层级导航加场景名称提示</li>
                        <li>新增园区框选摄像头出视频墙（内测）</li>
                        <li>新增地图搜索功能</li>
                        <li>新增地图定位功能</li>
                        <li>新增地图层级缩放功能</li>
                        <li>新增地图指北针功能</li>
                        <li>新增地图行政区划图层</li>
                        <li>优化地图预览信息提示</li>
                        <li>修复视点动画进度条频闪的bug</li>
                        <li>修复园区第一人称行走部分园区地面无法站立的bug</li>
                        <li>关闭地图自动旋转</li>
                    </ul>
                    <hr>
                    <h3 id="v014-20210707">V0.1.4 <strong>(2021.07.23)</strong></h3>
                    <ul>
                        <li>新增园区自动识别园区建筑</li>
                        <li>新增园区自动识别摄像头</li>
                        <li>新增园区建筑自动补充空楼层</li>
                        <li>新增园区建筑楼层标识</li>
                        <li>新增园区建筑自定义楼层展开初始高度</li>
                        <li>新增地图预览信息提示</li>
                        <li>开放园区层级导航功能</li>
                        <li>新增园区层级导航子项菜单</li>
                        <li>修复园区建筑顶牌生成位置不正确</li>
                        <li>修复园区建筑楼层展开后进入楼层视角不正确</li>
                        <li>修复园区右键回退造成的事件无响应的bug</li>
                        <li>关闭园区自动旋转</li>
                    </ul>
                    <hr>
                    <h3 id="v013-20210625">V0.1.3 <strong>(2021.06.25)</strong></h3>
                    <ul>
                        <li>新增园区层级导航功能（内测）</li>
                        <li>新增园区右键菜单功能</li>
                        <li>新增园区右键菜单楼层展开功能</li>
                        <li>新增园区右键菜单室外楼层选择功能</li>
                        <li>优化园区第一人称行走、飞行功能，支持【Alt+滚轮】调<br />
                            节行走速度，支持手动输入数值</li>
                        <li>修复园区第一人称行走时无法站在地面的bug</li>
                        <li>修复园区建筑楼层展开间距调节后无法合并的bug</li>
                        <li>修复园区从建筑层级回退到园区层级右键菜单显示的bug</li>
                    </ul>
                    <hr>
                    <h3 id="v012-20210109">V0.1.2 <strong>(2021.01.09)</strong></h3>
                    <ul>
                        <li>新增园区预览时显示CampusBuilder客户端设置的信息牌</li>
                        <li>新增园区预览时调节灯光且支持保存功能</li>
                        <li>新增园区自定义视点动画功能</li>
                        <li>新增提示插件</li>
                        <li>优化园区第一人称行走功能，支持【Shift+滚轮】调节视角高度</li>
                        <li>优化园区建筑楼层展开功能，支持【Shift+滚轮】调节楼层展开间距</li>
                        <li>优化园区视点动画播放</li>
                        <li>修复地图自动选择速度异常的bug</li>
                    </ul>
                    <hr>
                    <h3 id="v011-20200210">V0.1.1 <strong>(2020.02.10)</strong></h3>
                    <ul>
                        <li>新增园区自动旋转功能</li>
                        <li>新增园区第一人称行走功能</li>
                        <li>新增园区第一人称飞行功能</li>
                        <li>新增园区更换天空盒功能</li>
                        <li>新增园区添加地图底图功能</li>
                        <li>新增园区添加小地图功能</li>
                        <li>新增园区播放视点动画功能</li>
                        <li>新增园区2D/3D切换功能</li>
                        <li>新增园区添加效果模板功能</li>
                    </ul>
                </div>
            </div>
        </div>`
        $("#div2d").append(html);
    }
    /**
     * 注册事件
     */
    registerEvent() {
        var _this = this;
        // 获取设置的日志更新按钮进行点击事件
        $('#sceneSetting .control-menu-pane li.change-log').on('click', function (ev) {
            ev.stopPropagation();
            $(this).parents('.control-menu').removeClass('actives');
            $(this).parents('.control-item').removeClass('active');
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                $('.preview-log').removeClass('preview-show');
            } else {
                $(this).addClass('selected');
                $('.preview-log').addClass('preview-show');
            }
        })
        // 点击关闭图标执行关闭事件
        $('.preview-log .icon-close').on('click', function (ev) {
            $('#sceneSetting .control-menu-pane li.change-log').removeClass('selected');
            $('.preview-log').removeClass('preview-show');
        })
    }
}
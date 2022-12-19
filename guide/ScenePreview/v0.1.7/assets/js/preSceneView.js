/**
 * 保存场景视角和缩略图
 */
class PreSceneView {
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
        this.camera = THING.App.current.camera;
        this.createHtml();
    }

    /**
     * 创建保存视角入口
     */
    createHtml() {
        let that = this;
        let templete = `<li class="view-save setting-item">保存视角</li>`;
        $('.view-change').after($(templete));

        // 添加事件
        $('.view-save.setting-item').on('click', function (ev) {
            that.saveEffectData();
        });
    }

    /**
     * 保存数据
     */
    saveEffectData() {
        if (typeof (PreConfig) == 'undefined' && typeof (PreConfig.savePreData) == 'undefined') return;
        let that = this;
        // 获取数据
        let prelink = window.location.href.substr(window.location.href.indexOf('pre/') + 4);
        let scenePosition = that.camera.position;
        let sceneTarget = that.camera.target;
        let sceneLevel = that.app.level.current.id;
        let captureImgData = that.app.captureScreenshotToImage(800, 450, 'png', 0.5);
        // 组装数据
        let reqDatas = {
            target: 'cameraConfig',
            targetType: 'base',
            preLink: prelink,  // 取当前的link值
            jsonData: {
                "app": {
                    "version": "1.0.1",
                    "config": {
                        "base": {
                            "camera": {
                                "position": scenePosition, "target": sceneTarget, 'level': sceneLevel
                            }
                        }
                    }
                }
            },
            captureImgData: captureImgData.substring(22)
        }

        //保存数据
        PreConfig.savePreData('cameraConfig', reqDatas, {
            success: function () {  // 保存成功的回调，以下写保存成功后执行的逻辑代码，以下类似
                preAlertClass.infoTip('success', '视角保存成功！');
            },
            failed: function () {  // 保存失败的回调
                preAlertClass.infoTip('error', '视角保存失败,请稍后重试！');
            },
            error: function () {  // 保存失败的回调
                preAlertClass.infoTip('error', '视角保存失败,请稍后重试！');
            },
            complete: function () {  // 保存完成后的回调，无论是否成功 都会走这个方法

            },
        });
    }
}
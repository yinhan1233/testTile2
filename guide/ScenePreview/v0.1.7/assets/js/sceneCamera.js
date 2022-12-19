
/**
 * 说明： 识别场景中的摄像头顶牌
 */
class SceneCamera {
    /**
    * 构造方法
    */
    constructor() {
        this.init();
    }
    /**
     * 初始化
     */
    init() {
        this.version = 'v0.1.3';
        this.app = THING.App.current;
        this.filePath = PreConfig.getFilePath();  // 文件根目录路径
        this.name = 'pre-camera-marker';
        this.camera = this.app.query('[物体类型=摄像头]').objects;
        this.app.focus(); // 使3D场景获得焦点
        this.control;
        this.selectData = [];
        this.number = 0;
        this.isEdit = false;
        this.position;
        this.target;
        this.state = true;
        this.element_id;
        this.adminPermissions = PreConfig.getPermission();
        this.isAuthor = PreConfig.getSceneAuthor();
        this.pathname = window.location.pathname;
        this.prelink = this.pathname.split('/').pop();
        this.reqDatas = {
            preLink: this.prelink
        }
        this.initSelectEvent();
        this.createMarker();
        this.registerEvent();

    }
    /**
    * 权限校验
    */
    initSelectEvent() {
        if (this.adminPermissions != true || this.isAuthor != true || this.pathname.indexOf('/pre/') != 0) return;
        var _this = this;
        _this.create();
        _this.selectEvent();
        _this.mouseEvent();
    }
    /**
     * 创建
     */
    create() {
        var liHtml =
            `<li class="select-camera setting-item setting-item-split">视频墙</li>`;
        $('.level-control').after($(liHtml));
    }
    /**
     * 创建Marker顶牌
     */
    createMarker() {
        var _this = this;
        for (let i = 0, len = _this.camera.length; i < len; i++) {
            let arr = _this.camera[i].parent.size;  // 获取摄像头父物体的size
            arr.splice(1, 1);
            let min = Math.min(...arr);  // 获取该物体的size的最小值
            let num = Math.ceil(min / 30);
            if (_this.camera.length > 70) {
                let count = Math.ceil(min / 153);
                num = Math.floor(num / count);
            }
            let boxCenter = _this.camera[i].boundingBox.center;
            let marker = _this.app.create({
                type: "Marker",
                id: 'camera' + _this.camera[i].id,  // 设置顶牌id
                name: _this.name,  // 设置顶牌name
                url: _this.filePath + 'img/camera/camera.png',  // 图片地址
                parent: _this.camera[i],  // 设置父物体
                localPosition: [0, boxCenter[1], 0],  // 父物体坐标系下的相对位置
                size: num
            })
            _this.camera[i].userData['pre-camera-marker'] = marker;
        }
        _this.clickMarker();
    }
    /**
     * 创建Marker顶牌点击事件
     */
    clickMarker() {
        var _this = this;
        // 鼠标滑上事件
        _this.app.on(THING.EventType.MouseEnter, '.Marker', function (ev) {
            if (ev.object.name != _this.name) return;
            // 设置鼠标样式
            $(document.body).css('cursor', 'pointer');
            // 设置鼠标滑上Marker的图片地址
            ev.object.url = _this.filePath + 'img/camera/camera-active.png';
            // 创建顶牌
            if ($('.topCard-camera').length > 0) {
                $('.topCard-camera').remove();
                _this.creatUIAnchor(ev.object)
            } else {
                _this.creatUIAnchor(ev.object)
            }
        }, '场景自动识别摄像头滑入事件')
        // 鼠标移出事件
        _this.app.on(THING.EventType.MouseLeave, '.Marker', function (ev) {
            if (ev.object.name != _this.name) return;
            // 设置鼠标样式
            $(document.body).css('cursor', 'default');
            if (_this.panel) {
                var objId = _this.panel.__id.substring(5);
                if (objId == ev.object.id) {
                    // 设置鼠标移出Marker的图片地址
                    ev.object.url = _this.filePath + 'img/camera/camera-active.png';
                } else {
                    ev.object.url = _this.filePath + 'img/camera/camera.png';
                }
            } else {
                ev.object.url = _this.filePath + 'img/camera/camera.png';
            }
            if ($('.else-camera').length > 0) {
                $('.else-camera').remove();
            }
        }, '场景自动识别摄像头滑出事件')
    }
    /**
     * 创建UIAnchor顶牌
     * @param {Object}
     */
    creatUIAnchorHtml(obj) {
        var _this = this;
        if (!obj) return;
        if (obj.parent.userData['物体类型'] == '摄像头') {
            // let num = $('.number')[i].innerText
            let topHtml = `<div class="topCard-camera" id="topcardTo` + obj.id + `" data-parent="` + obj.parent.id + `" style="position:absolute;display: block;"><span style="border-radius: 50%;height: 16px;width: 16px;display: inline-block;border: 1px solid #000;vertical-align: top;">  
                    <span class="lable-num" title="`+ obj.parent.id + `" style="display: block;color: #000;height: 16px;line-height: 16px;text-align:center"></span></span>  ` + obj.parent.name + `` + obj.parent.id + `</div>`
            $('#div3d').append($(topHtml));
            let objPos = obj.position;
            let boxCenter = obj.boundingBox.center;
            let objSize = obj.size;
            let localPositionData = [boxCenter[0] - objPos[0], objSize[1], boxCenter[2] - objPos[2]];
            // 创建UIAnchor顶牌 
            let uIAnchor = _this.app.create({
                type: 'UIAnchor',
                name: 'uIAnchor-' + obj.name,
                element: $('#topcardTo' + obj.id)[0],  // 界面元素的 dom 节点
                parent: obj,  // 绑定的父物体
                localPosition: localPositionData,  // 在父物体坐标系下锚点放置的相对位置
                pivotPixel: [parseFloat($('#topcardTo' + obj.id).css("width")) / 2, parseFloat($('#topcardTo' + obj.id).css("height"))]
            });
        }
    }
    /**
    * 数组的比较
    * 传入两个不同的数组 arr1、arr2
    */
    arrayCompare(arr1, arr2) {
        let newArr = [];
        for (let i = 0; i < arr2.length; i++) {
            for (let j = 0; j < arr1.length; j++) {
                if (arr1[j] === arr2[i]) {
                    newArr.push(arr1[j]);
                }
            }
        }
        return newArr;
    }
    /**
     * 注册事件
     */
    registerEvent() {
        var _this = this;
        if (_this.panel) {
            // 移除panel
            _this.panel.destroy();
            _this.panel = null;
            _this.app.query(_this.name + '').forEach(v => {
                v.url = _this.filePath + 'img/camera/camera.png';
            })
        }
        // 监听建筑层级的 EnterLevel 事件
        _this.app.on(THING.EventType.EnterLevel, function (ev) {
            // 当前进入的层级对象
            var current = ev.current;
            for (let i = 0; i < _this.camera.length; i++) {
                if (_this.app.query('#camera' + _this.camera[i].id).length > 0) {
                    _this.app.query('#camera' + _this.camera[i].id).visible = false;
                }
            }
            if (current.type == 'Campus') {
                let arr = _this.arrayCompare(current.children, _this.camera);
                for (let i = 0; i < arr.length; i++) {
                    arr[i].children[0].visible = true;
                }
            } else if (current.type == 'Building') {
                let arr = _this.arrayCompare(current.children, _this.camera);
                for (let i = 0; i < arr.length; i++) {
                    arr[i].children[0].visible = true;
                }
            } else if (current.type == 'Floor') {
                let array = _this.arrSubtraction(_this.camera, current.children);
                let arr = _this.arrayCompare(current.children, _this.camera);
                array.forEach(v => {
                    let status = v.children[0].url
                    if (status == _this.filePath + 'img/camera/camera.png') {
                        v.children[0].visible = false;
                    }
                })
                for (let i = 0; i < arr.length; i++) {
                    arr[i].children[0].visible = true;
                }
            }
        });
        // 顶牌点击事件
        _this.app.on(THING.EventType.SingleClick, '.Marker', function (ev) {
            if (ev.object.name != _this.name) return;
            // 获取Marker对象
            var markerObj = ev.object;
            if (_this.panel) {
                // 移除panel
                _this.panel.destroy();
                _this.panel = null;
                _this.app.query(_this.name + '').forEach(v => {
                    v.url = _this.filePath + 'img/camera/camera.png';
                })
                // 创建视频窗口事件
                _this.createCameraHtml(markerObj);
                // 设置marker的图片
                markerObj.url = _this.filePath + 'img/camera/camera-active.png';
            } else {
                _this.createCameraHtml(markerObj);
                // 设置marker的背景图片
                markerObj.url = _this.filePath + 'img/camera/camera-active.png';
            }
        }, '视频窗口事件')
    }
    /**
     * 创建视频窗口界面
     * @param {Object} Marker顶牌对象
     */
    createCameraHtml(obj) {
        var _this = this;
        _this.panel = new THING.widget.Panel({
            id: 'panel' + obj.id,  // 设置id
            titleText: obj.parent.name + obj.parent.id,  // 标题内容
            dragable: true,  // 是否可拖拽
            hasTitle: true,  // 是否有标题
            width: "722px",  // 面板宽度
            closeIcon: true  // 是否有关闭按钮
        });
        // 为panel添加全屏按钮
        let fullscreenHtml = `<span id="video" class="video video-icon"></span>`;
        $('.text').after($(fullscreenHtml));
        if (obj.parent.userData.url) {
            // 添加iframe
            var iframe = _this.panel.addIframe({ url: obj.parent.userData.url }, 'url').caption("");
            $('.ThingJS_UI').find('iframe')[0].style.height = '404px';
        } else {
            // 添加iframe
            var iframe = _this.panel.addIframe({ url: _this.filePath + 'html/no-video.html' }, 'url').caption("");
            $('.ThingJS_UI').find('iframe')[0].style.height = '404px';
        }
        // 获取iframe dom 元素
        var iframeDom = $('.ThingJS_UI').find('iframe')[0];
        // 获取video dom 元素
        var videoDom = iframeDom.contentWindow.document.getElementById('VideoElement');
        // 获取监控摄像头的屏幕坐标
        var pos = _this.app.camera.worldToScreen(obj.position);
        // 判断视频窗口的屏幕位置
        var windowX = $(window).width();
        var windowY = $(window).height();
        var panelPosX = null;
        var panelPosY = null;
        if (pos[0] + 361 > windowX) {
            panelPosX = 1200;
        } else if (pos[0] - 361 < 0) {
            panelPosX = 0;
        } else if (pos[0] + 361 < windowX) {
            panelPosX = pos[0] - 361
        }
        if (pos[1] - 475 < 0) {
            panelPosY = 0;
        } else if (pos[1] - 475 > 0) {
            panelPosY = pos[1] - 475;
        }
        // 设置panel的position
        _this.panel.position = [panelPosX, panelPosY];
        // 面板的关闭事件
        _this.panel.on("close", function () {
            _this.panel.destroy();
            _this.panel = null;
            obj.url = _this.filePath + 'img/camera/camera.png';
        });
        let state = true;
        $('.video').on('click', function () {
            if (state) {
                state = false;  // 修改状态
                $('.video').removeClass('video-icon'); //移除2X图标
                $('.video').addClass('fullScreen');  // 添加全屏图标
                $('.ThingJS_wrap').parent().css('width', '1436px');
                $('.ThingJS_UI').find('iframe')[0].style.height = '808px';
                // 获取监控摄像头的屏幕坐标
                let pos = _this.app.camera.worldToScreen(obj.position);
                // 判断视频窗口的屏幕位置
                let windowX = $(window).width();
                let windowY = $(window).height();
                let panelPosX = null;
                let panelPosY = null;
                if (pos[0] + 718 > windowX) {
                    panelPosX = 400;
                } else if (pos[0] - 718 < 0) {
                    panelPosX = 0;
                } else if (pos[0] + 718 < windowX) {
                    panelPosX = pos[0] - 718
                }
                if (pos[1] - 808 < 0) {
                    panelPosY = 0;
                } else if (pos[1] - 808 > 0) {
                    panelPosY = pos[1] - 808;
                }
                // 设置panel的position
                _this.panel.position = [panelPosX, panelPosY];
            } else if (!state) {
                state = true;
                $('.video').removeClass('fullScreen'); //移除全屏图标
                $('.video').addClass('video-icon');  // 添加1X图标
                $('.ThingJS_wrap').parent().css('width', '718px');
                $('.ThingJS_UI').find('iframe')[0].style.height = '404px';
                let pos = _this.app.camera.worldToScreen(obj.position);
                // 判断视频窗口的屏幕位置
                let windowX = $(window).width();
                let windowY = $(window).height();
                let panelPosX = null;
                let panelPosY = null;
                if (pos[0] + 361 > windowX) {
                    panelPosX = 1200;
                } else if (pos[0] - 361 < 0) {
                    panelPosX = 0;
                } else if (pos[0] + 361 < windowX) {
                    panelPosX = pos[0] - 361
                }
                if (pos[1] - 475 < 0) {
                    panelPosY = 0;
                } else if (pos[1] - 475 > 0) {
                    panelPosY = pos[1] - 475;
                }
                // 设置panel的position
                _this.panel.position = [panelPosX, panelPosY];
                //全屏
                let curIIframeDom = $('.ThingJS_UI').find('iframe')[0]
                _this.fullScreen(curIIframeDom)
            }
        })
        return _this.panel;

    }
    /**
     * 进入全屏
     * @param {*} dom 
     */
    fullScreen(dom) {
        var fullVideo = dom;
        //HTML W3C 提议
        if (fullVideo.requestFullScreen) {
            fullVideo.requestFullScreen();
        }
        //IE11
        else if (fullVideo.msRequestFullscreen) {
            fullVideo.msRequestFullscreen();
        }
        // Webkit (works in Safari5.1 and Chrome 15)
        else if (fullVideo.webkitRequestFullScreen) {
            fullVideo.webkitRequestFullScreen();
        }
        // Firefox (works in nightly)
        else if (fullVideo.mozRequestFullScreen) {
            fullVideo.mozRequestFullScreen();
        }
    }
    /**
     * 退出全屏
     * @param {*} id 
     */
    fullExit(id) {
        var fullVideo = document.getElementById(id);
        //IE ActiveXObject
        if (window.ActiveXObject) {
            var WsShell = new ActiveXObject('WScript.Shell');
            WsShell.SendKeys('{ESC}');
        }
        //HTML5 W3C 提议
        else if (fullVideo.requestFullScreen) {
            document.exitFullscreen();
            //写退出全屏后的执行函数
        }
        //IE 11
        else if (fullVideo.msRequestFullscreen) {
            document.msExitFullscreen();
            //写退出全屏后的执行函数
        }
        // Webkit (works in Safari5.1 and Chrome 15)
        else if (fullVideo.webkitRequestFullScreen) {
            document.webkitCancelFullScreen();
            //写退出全屏后的执行函数
        }
        // Firefox (works in nightly)
        else if (fullVideo.mozRequestFullScreen) {
            document.mozCancelFullScreen();
            //写退出全屏后的执行函数
        }
    }
    /**
     * 鼠标滑入滑出
     */
    mouseEvent() {
        var _this = this;
        // 鼠标滑上事件
        _this.app.on(THING.EventType.MouseEnter, '.Marker', function (ev) {
            if (ev.object.name != _this.name) return;
            // 设置鼠标样式
            $(document.body).css('cursor', 'pointer');
            if (ev.object.url == _this.filePath + 'img/camera/camera-active.png') return;
            // 设置鼠标滑上Marker的图片地址
            ev.object.url = _this.filePath + 'img/camera/camera-active.png';
            // 创建顶牌
            if ($('.else-camera').length > 0) {
                $('.else-camera').remove();
                _this.creatUIAnchor(ev.object)
            } else {
                _this.creatUIAnchor(ev.object)
            }
        }, '鼠标滑入')
        // 鼠标移出事件
        _this.app.on(THING.EventType.MouseLeave, '.Marker', function (ev) {
            if (ev.object.name != _this.name) return;
            // 设置鼠标样式
            $(document.body).css('cursor', 'default');
            let arr = _this.arrSubtraction(_this.camera, _this.selectData);
            if (_this.selectData.length > 0) {
                _this.selectData.forEach(v => {
                    v.children[0].url = _this.filePath + 'img/camera/camera-active.png';

                })
            }
            if (arr) {
                arr.forEach(v => {
                    v.children[0].url = _this.filePath + 'img/camera/camera.png';
                })
            }
            if ($('.else-camera').length > 0) {
                $('.else-camera').remove();
            }
        }, '鼠标滑出')
    }
    /**
     * 数组处理的方法
     * @param {Array} arr1
     * @param {Array} arr2
     */
    arrSubtraction(arr1, arr2) {
        if (Array.isArray(arr1) && Array.isArray(arr2)) {
            return arr1.filter((i) => !arr2.includes(i));
        }
    }
    /**
     * 顶牌与视频墙联动
     */
    selectReact(obj) {
        var _this = this;
        let status;
        let object = obj.name + obj.id
        if ($('.grid-panel').length > 0) {
            status = $('.grid-panel')[0].style.width == '310px';
        }
        for (let i = 0; i < $('.camera-name').length; i++) {
            if (object == $('.camera-name')[i].title) {
                $('.video-li')[i].style.border = '2px solid rgb(250,174,27)'
                $('.video-li')[i].style.borderRadius = '5px'
            } else {
                $('.video-li')[i].style.border = null
                $('.video-li')[i].style.borderRadius = null
            }
        }
    }
    /**
     * 框选点击事件
     */
    selectEvent() {
        var _this = this;
        $('#sceneSetting .control-menu-pane li.select-camera').on('click', function (ev) {
            ev.stopPropagation();
            $(this).parents('.control-menu').removeClass('actives');
            $(this).parents('.control-item').removeClass('active');
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                $('.infoTips')[0].style.display = 'none';
                $('#' + _this.element_id).remove();
                _this.resumeEvent();
                _this.app.off('keydown');
                _this.app.off('keyup');
                $('.video-li').remove();
                _this.selectData.forEach(v => {
                    if ($('.topCard-camera').length > 0) {
                        $('.topCard-camera').remove();
                    }
                    v.children[0].url = _this.filePath + 'img/camera/camera.png';
                })
            } else {
                $(this).addClass('selected');
                if (_this.panel) {
                    _this.panel.destroy();
                    _this.panel = null;
                    _this.app.query('' + _this.name).forEach(v => {
                        v.url = _this.filePath + 'img/camera/camera.png';
                    })
                }
                _this.pauseEvent();
                if (_this.selectData.length > 0) {
                    _this.selectData.forEach(v => {
                        if ($('.topCard-camera').length > 0) {
                            $('.topCard-camera').remove();
                        }
                        v.children[0].url = _this.filePath + 'img/camera/camera.png';
                    })
                }
                _this.createControl();
                _this.openSelect(); // 打开框选
                _this.promptHtml(); // 显示提示

            }
        });
        // 监听建筑层级的 EnterLevel 事件
        _this.app.on(THING.EventType.EnterLevel, function (ev) {
            // 当前进入的层级对象
            var current = ev.current;
            for (let i = 0; i < _this.camera.length; i++) {
                if (_this.app.query('#camera' + _this.camera[i].id).length > 0) {
                    _this.app.query('#camera' + _this.camera[i].id).visible = false;
                }
            }
            if (current.type == 'Campus') {
                let arr = _this.arrayCompare(current.children, _this.camera);
                for (let i = 0; i < arr.length; i++) {
                    arr[i].children[0].visible = true;
                }
            } else if (current.type == 'Building') {
                let arr = _this.arrayCompare(current.children, _this.camera);
                for (let i = 0; i < arr.length; i++) {
                    arr[i].children[0].visible = true;
                }
            } else if (current.type == 'Floor') {
                let array = _this.arrSubtraction(_this.camera, current.children);
                let arr = _this.arrayCompare(current.children, _this.camera);
                array.forEach(v => {
                    let status = v.children[0].url
                    if (status == _this.filePath + 'img/camera/camera.png') {
                        v.children[0].visible = false;
                    }
                })
                for (let i = 0; i < arr.length; i++) {
                    arr[i].children[0].visible = true;
                }
            }
        });
        // 顶牌点击事件
        _this.app.on(THING.EventType.SingleClick, '*', function (ev) {
            let obj = ev.object.parent;
            let arr = _this.arrSubtraction(_this.camera, _this.selectData);
            $('.video-li').css({ border: '2px' });
            $('.topCard-camera').removeClass('moveAnimation');
            if ($('.grid-panel').length > 0) {
                if (_this.isEdit) {
                    if ($('.four-grid').length > 0) {
                        if (_this.selectData.length >= 0) {
                            if (_this.selectData.length <= 4) {
                                _this.selectReact(obj);
                                if (_this.selectData.length < 4) {
                                    _this.creatUIAnchorHtml(obj.children[0]);
                                    if (_this.selectData.indexOf(obj) == -1 && obj.userData['物体类型'] == '摄像头') {
                                        _this.selectData.push(obj);
                                    }
                                    arr.forEach(v => {
                                        if (v == obj) {
                                            if ($('.null-li').length > 0) {
                                                $('.null-li').remove();
                                            }
                                            _this.addSingleVideo(obj);
                                            _this.clickEvent();
                                        } else {
                                            v.children[0].url = _this.filePath + 'img/camera/camera.png';
                                        }
                                    })
                                } else {
                                    if (_this.number >= 4) {
                                        _this.number = 0;
                                    }
                                    if (_this.selectData.indexOf(obj) == -1 && obj.userData['物体类型'] == '摄像头') {
                                        let object = _this.selectData.splice(_this.number, 1, obj);
                                        object[0].children[0].url = _this.filePath + 'img/camera/camera.png';
                                        _this.creatUIAnchorHtml(obj.children[0]);
                                        $('#topcardTo' + object[0].children[0].id).remove();
                                        _this.addSingleVideo(obj, object[0].id);
                                        _this.number++;
                                        $('.video-li')[_this.number].remove();
                                        _this.createLableNumber();
                                    }
                                }
                            }
                        }
                    }
                    if ($('.nine-grid').length > 0) {
                        if (_this.selectData.length >= 0) {
                            let width = $('.grid-panel')[0].style.width
                            if (width == '895px' || width == '310px') {
                                _this.selectReact(obj);
                                if (_this.selectData.length < 9) {
                                    _this.creatUIAnchorHtml(obj.children[0]);
                                    if (_this.selectData.indexOf(obj) == -1 && obj.userData['物体类型'] == '摄像头') {
                                        _this.selectData.push(obj);
                                    }
                                    arr.forEach(v => {
                                        if (v == obj) {
                                            if ($('.null-li').length > 0) {
                                                $('.null-li').remove();
                                            }
                                            _this.addSingleVideo(obj);
                                        } else {
                                            v.children[0].url = _this.filePath + 'img/camera/camera.png';
                                        }
                                    })
                                } else {
                                    if (_this.number >= 9) {
                                        _this.number = 0;
                                    }
                                    if (_this.selectData.indexOf(obj) == -1 && obj.userData['物体类型'] == '摄像头') {
                                        let object = _this.selectData.splice(_this.number, 1, obj);
                                        object[0].children[0].url = _this.filePath + 'img/camera/camera.png';
                                        _this.creatUIAnchorHtml(obj.children[0]);
                                        $('#topcardTo' + object[0].children[0].id).remove();
                                        _this.number++;
                                        _this.addSingleVideo(obj, object[0].id);
                                        $('.video-li')[_this.number].remove();
                                        _this.createLableNumber();
                                    }
                                }
                            }
                        }
                    }
                } else {
                    preAlertClass.infoTip('info', '请进入可勾选状态');
                }
                if (obj.userData['物体类型'] == '摄像头') {
                    for (let i = 0; i < $('.camera-name').length; i++) {
                        $('.video-li')[i].style.border = '2px';
                        if ((obj.name + obj.id) == $('.camera-name')[i].title) {
                            $('.video-li')[i].style.border = '2px solid rgb(250,174,27)'
                            $('.video-li')[i].style.borderRadius = '5px'
                        }
                    }
                }
            }
            if ($('.el-lable').hasClass('square-panel')) {
                for (let i = 0; i < $('.camera-name').length; i++) {
                    if ((obj.name + obj.id) == $('.camera-name')[i].innerText) {
                        let id = $('.video-li').eq(i).attr('id');
                        let obj = $('#' + id)
                        _this.scrollToLocation(obj);
                    }
                }
            }
            _this.clickEvent();
        }, '点击视频进视频墙')
        _this.app.pauseEvent(THING.EventType.SingleClick, '*', '点击视频进视频墙');
        _this.app.pauseEvent(THING.EventType.MouseEnter, '.Marker', '鼠标滑入');
        _this.app.pauseEvent(THING.EventType.MouseLeave, '.Marker', '鼠标滑出');
    }
    /**
     * 滚动条滚动到指定位置
     */
    scrollToLocation(obj) {
        var mainContainer = $('.float'),
            scrollToContainer = obj;
        //动画效果
        mainContainer.animate({
            scrollTop: scrollToContainer.offset().top - mainContainer.offset().top + mainContainer.scrollTop()
        }, 2000);//2秒滑动到指定位置
    }
    /**
     * 判断不同层级的顶牌显示
     */
    judgeLevel() {
        var _this = this;
        let level = _this.app.level.current;
        if (level.type == 'Campus') {
            let things = level.children;
            let arr = [];
            things.forEach(v => {
                if (v.userData['物体类型'] == '摄像头') {
                    arr.push(v);
                }
            })
            let array = _this.arrSubtraction(_this.camera, arr);
            array.forEach(v => {
                let status = v.children[0].url
                if (status == _this.filePath + 'img/camera/camera.png') {
                    v.children[0].visible = false;
                } else {
                    v.children[0].visible = true;
                }
            })
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].userData['物体类型'] == '摄像头') {
                    arr[i].children[0].visible = true;
                }
            }
        } else if (level.type == 'Building') {
            _this.camera.forEach(v => {
                if (v.children[0].url == _this.filePath + 'img/camera/camera.png') {
                    v.children[0].visible = false;
                } else {
                    v.children[0].visible = true;
                }
            })
        } else if (level.type == 'Floor') {
            let things = level.children;
            let arr = [];
            things.forEach(v => {
                if (v.userData['物体类型'] == '摄像头') {
                    arr.push(v);
                }
            })
            let array = _this.arrSubtraction(_this.camera, arr);
            array.forEach(v => {
                let status = v.children[0].url
                if (status == _this.filePath + 'img/camera/camera.png') {
                    v.children[0].visible = false;
                } else {
                    v.children[0].visible = true;
                }
            })
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].userData['物体类型'] == '摄像头') {
                    arr[i].children[0].visible = true;
                }
            }
        }

    }
    /**
     * 点击框选控件按钮，提示按住shift键，可对场景摄像头进行框选
     */
    promptHtml() {
        var _this = this;
        if ($('#expandFloorDataDetails').length > 0) {
            $('#expandFloorDataDetails').css('display', 'block');
        }
        if ($('.infoContainer').hasClass('moveTips')) {
            $('.infoContainer').removeClass('moveTips');
            $('.infoContainer').css('top', '5px');
        }
        let expandFloorInfoTipsJson = {
            id: 'expandFloorInfoTips',
            type: 'tip',
            text: '点击框选控件按钮，提示按住shift键，可对场景摄像头进行框选',
            keepTime: '10000',
            isRemove: false
        }
        infoTipsClass.createInfoTips(expandFloorInfoTipsJson);
    }
    /**
     * 打开框选
     */
    openSelect() {
        var _this = this;
        // Shift 按下启用框选功能
        _this.app.on('keydown', function (ev) {
            if (ev.key === THING.KeyType.Shift) {
                if (_this.app.hasControl('框选控件')) {
                    _this.control.start();
                }
                else {
                    _this.app.addControl(_this.control, '框选控件');
                }
                _this.selectData = [];
            }
        });
        // Shift 抬起启用框选功能
        _this.app.on('keyup', function (ev) {
            if (ev.key === THING.KeyType.Shift) {
                _this.control.end();
                if ($('.layui-form').length == 0) {
                    _this.createTableInfo();
                } else if ($('.layui-form').length > 0) {
                    $('.layui-form')[0].remove();
                    _this.createTableInfo();
                }
            }
        });
    }
    /**
     * 框选控制
     */
    createControl() {
        var _this = this;
        // 设置框选候选集合，场景里所有摄像头都可被框选
        if (!_this.control) {
            _this.control = new THING.RectangleSelectControl(_this.camera, {
                // 开始框选时的回调处理
                start: function (ev) {
                    // 关闭摄像机默认交互
                    _this.app.camera.inputEnabled = false;
                },
                // 结束框选时的回调函数
                end: function () {
                    // 恢复摄像机默认交互
                    _this.app.camera.inputEnabled = true;
                },
                // 物体被选中的回调处理
                select: function (ev) {
                    ev.object.children[0].url = _this.filePath + 'img/camera/camera-active.png';
                    ev.stopPropagation(); // 禁用默认选中效果
                },
                // 未被选中物体的回调处理
                deselect: function (ev) {
                    if (ev.object.length == undefined) {
                        if (ev.object.children[0]) {
                            ev.object.children[0].url = _this.filePath + 'img/camera/camera.png';
                        }
                    }
                }
            });
        }
    }
    /**
     * 数组排序
     */
    arraySort(obj) {
        let arr1 = new Array;
        let arr2 = new Array;
        obj.forEach(v => {
            if (v.userData.url) {
                arr1.push(v);
            } else {
                arr2.push(v);
            }
        })
        return arr1.concat(arr2);

    }
    /**
     * 动态添加视频标签
     */
    addVideoLable(objs) {
        var _this = this;
        let top = `<div id="grid-top" class="grid-top"><span id="panel-text" class="panel-text">视频列表</span>
        <div class="el-edit notEditable" title="不可勾选"></div>
        <div class="el-reset" title="复位"></div>
        <div class="el-lable tree-panel" title="列表"></div>
        <i class="panel-close panel-iconfont" title="关闭"></i></div>`
        $('.grid-panel').prepend(top);
        if ($('.grid-panel')[0].style.width == '310px') {
            $('.el-lable').removeClass('tree-panel');
            $('.el-lable').addClass('square-panel');
        }
        for (let i = 0; i < objs.length; i++) {
            let num = i + 1;
            _this.addSingleVideo(objs[i], null, num);
        }
    }
    /**
     *动态添加单个视频
     * @param {*} object 
     */
    addSingleVideo(object, state, number) {
        var _this = this;
        let videoUrl = object.userData.url;
        let Reg = /.mp4$/;
        if (videoUrl) {
            if (Reg.test(videoUrl)) {
                let li = `<li id="` + object.id + `" class="video-li"><div class="lable_top" style="z-index:1000000"><div class="li-title" data-parent="` + object.id + `" style="width: 270px;height: 25px;border-bottom: 1px solid #1f2022c7;"><div class="camera-icon"></div><span class="circle"><span class="number" title="` + object.id + `">` + number + `</span></span><div class="camera-name" data-parent="` + object.id + `" title="` + object.name + `` + object.id + `"> ` + object.name + `` + object.id + `</div><div id="el-` + object.id + `" class="el-position location" data-parent="` + object.id + `" title="定位"></div><div class="fullScreen" title="全屏"></div><i class="li-close panel-iconfont" data-parent="` + object.id + `" title="关闭"></i></div>
                    <div class="camera-iframe"><video style="height: 152px;width: 272px;"  controls="controls" autoplay="autoplay" muted name="media"><source src="` + object.userData.url + `" type="video/mp4"></video></div></div></li>`
                if (state) {
                    $('#' + state).before($(li));
                } else {
                    $('.float').append(li);
                }
            } else {
                let li = `<li id="` + object.id + `" class="video-li"><div class="lable_top" style="z-index:1000000"><div class="li-title" data-parent="` + object.id + `" style="width: 270px;height: 25px;border-bottom: 1px solid #1f2022c7;"><div class="camera-icon"></div><span class="circle"><span class="number" title="` + object.id + `">` + number + `</span></span><div class="camera-name" data-parent="` + object.id + `" title="` + object.name + `` + object.id + `"> ` + object.name + `` + object.id + `</div><div id="el-` + object.id + `" class="el-position location" data-parent="` + object.id + `" title="定位"></div><div class="fullScreen" title="全屏"></div><i class="li-close panel-iconfont" data-parent="` + object.id + `" title="关闭"></i></div>
                    <div class="camera-iframe"><iframe id="content_info" class="Video_ifram" src="` + videoUrl + `" frameborder="0" width="100%" height="100%" scrolling="no" style="height: 152px;" allowfullscreen="true"></iframe></div></div></li>`
                if (state) {
                    $('#' + state).before($(li));
                } else {
                    $('.float').append(li);
                }
            }
        } else {
            let li = `<li id="` + object.id + `" class="video-li"><div class="lable_top"><div class="li-title" data-parent="` + object.id + `" style="width: 270px;height: 25px;border-bottom: 1px solid #1f2022c7;"><div class="camera-icon"></div><span class="circle"><span class="number" title="` + object.id + `">` + number + `</span></span><div class="camera-name" data-parent="` + object.id + `" title="` + object.name + `` + object.id + `">` + object.name + `` + object.id + `</div><div id="el-` + object.id + `" class="el-position location" data-parent="` + object.id + `" title="定位"></div><div class="fullScreen" title="全屏"></div><i class="li-close panel-iconfont" data-parent="` + object.id + `" title="关闭"></i></div><div class="camera-iframe"><iframe id="content_info" class="Video_ifram" src="` + _this.filePath + 'html/no-video.html' + `" frameborder="0" width="100%" height="100%" scrolling="no" style="height: 152px;"></iframe></div></div></li>`
            if (state) {
                $('#' + state).before($(li));
            } else {
                $('.float').append(li);
            }
        }
        if (state) {
            for (let i = 0; i < $('.camera-name').length; i++) {
                if ((object.name + object.id) == $('.camera-name')[i].title) {
                    $('.video-li')[i].style.border = '2px solid rgb(250,174,27)'
                    $('.video-li')[i].style.borderRadius = '5px'
                }
            }
        }
        if ($('.grid-panel')[0].style.width == '600px') {
            _this.addNullVideo(4, _this.selectData);
        } else if ($('.grid-panel')[0].style.width == '895px') {
            _this.addNullVideo(9, _this.selectData);
        } else if ($('.four-grid').length > 0) {
            _this.addNullVideo(4, _this.selectData);
        } else if ($('.nine-grid').length > 0) {
            _this.addNullVideo(9, _this.selectData);
        }
        _this.createLableNumber();
    }
    /**
     * 创建顶牌编号
     */
    createLableNumber() {
        for (let i = 0; i < $('.number').length; i++) {
            let num = i + 1;
            $('.number')[i].innerHTML = num;
            for (let j = 0; j < $('.lable-num').length; j++) {
                if ($('.lable-num')[j].title == $('.number')[i].title) {
                    $('.lable-num')[j].innerHTML = $('.number')[i].innerText;
                }
            }
        }
    }
    /**
    * 视频墙
    */
    creatVideoWall(object, status) {
        var _this = this;
        let objs = _this.arraySort(object);  // 数组排序
        let obj = objs.slice(0, 9);
        _this.selectData = obj;
        let arr = _this.arrSubtraction(_this.camera, obj);
        if ($('.topCard-camera').length > 0) {
            $('.topCard-camera').remove();
        }
        if ($('.grid-panel').css({ display: 'block' })) {
            $('.video-li').remove();
        }
        arr.forEach(v => {
            v.children[0].url = _this.filePath + 'img/camera/camera.png';
        })
        obj.forEach(v => {
            _this.creatUIAnchorHtml(v.children[0])
            v.children[0].url = _this.filePath + 'img/camera/camera-active.png';
        })
        if (objs.length <= 4) {
            if ($('.grid-panel').length == 0) {
                _this.initvideoHtml();
            }
            if (status) {
                $('.el-lable').removeClass('tree-panel');
                $('.el-lable').addClass('square-panel');
                $('.grid-panel')[0].style.width = '310px';
                $('.grid-panel')[0].style.height = '850px';
            } else {
                $('.el-lable').addClass('tree-panel');
                $('.el-lable').removeClass('square-panel');
                $('.grid-panel')[0].style.width = '600px';
                $('.grid-panel')[0].style.height = '450px';
            }
            if ($('.grid-top').length > 0) {
                $('.grid-top').remove();
            }
            if ($('.grid-panel').length == 0) {
                _this.initvideoHtml();
            }
            _this.addVideoLable(objs);
            _this.addNullVideo(4, objs);
            $('.grid-panel').addClass('four-grid');
            $('.grid-panel').removeClass('nine-grid');
        } else {
            if ($('.grid-top').length > 0) {
                $('.grid-top').remove();
            }
            if ($('.grid-panel').length == 0) {
                _this.initvideoHtml();
            }
            _this.addVideoLable(obj);
            _this.addNullVideo(9, obj);
            $('.grid-panel').removeClass('four-grid');
            $('.grid-panel').addClass('nine-grid');
            if (status) {
                $('.grid-panel')[0].style.width = '310px';
                $('.grid-panel')[0].style.height = '850px';
                for (let i = 0; i < $('.is-null').length; i++) {
                    $('.is-null')[i].parentNode.parentNode.style.display = 'none'
                }
            } else {
                $('.el-lable').addClass('tree-panel');
                $('.el-lable').removeClass('square-panel');
                $('.grid-panel')[0].style.width = '895px';
                $('.grid-panel')[0].style.height = '650px';
            }
        }
        _this.clickEvent();
    }
    /**
     * 添加空白标签
     */
    addNullVideo(num, objs) {
        if ($('.null-li').length > 0) {
            $('.null-li').remove();
        };
        for (let j = 0; j < num - (objs.length); j++) {
            let li = `<li class="video-li null-li"><div id="null` + j + `" class="lable_top">
                <div class="is-null"><div class="camera-name"></div><div class="camera-null"><span style="position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);font-size: 20px; color:#ffffff">0`+ ($('.video-li').length + 1) + `</span></div></div></li>`
            $('.float').append(li);
            if ($('.grid-panel')[0].style.width == '310px' && objs.length >= 4) {
                $('.null-li').css({ display: 'none' });
            } else if (objs.length < 4 && $('.grid-panel')[0].style.width != '310px') {
                $('.null-li').css({ display: 'block' });
            } else if (objs.length < 4 && $('.grid-panel')[0].style.width == '310px') {
                for (let i = 0; i < 4 - (objs.length); i++) {
                    for (let j = 4 - (objs.length); j < $('.null-li').length; j++) {
                        $('.null-li')[j].style.display = 'none';
                    }
                }
            }
        }
    }

    /**
     * 图标点击事件
     */
    clickEvent() {
        var _this = this;
        let num;
        let width = $('.grid-panel')[0].style.width;
        $('.panel-close').unbind();
        $('.panel-close').on('click', function () {
            $('#' + _this.element_id).remove();
            let select = $('#sceneSetting .control-menu-pane li.select-camera');
            select.parents('.control-menu').removeClass('actives');
            select.parents('.control-item').removeClass('active');
            select.removeClass('selected');
            $('.infoTips')[0].style.display = 'none';
            _this.app.off('keydown');
            _this.app.off('keyup');
            $('.video-li').remove();
            if ($('.grid-Marker').length > 0) {
                $('.grid-Marker').remove();
            }
            _this.selectData.forEach(v => {
                if ($('.topCard-camera').length > 0) {
                    $('.topCard-camera').remove();
                }
                v.children[0].url = _this.filePath + 'img/camera/camera.png';
            })
            _this.state = true;
            _this.selectData = [];
            _this.flyEnd();
            _this.resumeEvent();
            _this.judgeLevel();
        })
        $('.fullScreen').unbind();
        $('.fullScreen').on('click', function () {
            for (let i = 0, len = $('.fullScreen').length; i < len; i++) {
                if ($(this)[0] == $('.fullScreen')[i]) {
                    let curIIframeDom = $('.camera-iframe')[i].childNodes[0];
                    _this.fullScreen(curIIframeDom)
                }
            }
        })
        $('.li-close').unbind();
        $('.li-close').on('click', function () {
            let id = $(this).attr('data-parent');
            let obj = _this.app.query('#' + id)[0];
            if (width == '310px') {
                $('#' + id).slideUp(1000, function () {
                    $('#' + id).remove();
                    _this.removeAaary(_this.selectData, obj, function () {
                        _this.createLableNumber();
                        if ($('.grid-panel')[0].style.width == '600px') {
                            num = 4;
                        } else if ($('.grid-panel')[0].style.width == '895px') {
                            num = 9;
                        } else if ($('.grid-panel')[0].style.width == '310px') {
                            if ($('.four-grid').length > 0) {
                                num = 4;
                            } else if ($('.nine-grid').length > 0) {
                                num = 9;
                            }
                        }
                        obj.children[0].url = _this.filePath + 'img/camera/camera.png';
                        $('#topcardTo' + obj.children[0].id).remove();
                        _this.addNullVideo(num, _this.selectData);
                        _this.state = true;
                        _this.flyEnd();
                    });
                });
            } else {
                for (let i = 0, len = $('.li-close').length; i < len; i++) {
                    if ($(this)[0] == $('.li-close')[i]) {
                        $('.video-li')[i].remove();
                    }
                }
                _this.removeAaary(_this.selectData, obj, function () {
                    if ($('.grid-panel')[0].style.width == '600px') {
                        num = 4;
                    } else if ($('.grid-panel')[0].style.width == '895px') {
                        num = 9;
                    } else if ($('.grid-panel')[0].style.width == '310px') {
                        if (_this.selectData.length < 4) {
                            num = 4;
                        } else {
                            num = 9;
                        }
                    }
                    obj.children[0].url = _this.filePath + 'img/camera/camera.png';
                    $('#topcardTo' + obj.children[0].id).remove();
                    _this.addNullVideo(num, _this.selectData);
                    _this.createLableNumber();
                    _this.state = true;
                    _this.flyEnd();
                });
            }

        })
        $('.el-position').unbind();
        $('.el-position').on('click', function () {
            let id = $(this).attr('data-parent');
            _this.flyToCamera(id);
            _this.createLableNumber();
        })
        $('.el-lable').unbind();
        $('.el-lable').on('click', function () {
            if ($('.grid-panel').css('width') == '600px') {
                if ($('.el-lable').hasClass('tree-panel')) {
                    $('#video-panel').removeAttr('style');
                    $('.el-lable').removeClass('tree-panel');
                    $('.el-lable').addClass('square-panel');
                    $('.panel-text')[0].style.width = '75%';
                    $('.grid-panel')[0].style.width = '310px';
                    $('.grid-panel')[0].style.height = '850px';
                    width = $('.grid-panel')[0].style.width;
                } else {
                    _this.draggHtml();
                    $('.panel-text')[0].style.width = '85%';
                    $('.el-lable').addClass('tree-panel');
                    $('.el-lable').removeClass('square-panel');
                    $('.grid-panel')[0].style.width = '600px';
                    $('.grid-panel')[0].style.height = '450px';
                    width = $('.grid-panel')[0].style.width;
                }
            } else if ($('.grid-panel').css('width') == '895px') {
                if ($('.el-lable').hasClass('tree-panel')) {
                    $('#video-panel').removeAttr('style');
                    $('.el-lable').removeClass('tree-panel');
                    $('.el-lable').addClass('square-panel');
                    $('.grid-panel')[0].style.width = '310px';
                    $('.grid-panel')[0].style.height = '850px';
                    $('.panel-text')[0].style.width = '75%';
                    width = $('.grid-panel')[0].style.width;
                    if (_this.selectData.length < 4) {
                        for (let i = 0; i < 4 - (_this.selectData.length); i++) {
                            $('.null-li')[i].style.display = 'block'
                            for (let j = 4 - (_this.selectData.length); j < $('.null-li').length; j++) {
                                $('.null-li')[j].style.display = 'none';
                            }
                        }
                    } else {
                        $('.null-li').css({ display: 'none' })
                    }

                } else {
                    _this.draggHtml();
                    $('.el-lable').addClass('tree-panel');
                    $('.el-lable').removeClass('square-panel');
                    $('.grid-panel')[0].style.width = '895px';
                    $('.grid-panel')[0].style.height = '650px';
                    $('.panel-text')[0].style.width = '90%';
                    width = $('.grid-panel')[0].style.width;
                    $('.null-li').css({ display: 'block' })
                }
            } else if ($('.grid-panel').css('width') == '310px') {
                if ($('.el-lable').hasClass('square-panel')) {
                    $('.el-lable').addClass('tree-panel');
                    $('.el-lable').removeClass('square-panel');
                    if ($('.four-grid').length > 0) {
                        $('.grid-panel')[0].style.width = '600px';
                        $('.grid-panel')[0].style.height = '450px';
                        $('.panel-text')[0].style.width = '85%';
                        width = $('.grid-panel')[0].style.width;
                    } else if ($('.nine-grid').length > 0) {
                        $('.grid-panel')[0].style.width = '895px';
                        $('.grid-panel')[0].style.height = '650px';
                        $('.panel-text')[0].style.width = '90%';
                        width = $('.grid-panel')[0].style.width;
                        $('.null-li').css({ display: 'block' })
                    }
                }
            }
        })
        $('.el-reset').unbind();
        $('.el-reset').on('click', function () {
            if ($('.grid-panel')[0].style.width == '310px') return;
            if ($('.grid-panel')[0].style.width == '895px') {
                $('#video-panel').removeAttr('style');
                $('.grid-panel')[0].style.width = '895px'
                $('.grid-panel')[0].style.height = '650px';
            } else {
                $('#video-panel').removeAttr('style');
            }
        })
        $('.el-edit').unbind();
        $('.el-edit').on('click', function () {
            if ($('.el-edit').hasClass('notEditable')) {
                $('.el-edit').removeClass('notEditable');
                $('.el-edit').addClass('editable');
                $('.el-edit').attr('title', '可勾选');
                _this.isEdit = true;

            } else {
                $('.el-edit').addClass('notEditable');
                $('.el-edit').removeClass('editable');
                $('.el-edit').attr('title', '不可勾选');
                _this.isEdit = false;
            }

        })
        $('.camera-name').unbind();
        $('.camera-name').on('click', function () {
            let id = $(this).attr('data-parent')
            let border = $(this)[0].parentNode.parentNode.parentNode;
            for (let i = 0; i < $('.topCard-camera').length; i++) {
                $('.video-li').css({ border: '2px' })
                if (id == $('.topCard-camera').eq(i).attr('data-parent')) {
                    $('.topCard-camera').removeClass('moveAnimation');
                    $('#topcardTocamera' + id).addClass('moveAnimation');
                }

            }
            border.style.border = '2px solid rgb(250,174,27)';
            border.style.borderRadius = '5px';
        })
    }
    /**
     * 点击飞向摄像头
     */
    flyToCamera(object) {
        var _this = this;
        let id = object;
        let obj = $('#el-' + id);
        let objs = _this.app.query('#' + id)[0];
        if ($('.grid-Marker').length > 0) {
            $('.grid-Marker').remove();
        }
        if (obj.hasClass('location')) {
            $('.el-position').removeClass('resetting');
            $('.el-position').addClass('location');
            $('.el-position').attr('title', '定位');
            $('#el-' + id).attr('title', '重置');
            obj.removeClass('location');
            obj.addClass('resetting');
            $('.topCard-camera').css({ display: 'none' })
            _this.createElementIcon(objs);  // 创建跳跃动画图片
            $('.grid-Marker').addClass('moveAnimation');
            _this.flyTo(objs, _this.state);  // 视角飞向摄像头
        } else {
            _this.state = true;
            $('.el-position').attr('title', '定位')
            $('.el-position').removeClass('resetting');
            $('.el-position').addClass('location');
            $('.grid-Marker').removeClass('moveAnimation');
            obj.addClass('location');
            obj.removeClass('resetting');
            if ($('.grid-Marker').length > 0) {
                $('.grid-Marker').remove();
            }
            $('.topCard-camera').css({ display: 'block' })
            _this.flyEnd();
        }
    }
    /**
     * 摄像头视角飞行
     */
    flyTo(objs, state) {
        var _this = this;
        for (let i = 0; i < _this.camera.length; i++) {
            if (_this.app.query('#camera' + _this.camera[i].id).length > 0) {
                _this.app.query('#camera' + _this.camera[i].id).visible = false;
            }
        }
        // 获取摄影机位置
        if (state) {
            _this.position = _this.app.camera.position;
            _this.target = _this.app.camera.target;
        }
        // 获取对应监控摄像头模型的position
        let cameraObjPos = objs.position;
        let cameraObjTar = objs.target;
        // 获取摄像机到摄像头之间的距离
        let cameraToObjDis = THING.Math.getDistance(cameraObjPos, _this.position);
        let newCameraPosX = (_this.position[0] - cameraObjPos[0]) * (3 / cameraToObjDis) + cameraObjPos[0];
        let newCameraPosY = (_this.position[1] - cameraObjPos[1]) * (3 / cameraToObjDis) + cameraObjPos[1];
        let newCameraPosZ = (_this.position[2] - cameraObjPos[2]) * (3 / cameraToObjDis) + cameraObjPos[2];
        let newCameraPos = [newCameraPosX, newCameraPosY, newCameraPosZ];
        _this.state = false;
        _this.app.camera.flyTo({
            position: newCameraPos,
            target: cameraObjPos,
            time: 1000,
            complete: function () {
                let objArr = _this.app.level.current.children
                for (let i = 0; i < objArr.length; i++) {
                    if (objArr[i].userData['物体类型'] != '摄像头') {
                        objArr[i].style.opacity = '0.1'
                    }
                }
            }
        });
    }
    /**
     * 结束飞行
     */
    flyEnd() {
        var _this = this;
        for (let i = 0; i < _this.camera.length; i++) {
            if (_this.app.query('#camera' + _this.camera[i].id).length > 0) {
                _this.app.query('#camera' + _this.camera[i].id).visible = true;
            }
        }
        let objArr = _this.app.level.current.children;
        for (let i = 0; i < objArr.length; i++) {
            if (objArr[i].userData['物体类型'] != '摄像头') {
                objArr[i].style.opacity = '1';
            }
        }
        //摄像机飞行到某位置
        _this.app.camera.flyTo({
            position: _this.position,
            target: _this.target,
            time: 1000,
            complete: function () {
            }
        });
    }
    /**
     * 删除数组指定对象
     * _arr:数组
     * _obj:需删除的对象
     */
    removeAaary(_arr, _obj, callback) {
        var length = _arr.length;
        for (var i = 0; i < length; i++) {
            if (_arr[i] == _obj) {
                if (i == 0) {
                    _arr.shift(); //删除并返回数组的第一个元素
                    callback(_arr);
                }
                else if (i == length - 1) {
                    _arr.pop();  //删除并返回数组的最后一个元素
                    callback(_arr);
                }
                else {
                    _arr.splice(i, 1); //删除下标为i的元素
                    callback(_arr);
                }
            }
        }
    }
    /**
     * 获取框选信息
     */
    createTableInfo() {
        var _this = this;
        // 获取框选的物体集合（Selector）
        let objs = _this.control.objects;
        _this.number = 0;
        if (objs.length > 0) {
            for (let i = 0; i < objs.length; i++) {
                if (objs[i].userData['物体类型'] == '摄像头' && _this.selectData.indexOf(objs[i]) == -1) {
                    _this.selectData.push(objs[i]);
                } else {
                    _this.selectData = [];
                }

            }
        }
        if ($('.grid-panel').length > 0) {
            let status = $('.grid-panel')[0].style.width == '310px';
            _this.creatVideoWall(_this.selectData, status);
        } else {
            _this.creatVideoWall(_this.selectData);
        }
        _this.control.clear();  // 清除框选信息
        _this.judgeLevel();  // 判断当前层级下是否显示其他层级顶牌
        _this.isEdit = false;
        _this.app.resumeEvent(THING.EventType.SingleClick, '*', '点击视频进视频墙');
        _this.draggHtml();
    }
    /**
     * 阻止事件
     */
    pauseEvent() {
        var _this = this;
        _this.app.pauseEvent(THING.EventType.SingleClick, '.Marker', '视频窗口事件'); // 阻止点击视频弹框
        _this.app.pauseEvent(THING.EventType.MouseEnter, '.Marker', '场景自动识别摄像头滑入事件');
        _this.app.pauseEvent(THING.EventType.MouseLeave, '.Marker', '场景自动识别摄像头滑出事件');
        _this.app.resumeEvent(THING.EventType.MouseEnter, '.Marker', '鼠标滑入');
        _this.app.resumeEvent(THING.EventType.MouseLeave, '.Marker', '鼠标滑出');
    }
    /**
     * 恢复事件
     */
    resumeEvent() {
        var _this = this;
        _this.app.resumeEvent(THING.EventType.SingleClick, '.Marker', '视频窗口事件'); // 阻止点击视频弹框
        _this.app.resumeEvent(THING.EventType.MouseEnter, '.Marker', '场景自动识别摄像头滑入事件');
        _this.app.resumeEvent(THING.EventType.MouseLeave, '.Marker', '场景自动识别摄像头滑出事件');
        _this.app.pauseEvent(THING.EventType.SingleClick, '*', '点击视频进视频墙');
        _this.app.pauseEvent(THING.EventType.MouseEnter, '.Marker', '鼠标滑入');
        _this.app.pauseEvent(THING.EventType.MouseLeave, '.Marker', '鼠标滑出');
    }
    /**
     * 初始化视频墙
     */
    initvideoHtml() {
        var _this = this;
        let videoHtml =
            `<div id="video-panel" class="grid-panel" style="z-index: 100;">
                    <hr/ class="hr">
                    <ul class="float"></ul>
                </div>`
        $('#div2d').append($(videoHtml));
        _this.element_id = $('.grid-panel').attr('id');
    }
    /**
     * 拖拽界面
     */
    draggHtml() {
        let panel = document.getElementById('video-panel');
        if (!panel) return;
        $('#panel-text').on('mousedown', function (ev) {
            if ($('.grid-panel').css('width') != '310px') {
                let width = panel.style.width;
                let event = ev || window.event;
                let startx = event.clientX;
                let starty = event.clientY;
                let sb_bkx = startx - panel.offsetLeft;
                let sb_bky = starty - panel.offsetTop;
                if (event.preventDefault) {
                    event.preventDefault();
                } else {
                    event.returnValue = false;
                };
                document.onmousemove = function (ev) {
                    let event = ev || window.event;
                    let endx = event.clientX - sb_bkx;
                    let endy = event.clientY - sb_bky;
                    let ww = document.documentElement.clientWidth;
                    let wh = document.documentElement.clientHeight;
                    let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
                    if (endx < 0) {
                        endx = 0;
                    } else if (endx > ww - panel.offsetWidth) {
                        endx = ww - panel.offsetWidth;
                    };
                    if (endy < 0) {
                        endy = 0;
                    } else if (endy > wh - panel.offsetHeight + scrolltop) {
                        endy = wh - panel.offsetHeight + scrolltop;
                    };
                    panel.style.left = endx + 'px';
                    panel.style.top = endy + 'px';
                    document.onmouseup = function () {
                        document.onmousemove = null;
                    }
                }
            }
        })
    }
    /**
     * 创建UIAnchor顶牌
     * @param {Object}
     */
    creatUIAnchor(obj) {
        var _this = this;
        let topHtml = `<div class="else-camera" id="topcard` + obj.id + `" style="position:absolute;display: block;"> ` + obj.parent.name + `` + obj.parent.id + `</div>`
        $('#div3d').append($(topHtml));
        let objPos = obj.position;
        let boxCenter = obj.boundingBox.center;
        let objSize = obj.size;
        let localPositionData = [boxCenter[0] - objPos[0], objSize[1], boxCenter[2] - objPos[2]];
        // 创建UIAnchor顶牌
        let uIAnchor = _this.app.create({
            type: 'UIAnchor',
            name: 'uIAnchor-' + obj.name,
            element: $('#topcard' + obj.id)[0],  // 界面元素的 dom 节点
            parent: obj,  // 绑定的父物体
            localPosition: localPositionData,  // 在父物体坐标系下锚点放置的相对位置
            pivotPixel: [parseFloat($('#topcard' + obj.id).css("width")) / 2, parseFloat($('#topcard' + obj.id).css("height"))]
        });
    }
    /**
     * 创建闪烁图标动画
     */
    createElementIcon(obj) {
        var _this = this;
        let pictureMarkerHtml = `<div id="grid-` + obj.id + `" class="grid-Marker" style="position: absolute;">
            <div id="box" style="display:none;position: absolute;height: 40px;width: 40px;z-index:-1"></div>
            <div class="picture"></div>
        </div>`
        $('#div3d').append($(pictureMarkerHtml));
        // 创建UIAnchor顶牌
        let uIAnchor = _this.app.create({
            type: 'UIAnchor',
            name: 'uIAnchor-' + obj.name,
            element: $('#grid-' + obj.id)[0],  // 界面元素的 dom 节点
            parent: obj,  // 绑定的父物体
            localPosition: [0, 0.3, 0],  // 在父物体坐标系下锚点放置的相对位置
        });
    }
}

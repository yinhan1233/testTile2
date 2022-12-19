/**
 * 说明： 视点动画 
 * 备注： 此类是为在预览脚本中定义视点动画，可从模模搭后端或cityBuilder的后端获取视点
 *       动画的json数据，也可自定义视点动画json数据
 */
 class ViewAni {
    /**
     * 构造方法
     * @param {Object} json数据 自定义的json数据  
     */
    constructor(createHtmlFun) {
        this.createHtmlFun = createHtmlFun;
        this.init();
    }

    init() {
        this.app = THING.App.current;
        this.travelIndex = 0;  // 视点动画计数
        this.travelTimer;  // 视点动画计时器
        this.viewAniDataJson = [];
        this.viewJson = null;
        this.type = null;  // 加载场景type值
        this.valueLength = null;  // 视点动画数组长度
        this.valueTag = null;  // 视点动画名称
        this.progressWidth = 0;  // 进度条宽度
        this.cameraInitPos = null;  // 摄影机初始位置
        this.cycleCount = 0;  // 循环次数计数
        this.tageCount = 0;
        this.timeSumPre = 0;  // 单个视点动画时间总和
        this.progressTimer;  // 进度条计时器
        this.proHiddenTimer = null;  // 进度条显隐计时器
        this.tage = true;
        this.filePath = PreConfig.getFilePath();
    }
    /**
    * 说明：视点动画数据初始化
    */
    viewDataInit(type) {
        var _this = this;
        if (!type) type = 'scene';
        _this.type = type;
        if (_this.type == 'scene') {
            var viewPointList = _this.app.query('[viewDescribe=viewPointAnim]');
            if (viewPointList.length > 0) {
                for (let i = 0; i < viewPointList.length; i++) {
                    let viewPoint = viewPointList[i];
                    let viewPointData = viewPoint.userData['viewPointAnimData'];
                    let viewAniName = viewPoint.userData['viewAnimName'];
                    if (viewPointData && viewAniName) {
                        viewPointData = JSON.parse(viewPointData)
                        _this.viewAniDataJson[viewAniName] = viewPointData;

                    }
                }
            }
            // 将自定义的视点动画数据 添加到初始视点动画数据中
            var viewAniAllDataJson = [];
            if (_this.param != 'undefined' && _this.param != null) {
                for (var i in _this.param) {
                    let viewAniName = i;
                    viewAniAllDataJson[viewAniName] = _this.param[viewAniName].data;
                    _this.viewAniDataJson[viewAniName] = viewAniAllDataJson[viewAniName];
                }
            }
            return _this.viewAniDataJson;
        } else if (_this.type == 'city') {
            if (typeof (CMAP) == 'undefined') return;
            if (_this.map == null) _this.map = CMAP.getCurrentMap();
            let orginUrl = _this.map._originUrl;
            if (!orginUrl) {
                // createHtml();
                _this.createHtmlFun(_this.viewAniDataJson);
                return;
            }
            $.ajax({
                type: 'get',
                url: '/api/getViewAnimation?url=' + orginUrl.split('/').pop(),
                async: false,
                success: function (result) {
                    if (result && result.code == 200) {
                        let resData = result.data;
                        for (let i = 0; i < resData.length; i++) {
                            let tempData = resData[i];
                            let aniName = tempData["name"];
                            let viewData = tempData["config"];
                            viewAniDataJson[aniName] = viewData;
                        }
                    }
                },
                complete: function () {
                    // createHtml();
                    _this.createHtmlFun(_this.viewAniDataJson);
                }
            })
            return _this.viewAniDataJson;
        }
    }

    /**
     * 说明：视点动画
     * @param {Array} data为当前视点动画json数组 
     */
    viewAni(data) {
        var _this = this;
        if (_this.travelIndex >= data.length) {
            _this.travelIndex = 0;
            _this.timeSumPre = 0;
            clearInterval(_this.progressTimer)
            _this.progressTimer = null;
            if (_this.param != 'undefined' && _this.param != null) {
                if (_this.param[_this.valueTag] != null && _this.param[_this.valueTag].hasOwnProperty('cycleTimes')) {
                    _this.cycleCount++;
                    if (_this.cycleCount == _this.param[_this.valueTag].cycleTimes) {
                        $('#playBtn').children("img").attr("src", _this.filePath + 'img/viewAni/play_view.png')
                        $('#playTip').html('播放');
                        _this.tage = false;
                        _this.resetFunc();
                        _this.cycleCount = 0;
                        return;
                    }
                } else {
                    $('#playBtn').children("img").attr("src", _this.filePath + 'img/viewAni/play_view.png');
                    $('#playTip').html('播放');
                    _this.tage = false;
                    return;
                }
            } else if (_this.param == null || _this.param == 'undefined') {
                $('#playBtn').children("img").attr("src", _this.filePath + 'img/viewAni/play_view.png');
                $('#playTip').html('播放');
                _this.tage = false;
                return;
            }
            _this.resetFunc();
        }
        if (typeof (CMAP) == 'undefined') {
            let time = data[_this.travelIndex].time;
            let keep = data[_this.travelIndex].keep;
            let currentData = data[_this.travelIndex].data;
            let lerpType = data[_this.travelIndex].lerpType;
            let callback = data[_this.travelIndex].callback;
            let levelManager = null;
            let orbitCamera = null;
            let position = [];
            let target = [];
            for (let i = 0; i < currentData.length; i++) {
                if (currentData[i].LevelManager) {
                    levelManager = currentData[i].LevelManager;
                }
                if (currentData[i].OrbitCamera) {
                    orbitCamera = currentData[i].OrbitCamera;
                    orbitCamera = orbitCamera.split(',');
                    for (let i = 0; i < orbitCamera.length; i++) {
                        let cameraI = parseFloat(orbitCamera[i]);
                        if (i == 2 || i == 5) {
                            cameraI = -cameraI;
                        }
                        if (i < 3) {
                            position.push(cameraI)
                        } else {
                            target.push(cameraI)
                        }
                    }
                }
                if (currentData[i].position) {
                    position = currentData[i].position;
                }
                if (currentData[i].target) {
                    target = currentData[i].target;
                }
            }
            if (levelManager.curBaseObject == '0') {
                _this.app.level.change(_this.app.root.defaultCampus);

                _this.cameraViewFly(position, target, time * 1000, keep * 1000, data, lerpType, callback);
            } else {
                let levelJump = _this.app.query('#' + levelManager.curBaseObject);
                if (levelJump.length > 0) {
                    _this.app.level.change(levelJump[0]);
                    _this.cameraViewFly(position, target, time * 1000, keep * 1000, data, lerpType, callback);
                } else {
                    console.log('找不到对应物体！')
                }
            }
        } else if (typeof (CMAP) == 'object') {
            let time = data[_this.travelIndex].flyTime;
            let keep = data[_this.travelIndex].waitTime;
            let position = data[_this.travelIndex].position;
            let target = data[_this.travelIndex].target;
            cameraViewFly(position, target, time, keep, data);
        }

    }

    /**
     * 说明：摄影机飞行事件
     * @param {Object,String,Number,Number,Array,String,Function} 
     * positon、target为摄影机视角
     * time、keep为摄影机飞行和停留时间
     * data为当前视点动画的json数组
     * lerptype为摄像机的飞行方式
     * callback为回调函数 
     */
    cameraViewFly(position, target, time, keep, data, lerpType, callback) {
        var _this = this;
        _this.progressEvent(time)
        if (typeof (CMAP) == 'object') {
            lerpType = null;
        }

        // 摄像机飞行到某位置
        _this.app.camera.flyTo({
            'position': position,
            'target': target,
            'time': time,
            'lerpType': lerpType,
            'complete': function () {
                _this.travelIndex++;
                // 判断回调函数是否为null
                if (callback != null) {
                    callback();
                }
                if (_this.travelTimer == null) {
                    if (keep == 0) {
                        _this.viewAni(data);
                    } else {
                        _this.travelTimer = setTimeout(function () {
                            clearTimeout(_this.travelTimer);
                            _this.travelTimer = null;
                            _this.viewAni(data);
                        }, keep);
                    }
                }
            }
        });
    }

    /**
     * 进度条事件 
     */
    progressEvent(time) {
        var _this = this;
        let timePro = parseInt(time / ((1 / _this.valueLength) * 100));
        var numTag = parseInt((_this.travelIndex + 1) * (1 / _this.valueLength) * 100)
        if (_this.travelIndex == 0) {
            _this.progressWidth = 0;
            $('.innerclass').css('width', '0');
        }
        if (timePro < 1) {
            $('.innerclass').css('width', (_this.travelIndex + 1) * (1 / _this.valueLength) * 100 + '%');
            _this.progressWidth = (_this.travelIndex + 1) * (1 / _this.valueLength) * 100;
        } else {
            _this.progressTimer = setInterval(function () {
                if(_this.progressWidth >= 100) return;
                if (_this.progressWidth == numTag) {
                    clearInterval(_this.progressTimer);
                    _this.progressTimer = null;
                    return;
                }
                _this.progressWidth = _this.progressWidth + 1;
                $('.innerclass').css('width', _this.progressWidth + '%');
            }, timePro)
        }
    }

    /**
     * 说明：开始视点动画事件
     * @param {String} value 视点动画的名称 
     */
    startTravel(value) {
        var _this = this;
        _this.valueTag = value;
        _this.valueLength = _this.viewAniDataJson[value].length;
        _this.resetFunc();
        _this.app.pauseEvent(THING.EventType.EnterLevel, '*', THING.EventTag.LevelFly);
        _this.cameraInitPos = [_this.app.camera.position, _this.app.camera.target];
        _this.travelIndex = 0;
        _this.cycleCount = 0;
        _this.timeSumPre = 0;
        _this.viewJson = _this.viewAniDataJson[value];
        $('#autoRotate').removeClass('active');
        if ($('.playpanelin').length > 0) {
            if ($('.play-setting').hasClass('selected')) {
                $('.playpanelin').css('display', 'block');
                _this.proHiddenTimer = setTimeout(function () {
                    $('.playpanelin').css('transition', 'opacity .75s');
                    $('.playpanelin').css('opacity', '0');
                    clearTimeout(_this.proHiddenTimer);
                    _this.proHiddenTimer = null;
                }, 5000);
            } else {
                $('.playpanelin').css('display', 'none');
            }
            $('#viewAniName').html(value);
            $('.innerclass').css('width', '0')
        } else {
            _this.viewAniProgress();
            if ($('.play-setting').hasClass('selected')) {
                $('.playpanelin').css('display', 'block');
                _this.proHiddenTimer = setTimeout(function () {
                    $('.playpanelin').css('transition', 'opacity .75s');
                    $('.playpanelin').css('opacity', '0');
                    clearTimeout(_this.proHiddenTimer);
                    _this.proHiddenTimer = null;
                }, 5000);
            } else {
                $('.playpanelin').css('display', 'none');
            }
            $('#viewAniName').html(value);
            $('.innerclass').css('width', '0')
        }
        _this.viewAni(_this.viewAniDataJson[value]);

    }

    /**
     * 说明：停止视点动画事件 
     */
    stopTravel() {
        var _this = this;
        _this.app.resumeEvent(THING.EventType.EnterLevel, '*', THING.EventTag.LevelFly);
        if (_this.travelTimer != null) {
            clearTimeout(_this.travelTimer);
            clearInterval(_this.progressTimer);
            _this.travelTimer = null;
            _this.progressTimer = null;
            $('#autoRotate').addClass('active')
            _this.travelIndex = 0;
            _this.cycleCount = 0;
            _this.timeSumPre = 0;
            $('.innerclass').css('width', '0')
        } else {
            clearInterval(_this.progressTimer);
            _this.progressTimer = null;
            _this.app.camera.stopFlying();
            if (typeof (CMAP) == 'object') {
                _this.app.camera.stopEarthFly();
            }
        }
    }

    /**
     * 说明：暂停视点动画事件 
     */
    pauseTravel() {
        var _this = this;
        _this.app.resumeEvent(THING.EventType.EnterLevel, '*', THING.EventTag.LevelFly);
        if (_this.travelTimer != null) {
            clearTimeout(_this.travelTimer);
            clearInterval(_this.progressTimer);
            _this.progressTimer = null;
            _this.travelTimer = null;
            _this.travelIndex = _this.travelIndex;
        } else {
            clearInterval(_this.progressTimer);
            _this.progressTimer = null;
            _this.app.camera.stopFlying();
            if (typeof (CMAP) == 'object') {
                _this.app.camera.stopEarthFly();
            }
        }
    }

    /**
     * 说明：恢复视点动画函数 
     */
    resumeTravel() {
        var _this = this;
        _this.app.pauseEvent(THING.EventType.EnterLevel, '*', THING.EventTag.LevelFly);
        var cameraInitPos = [_this.app.camera.position, _this.app.camera.target];
        _this.travelIndex = _this.travelIndex;
        if (_this.travelIndex == 0) {
            var innerObj = $('.innerclass')[0];
            innerObj.style.transition = 'width  0s';
            $('.innerclass').css('width', '0');
            _this.viewAni(_this.viewJson);
        } else {
            _this.viewAni(_this.viewJson);
        }
    }

    /**
     * 说明：清除自定义json数据中回调函数的内容 
     */
    resetFunc() {
        var _this = this;
        // 判断当前自定义json数据中是否含有reset重置函数
        if (_this.param != 'undefined' && _this.param != null) {
            if (_this.param[_this.valueTag] != null) {
                if (_this.param[_this.valueTag].hasOwnProperty("reset")) {
                    var reset = _this.param[_this.valueTag].reset;
                    if (reset != null) {
                        reset();
                    }
                }
            } else {
                for (var i in _this.param) {
                    var reset = _this.param[i].reset;
                    if (reset != null) {
                        reset();
                    }
                }
            }
        }
    }

    /**
     * 说明：视点动画播放进度条
     * 备注：包含创建进度条HTML，以及控制进度条的点击事件 
     */
    viewAniProgress() {
        var _this = this;
        let progressHtml = `
            <div class="playpanelin playpanel" style="display: none; z-index: 2000;">
                <div class="fl" id="viewAniName"></div>
                <div class="fl" style="width: 175px;">
                    <div class="progress">
                        <div class="innerclass" style="">
                            <div class="innerball"></div>
                        </div>
                    </div>
                </div>
                <div class="fl">
                    <div class="buttonmode" id="playBtn" >
                        <span class="tooltiptext" id="playTip">暂停</span>
                        <img src="`+ _this.filePath + `img/viewAni/pause_view.png" >
                    </div>
                    <div class="buttonmode" id="restartBtn" >
                        <span class="tooltiptext" id="restartTip">重置</span>
                        <img src="`+ _this.filePath + `img/viewAni/stop_view.png" >
                    </div>
                    <div class="buttonmode" id="volumeBtn" >
                        <span class="tooltiptext" id="volumeTip">音量</span>
                        <img src="`+ _this.filePath + `img/viewAni/volume_view.png" style="width: 22px">
                    </div>
                    <div class="buttonmode" id="stopBtn" >
                        <span class="tooltiptext" id="stopTip">关闭</span>
                        <img src="`+ _this.filePath + `img/viewAni/close_view.png" >
                    </div>
                </div>
            </div>`;
        $('#div2d').append($(progressHtml));
        _this.pro_registerEvent();
    }

    /**
     * 视点动画节点进度条注册事件
     */
    pro_registerEvent() {
        var _this = this;
        // 播放/暂停按钮点击事件
        $('#playBtn').on('click', function () {
            if ($('#playBtn').children("img").attr("src") == _this.filePath + 'img/viewAni/play_view.png') {
                _this.resumeTravel();
                $('#playBtn').children("img").attr("src", _this.filePath + 'img/viewAni/pause_view.png')
            } else if ($('#playBtn').children("img").attr("src") == _this.filePath + 'img/viewAni/pause_view.png') {
                _this.pauseTravel();
                $('#playBtn').children("img").attr("src", _this.filePath + 'img/viewAni/play_view.png')
            }
        }).hover(function () {
            $(this).find('.tooltiptext').css({ "visibility": "visible" });
        }, function () {
            $(this).find('.tooltiptext').css({ "visibility": "hidden" });
        });

        // 关闭视点动画按钮点击事件
        $('#stopBtn').on('click', function () {
            _this.stopTravel();
            _this.resetFunc();
            clearInterval(_this.progressTimer);
            _this.progressTimer = null;
            $('.playpanelin').css('display', 'none')
            // 移除当前的selected类
            if ($('#viewAni .control-menu-pane li').hasClass('selected')) {
                $('#viewAni .control-menu-pane li').removeClass('selected');
                $('#setting-select .setting-value .setting-value-content').text('无');
            }
            if (typeof (CMAP) == 'undefined') {
                // 回到默认层级
                _this.app.level.change(_this.app.root.defaultCampus);
            }
            // 返回初始视角
            _this.app.camera.flyTo({
                'position': _this.cameraInitPos[0],
                'target': _this.cameraInitPos[1],
                'time': 2000
            })
        }).hover(function () {
            $(this).find('.tooltiptext').css({ "visibility": "visible" });
        }, function () {
            $(this).find('.tooltiptext').css({ "visibility": "hidden" });
        });

        // 重置视点动画按钮点击事件
        $('#restartBtn').on('click', function () {
            _this.stopTravel();
            _this.resetFunc();
            clearInterval(_this.progressTimer);
            _this.tage = false;
            _this.travelIndex = 0;
            _this.cycleCount = 0;
            _this.timeSumPre = 0;
            _this.progressWidth = 0;
            _this.progressTimer = null;
            $('#playBtn').children("img").attr("src", _this.filePath + 'img/viewAni/play_view.png')
            var innerObj = $('.innerclass')[0];
            innerObj.style.transition = 'width  0s';
            $('.innerclass').css('width', '0')
            if (typeof (CMAP) == 'undefined') {
                // 回到默认层级
                _this.app.level.change(_this.app.root.defaultCampus);
            }
            // 返回初始视角
            _this.app.camera.flyTo({
                'position': _this.cameraInitPos[0],
                'target': _this.cameraInitPos[1],
                'time': 2000
            })
        })

        var my_mute = false;
        // 音量按钮点击事件
        $('#volumeBtn').on('click', function () {
            if ($('audio,video').length == 0) {
                if (!my_mute) {
                    $('#volumeBtn').children('img').attr('src', _this.filePath + 'img/viewAni/mute_view.png')
                } else {
                    $('#volumeBtn').children('img').attr('src', _this.filePath + 'img/viewAni/volume_view.png')
                }
            } else {
                $('audio,video').each(function () {
                    if (!my_mute) {
                        if (!$(this).paused) {
                            $(this).data('muted', true);
                            $(this).pause();
                            $('#volumeBtn').children('img').attr('src', _this.filePath + 'img/viewAni/mute_view.png')
                        }
                    } else {
                        if ($(this).data('muted')) {
                            $(this).data('muted', false);
                            $(this).play();
                            $('#volumeBtn').children('img').attr('src', _this.filePath + 'img/viewAni/volume_view.png')
                        }
                    }
                });
            }
            my_mute = !my_mute;
        });

        // 鼠标滑入窗口进度条显隐事件
        $('.playpanelin').hover(function () {
            if ($('.play-setting').hasClass('selected')) {
                $('.playpanelin').css('opacity', '1');
                if (_this.proHiddenTimer != null) {
                    clearTimeout(_this.proHiddenTimer);
                    _this.proHiddenTimer = null;
                }
                if (_this.proHiddenTimer == null) {
                    _this.proHiddenTimer = setTimeout(function () {
                        $('.playpanelin').css('transition', 'opacity .75s');
                        $('.playpanelin').css('opacity', '0');
                        clearTimeout(_this.proHiddenTimer);
                        _this.proHiddenTimer = null;
                    }, 5000);
                }
            }
        })
    }
}


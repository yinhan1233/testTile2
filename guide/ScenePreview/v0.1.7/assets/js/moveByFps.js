class MoveByFps {
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
        this.box = null;  // 鼠标点击第一人称行走按钮时，红色盒子提示
        this.fpsCtrl = null;  // 第一人称行走控件
        this.walkSpeed = 0.02;
        this.flySpeed = 0.05;
        this.fpsPlane = null;
        this.shiftState = false;
        this.altState = false;
        this.wheelState = false;
        this.gravityState = true;

        this.up = false;
        this.down = false;
        this.speedUp = false;
        this.speedDown = false;
        this.floor = null;
        this.floorPosJson = {};
        this.app.query('.Floor').forEach(f => {
            this.floorPosJson[f.id] = f.position;
        })
        this.ratio = 900;
        this.showwalkSpeedVal = this.walkSpeed * this.ratio;
        this.showflySpeedVal = this.flySpeed * this.ratio;
    }
    /**
     * 说明：第一人称行走
     */
    enterFps(pos, height, obj) {
        var _this = this;
        _this.floor = obj;
        if (_this.fpsCtrl == null) {
            _this.app.pauseEvent(THING.EventType.Pick, '*', THING.EventTag.LevelPickOperation);
            _this.app.pauseEvent(THING.EventType.KeyUp, null, '空格键切换视角');
            _this.app.pauseEvent(THING.EventType.KeyDown, null, '纵向按下Shift键');
            _this.app.pauseEvent(THING.EventType.KeyDown, null, '横向按下shift键');
            if ($('#moveByFps li.fp-flying').hasClass('selected')) {
                _this.gravityState = false;
                // 添加第一人称行走控件
                _this.fpsCtrl = _this.app.addControl(
                    new THING.WalkControl({  // 参数可以动态修改
                        walkSpeed: _this.flySpeed,  // 行走速度
                        turnSpeed: 0.25,  // 右键旋转速度
                        gravity: 26,  // 物体重量
                        eyeHeight: 1.8,  // 人高度
                        jumpSpeed: 5,  // 按空格键 跳跃的速度
                        enableKeyRotate: false,  // 默认不开启键盘控制旋转
                        useCollision: true,  // 默认不开启碰撞检测
                        useGravity: _this.gravityState,  // 默认开启重力
                        groundObjects: _this.app.query('PlaneFps'),
                        collisionObjects: _this.app.query('PlaneFps')
                    })
                );
                if (_this.fpsCtrl._controls.object.position.y > 250) {
                    _this.fpsCtrl._controls.object.position.y = 250;
                }
                if (_this.fpsCtrl._controls.object.position.y < 30) {
                    setTimeout(function () {
                        _this.fpsCtrl._controls.object.position.y = 30;
                        $('#viewHeight .heightInput').val(_this.fpsCtrl._controls.object.position.y.toFixed(1));
                    }, 15)
                }
                if (height) {
                    if (parseFloat(height) < -10) {
                        _this.fpsCtrl._controls.object.position.y = -10;
                    } else if (parseFloat(height) > 250) {
                        _this.fpsCtrl._controls.object.position.y = 250;
                    } else {
                        _this.fpsCtrl._controls.object.position.y = parseFloat(height);
                    }
                }
                $('#viewHeight .heightInput').val(_this.fpsCtrl._controls.object.position.y.toFixed(1));
                $('#viewHeight .speedInput').val(_this.showflySpeedVal.toFixed(1));
                $('#viewHeight .moveSpeed-title').text('飞行速度：');
                $('#viewHeight').css('display', 'block');
                if ($('.pre-countdown').css('display') == 'block') {
                    $('#viewHeight').css('top', '50px');
                }
            } else if ($('#moveByFps li.fp-moving').hasClass('selected')) {
                _this.gravityState = true;
                let walkControlJson = {  // 参数可以动态修改
                    walkSpeed: _this.walkSpeed,  // 行走速度
                    turnSpeed: 0.25,  // 右键旋转速度
                    gravity: 26,  // 物体重量
                    eyeHeight: 1.6,  // 人高度
                    jumpSpeed: 5,  // 按空格键 跳跃的速度
                    enableKeyRotate: false,  // 默认不开启键盘控制旋转
                    useCollision: true,  // 默认不开启碰撞检测
                    useGravity: _this.gravityState
                }
                let currentLevel = _this.app.level.current;
                if (currentLevel.type == 'Floor') {
                    let curLevelCenter = currentLevel.boundingBox.center;
                    _this.fpsPlane = _this.app.create({
                        type: 'Plane',
                        name: 'PlaneFps',
                        width: currentLevel.size[0],
                        height: currentLevel.size[2],
                        position: [curLevelCenter[0], currentLevel.position[1], curLevelCenter[2]]
                    });
                    _this.fpsPlane.rotateX(-90);
                    _this.fpsPlane.style.opacity = 0;
                    let walkControl = _this.app.query('PlaneFps').add(currentLevel)
                    walkControlJson.groundObjects = walkControl;
                    let collObjsArr = _this.app.query('PlaneFps').add(currentLevel.wall);
                    walkControlJson.collisionObjects = collObjsArr;
                } else if (currentLevel.type == 'Building') {
                    walkControlJson.useCollision = true;
                    walkControlJson.groundObjects = [_this.app.scene.children[0]];
                    let collObjsArr = _this.app.query('PlaneFps');
                    for (let i = 0; i < currentLevel.floors.length; i++) {
                        collObjsArr.add(currentLevel.floors[i].wall)
                    }
                    _this.app.query('.Door').forEach(door => {
                        collObjsArr.add(door)
                    })
                    walkControlJson.collisionObjects = collObjsArr;
                } else if (currentLevel.type == 'Campus') {
                    let curLevelCenter = currentLevel.boundingBox.center;
                    _this.fpsPlane = _this.app.create({
                        type: 'Plane',
                        name: 'PlaneFps',
                        width: currentLevel.size[0],
                        height: currentLevel.size[2],
                        position: [curLevelCenter[0], currentLevel.position[1], curLevelCenter[2]]
                    });
                    _this.fpsPlane.rotateX(-90)
                    _this.fpsPlane.style.opacity = 0;
                    let groundObjsArr = _this.app.query('PlaneFps');
                    let colsBuildings = _this.app.query('.Building');
                    let collObjsArr = _this.app.query('PlaneFps');
                    for (let i = 0; i < colsBuildings.length; i++) {
                        let colsBuilding = colsBuildings[i];
                        if (colsBuilding.facade != null) {
                            collObjsArr.add(colsBuilding.facade)
                            groundObjsArr.add(colsBuilding.facade)
                        } else {
                            let colsFloors = colsBuilding.floors;
                            for (let j = 0; j < colsFloors.length; j++) {
                                let colsFloor = colsFloors[j];
                                collObjsArr.add(colsFloor.wall);
                                groundObjsArr.add(colsFloor.roof);
                            }
                        }
                    }
                    groundObjsArr.add(currentLevel.ground.wallObject)
                    walkControlJson.groundObjects = groundObjsArr;
                    walkControlJson.collisionObjects = collObjsArr;
                }
                _this.fpsCtrl = _this.app.addControl(
                    new THING.WalkControl(walkControlJson)
                );
                if (height) {
                    if (parseFloat(height) < 0.3) {
                        _this.fpsCtrl.eyeHeight = 0.3;
                    } else if (parseFloat(height) > 2.5) {
                        _this.fpsCtrl.eyeHeight = 2.5;
                    } else {
                        _this.fpsCtrl.eyeHeight = parseFloat(height);
                    }
                }
                $('#viewHeight .heightInput').val(_this.fpsCtrl.eyeHeight.toFixed(1));
                $('#viewHeight .speedInput').val(parseFloat(_this.showwalkSpeedVal).toFixed(1));

                $('#viewHeight .moveSpeed-title').text('行走速度：');

                $('#viewHeight').css('display', 'block');
                if ($('.pre-countdown').css('display') == 'block') {
                    $('#viewHeight').css('top', '50px');
                }
            }
            if (_this.app.level.current.type == 'Building') {
                if ($('#verticalExpansion').hasClass('active')) {
                    $('#verticalExpansion').trigger('click');
                }
                $('#expandFloorInfoTips').css('display', 'none');
                infoTipsClass.hiddenInfoTips('expandFloorInfoTips');

                if (_this.floor != null) {
                    _this.app.level.change(_this.floor, { jumping: true });
                    _this.app.camera.position = [pos[0], _this.floorPosJson[_this.floor.id][1], pos[2]];  // 起始位置为鼠标点击时的位置
                } else {
                    let levelCurrent = _this.app.level.current;
                    for (let i = 0; i < levelCurrent.floors.length; i++) {
                        let floor = levelCurrent.floors;

                        let posY = pos[1] - floor[i].position[1];
                        if (posY <= 0) {
                            _this.app.camera.position = [pos[0], _this.floorPosJson[floor[i - 1].id][1] + 2, pos[2]];
                            _this.floor = floor[i - 1];
                            _this.floor.style.outlineColor = null;
                            break;
                        } else {
                            if (i == levelCurrent.floors.length - 1) {
                                _this.app.camera.position = [pos[0], _this.floorPosJson[floor[i].id][1] + 2, pos[2]];
                                _this.floor = floor[i];
                                _this.floor.style.outlineColor = null;
                            }
                        }
                    }
                }
                _this.app.query('["userData/Stairwell"=true]').forEach(room => {
                    room.roof.visible = false;
                })
                _this.app.picker.pickedResultFunc = function (obj) {
                    if (obj.type == 'Door' || obj.type == 'StairDoor' || obj.type == 'Floor') {
                        return obj;
                    }
                }
                _this.app.query('.Door').forEach(door => {
                    door.pickable = true
                })
                _this.app.query('.StairDoor').forEach(stairDoor => {
                    stairDoor.pickable = true
                })
                _this.app.query('.Floor').forEach(floor => {
                    floor.pickable = true
                })
            } else {
                _this.app.camera.position = pos;  // 起始位置为鼠标点击时的位置
            }

            _this.app.on(THING.EventType.Click, '.Door', function (ev) {
                let openState = ev.object.getAttribute('openState');
                if (openState == null) {
                    ev.object.setAttribute('openState', false);
                }
                openState = ev.object.getAttribute('openState');
                let animations = ev.object.animationNames;
                if (openState) {
                    ev.object.setAttribute("openState", false);
                    ev.object.playAnimation(animations[1])
                } else {
                    ev.object.playAnimation(animations[0])
                    ev.object.setAttribute("openState", true);
                }
            }, '门动画');
            _this.app.on(THING.EventType.MouseWheel, function (ev) {
                // 视角高度
                if (ev.delta < 0 && _this.shiftState) {
                    _this.down = false;
                    _this.up = true;
                } else if (ev.delta > 0 && _this.shiftState) {
                    _this.up = false;
                    _this.down = true;
                } else {
                    _this.up = false;
                    _this.down = false;
                }
                // 移动速度
                if (ev.delta < 0 && _this.altState) {
                    _this.speedUp = true;
                    _this.speedDown = false;
                } else if (ev.delta > 0 && _this.altState) {
                    _this.speedUp = false;
                    _this.speedDown = true;
                } else {
                    _this.speedUp = false;
                    _this.speedDown = false;
                }
            }, 'mouseWheelEvent');

            // 注册键盘按键按着事件
            _this.app.on(THING.EventType.KeyDown, function (ev) {
                if (ev.shiftKey) {
                    _this.shiftState = true;
                    _this.up = false;
                    _this.down = false;
                }
                if (ev.code === 'AltLeft' || ev.code == "AltRight") {
                    _this.altState = true;
                    _this.speedUp = false;
                    _this.speedDown = false;
                }
                if (ev.code === 'KeyW' && !_this.up && !_this.down) {
                    if (_this.gravityState) {
                        _this.fpsCtrl.walkSpeed = _this.walkSpeed;
                    } else {
                        _this.fpsCtrl.walkSpeed = _this.flySpeed;
                    }
                }
                if (ev.code === 'KeyS' && !_this.up && !_this.down) {
                    if (_this.gravityState) {
                        _this.fpsCtrl.walkSpeed = _this.walkSpeed;
                    } else {
                        _this.fpsCtrl.walkSpeed = _this.flySpeed;
                    }
                }
                if (ev.code === 'KeyA' && !_this.up && !_this.down) {
                    if (_this.gravityState) {
                        _this.fpsCtrl.walkSpeed = _this.walkSpeed;
                    } else {
                        _this.fpsCtrl.walkSpeed = _this.flySpeed;
                    }
                }
                if (ev.code === 'KeyD' && !_this.up && !_this.down) {
                    if (_this.gravityState) {
                        _this.fpsCtrl.walkSpeed = _this.walkSpeed;
                    } else {
                        _this.fpsCtrl.walkSpeed = _this.flySpeed;
                    }
                }
            }, 'shiftPressEvent');

            // 注册键盘按键抬起事件
            _this.app.on(THING.EventType.KeyUp, function (ev) {
                if (ev.code == "ShiftLeft" || ev.code == "ShiftRight") {
                    _this.shiftState = false;
                    _this.up = false;
                    _this.down = false;
                }
                if (ev.code === 'AltLeft' || ev.code == "AltRight") {
                    _this.altState = false;
                    _this.speedUp = false;
                    _this.speedDown = false;
                }
            }, 'shiftUpEvent');

            // 注册每帧刷新事件，用于第一人称抬高或抬低
            _this.app.on('update', function () {
                if (_this.up) {
                    _this.fpsCtrl.walkSpeed = 0;
                    if (!$('#viewHeight').hasClass('up')) {
                        $('#viewHeight').removeClass('down')
                        $('#viewHeight').addClass('up')
                    }
                    if (_this.gravityState) {
                        if (_this.fpsCtrl.eyeHeight > 2.5) return;
                        _this.fpsCtrl.eyeHeight += 0.001 * _this.app.deltaTime;
                        $('#viewHeight .heightInput').val(_this.fpsCtrl.eyeHeight.toFixed(1));
                    } else {
                        if (_this.fpsCtrl._controls.object.position.y > 250) return;
                        _this.fpsCtrl._controls.object.position.y += 0.04 * _this.app.deltaTime;
                        $('#viewHeight .heightInput').val(_this.fpsCtrl._controls.object.position.y.toFixed(1));
                    }
                    _this.up = false;
                }
                if (_this.down) {
                    _this.fpsCtrl.walkSpeed = 0;
                    if (!$('#viewHeight').hasClass('down')) {
                        $('#viewHeight').removeClass('up')
                        $('#viewHeight').addClass('down')
                    }
                    if (_this.gravityState) {
                        if (_this.fpsCtrl.eyeHeight < 0.3) return;
                        _this.fpsCtrl.eyeHeight -= 0.001 * _this.app.deltaTime;
                        $('#viewHeight .heightInput').val(_this.fpsCtrl.eyeHeight.toFixed(1));
                    } else {
                        if (_this.fpsCtrl._controls.object.position.y < -10) return;
                        _this.fpsCtrl._controls.object.position.y -= 0.04 * _this.app.deltaTime;
                        $('#viewHeight .heightInput').val(_this.fpsCtrl._controls.object.position.y.toFixed(1));
                    }
                    _this.down = false;
                }
            }, 'fpsEvent');

            // 输入框限制输入只能输入数字，一个小数点
            $('#viewHeight .heightInput').on('input', function () {
                let setHeightVal = preUtil.checkInputNegativeNumberAndDot($(this).val());
                $(this).val(setHeightVal);
            })
            $('#viewHeight .speedInput').on('input', function () {
                let setSpeedVal = preUtil.checkInputNegativeNumberAndDot($(this).val());
                $(this).val(setSpeedVal);
            })

            // 输入框输入视角高度，按下回车进行赋值
            $('#viewHeight .heightInput').on('keydown', function (ev) {
                if (ev.keyCode == 13) {
                    var height = $('#viewHeight .heightInput').val();
                    if (height == '') {
                        if (_this.gravityState) {
                            height = _this.fpsCtrl.eyeHeight;
                        } else {
                            height = _this.fpsCtrl._controls.object.position.y;
                        }
                    }
                    height = parseFloat(height).toFixed(1);
                    if (_this.gravityState) {
                        if (height < 0.3) {
                            height = 0.3;
                        } else if (height > 2.5) {
                            height = 2.5;
                        }
                        _this.fpsCtrl.eyeHeight = parseFloat(height);
                        $('#viewHeight .heightInput').val(_this.fpsCtrl.eyeHeight.toFixed(1));
                    } else {
                        if (height < -10) {
                            height = -10;
                        } else if (height > 250) {
                            height = 250;
                        }
                        _this.fpsCtrl._controls.object.position.y = parseFloat(height);
                        $('#viewHeight .heightInput').val(_this.fpsCtrl._controls.object.position.y.toFixed(1));
                    }
                    $(this).blur();
                }
            })

            // 输入框输入运行速度，按下回车进行赋值
            $('#viewHeight .speedInput').on('keydown', function (ev) {
                if (ev.keyCode == 13) {
                    var speed = $('#viewHeight .speedInput').val();
                    if (speed == '') {
                        if (_this.gravityState) {
                            speed = _this.showwalkSpeedVal;
                        } else {
                            speed = _this.showflySpeedVal;
                        }
                    }
                    speed = parseFloat(speed).toFixed(1);
                    if (_this.gravityState) {
                        if (speed < 0.1) {
                            speed = 0.1;
                        } else if (speed > 431) {
                            speed = 431.0
                        }
                        _this.showwalkSpeedVal = parseFloat(speed);
                        _this.walkSpeed = _this.showwalkSpeedVal / _this.ratio;
                        _this.fpsCtrl.walkSpeed = _this.walkSpeed;
                    } else {
                        if (speed < 8) {
                            speed = 8;
                        } else if (speed > 3430.2) {
                            speed = 3430.2
                        }
                        _this.showflySpeedVal = parseFloat(speed);
                        _this.flySpeed = _this.showflySpeedVal / _this.ratio;
                        _this.fpsCtrl.walkSpeed = _this.flySpeed;
                    }
                    $('#viewHeight .speedInput').val(speed);
                    $(this).blur();
                }
            })
            $('#viewHeight .speedInput').on('click', function () {
                $(this).select();
            })
            $('#viewHeight .heightInput').on('click', function () {
                $(this).select();
            })
            // 输入框输入视角高度，鼠标失去焦点进行赋值
            $('#viewHeight .heightInput').on('blur', function () {
                var height = $('#viewHeight .heightInput').val();
                if (height == '') {
                    if (_this.gravityState) {
                        height = _this.fpsCtrl.eyeHeight;
                    } else {
                        height = _this.fpsCtrl._controls.object.position.y;
                    }
                }
                height = parseFloat(height).toFixed(1);
                if (_this.gravityState) {
                    if (height < 0.3) {
                        height = 0.3;
                    } else if (height > 2.5) {
                        height = 2.5;
                    }
                    _this.fpsCtrl.eyeHeight = parseFloat(height);
                    $('#viewHeight .heightInput').val(_this.fpsCtrl.eyeHeight.toFixed(1));
                } else {
                    if (height < -10) {
                        height = -10;
                    } else if (height > 250) {
                        height = 250;
                    }
                    _this.fpsCtrl._controls.object.position.y = parseFloat(height);
                    $('#viewHeight .heightInput').val(_this.fpsCtrl._controls.object.position.y.toFixed(1));
                }
            })
            // 输入框输入运行速度，鼠标失去焦点进行赋值
            $('#viewHeight .speedInput').on('blur', function () {
                var valueIn = $('#viewHeight .speedInput').val();
                if (valueIn == '') {
                    if (_this.gravityState) {
                        valueIn = _this.showwalkSpeedVal;
                    } else {
                        valueIn = _this.showflySpeedVal;
                    }
                }
                valueIn = parseFloat(valueIn).toFixed(1);
                if (_this.gravityState) {
                    if (valueIn < 0.1) {
                        valueIn = 0.1;
                    } else if (valueIn > 431) {
                        valueIn = 431.0;
                    }
                    _this.showwalkSpeedVal = parseFloat(valueIn);
                    _this.walkSpeed = _this.showwalkSpeedVal / _this.ratio;
                    _this.fpsCtrl.walkSpeed = _this.walkSpeed;
                } else {
                    if (valueIn < 8) {
                        valueIn = 8;
                    } else if (valueIn > 3430.2) {
                        valueIn = 3430.2
                    }
                    _this.showflySpeedVal = parseFloat(valueIn);
                    _this.flySpeed = _this.showflySpeedVal / _this.ratio;
                    _this.fpsCtrl.walkSpeed = _this.flySpeed;
                }
                $('#viewHeight .speedInput').val(valueIn);
            })

            // 按下alt+鼠标滚轮，修改第一人称飞行速度
            _this.app.on(THING.EventType.MouseWheel, function (ev) {
                if (_this.speedUp) {
                    if (_this.gravityState) {
                        _this.showwalkSpeedVal += 1;
                        if (_this.showwalkSpeedVal >= 431) {
                            _this.showwalkSpeedVal = 431;
                        }
                        _this.walkSpeed = _this.showwalkSpeedVal / _this.ratio;
                        _this.fpsCtrl.walkSpeed = _this.walkSpeed;
                        $('#viewHeight .speedInput').val(_this.showwalkSpeedVal.toFixed(1));

                    } else {
                        _this.showflySpeedVal += 1;
                        if (_this.showflySpeedVal >= 3430.2) {
                            _this.showflySpeedVal = 3430.2;
                        }
                        _this.flySpeed = _this.showflySpeedVal / _this.ratio;
                        _this.fpsCtrl.walkSpeed = _this.flySpeed;
                        $('#viewHeight .speedInput').val(_this.showflySpeedVal.toFixed(1));
                    }
                }
                if (_this.speedDown) {
                    if (_this.gravityState) {
                        if (_this.showwalkSpeedVal > 0.1) {
                            _this.showwalkSpeedVal -= 1;
                            if (_this.showwalkSpeedVal <= 0.1) {
                                _this.showwalkSpeedVal = 0.1;
                            }
                        }
                        _this.walkSpeed = _this.showwalkSpeedVal / _this.ratio;
                        _this.fpsCtrl.walkSpeed = _this.walkSpeed;
                        $('#viewHeight .speedInput').val(_this.showwalkSpeedVal.toFixed(1));
                    } else {
                        if (_this.showflySpeedVal > 8) {
                            _this.showflySpeedVal -= 1;
                            if (_this.showflySpeedVal <= 8) {
                                _this.showflySpeedVal = 8;
                            }
                        }
                        _this.flySpeed = _this.showflySpeedVal / _this.ratio;
                        _this.fpsCtrl.walkSpeed = _this.flySpeed;
                        $('#viewHeight .speedInput').val(_this.showflySpeedVal.toFixed(1));
                    }
                }
            }, '滚轮改变移动速度');

            let moveByFpsInfoTipsJson = {
                id: 'moveByFpsInfoTips',
                type: 'tip',
                text: '按住【Alt+鼠标滚轮】可以调节移动速度。通过键盘W/A/S/D控制行走，空格控制跳起。',
                keepTime: '5000',
                isRemove: false
            }
            if ($('.infoContainer').hasClass('resetTips')) {
                $('.infoContainer').removeClass('resetTips')
            }
            $('.infoContainer').addClass('infoTipsByMbf');
            infoTipsClass.createInfoTips(moveByFpsInfoTipsJson);
        }
    }

    /**
     * 说明：退出第一人称行走
     */
    exitFps() {
        var _this = this;
        _this.app.level.options.outlineColor = '16744448';
        _this.app.removeControl(_this.fpsCtrl);
        _this.fpsCtrl = null;
        _this.app.resumeEvent(THING.EventType.DBLClick, '*', THING.EventTag.LevelEnterOperation);
        _this.app.resumeEvent(THING.EventType.Click, '*', THING.EventTag.LevelBackOperation);
        _this.app.resumeEvent(THING.EventType.Pick, '*', THING.EventTag.LevelPickOperation);
        _this.app.resumeEvent(THING.EventType.KeyUp, null, '空格键切换视角');
        _this.app.resumeEvent(THING.EventType.KeyDown, null, '纵向按下Shift键');
        _this.app.resumeEvent(THING.EventType.KeyDown, null, '横向按下shift键');
        _this.app.off(THING.EventType.KeyDown, null, 'shiftPressEvent');
        _this.app.off(THING.EventType.KeyUp, null, 'shiftUpEvent');
        _this.app.off(THING.EventType.MouseWheel, null, 'mouseWheelEvent');
        _this.app.off(THING.EventType.MouseWheel, null, '滚轮改变移动速度');
        _this.app.off(THING.EventType.Click, '.Door', '门动画');
        _this.app.off('update', null, 'fpsEvent');
        _this.app.query('.Door').forEach(function (door) {
            let openState = door.getAttribute('openState');
            if (openState == true) {
                let animations = door.animationNames
                if (animations.length >= 2) {
                    door.playAnimation(animations[1])
                    door.setAttribute("openState", false);
                }
            }
        });
        $('#viewHeight').css('display', 'none');
        $('#viewHeight').removeClass('down')
        $('#viewHeight').removeClass('up')
        $('#moveByFps li.selected').removeClass('selected');
        $('#moveByFps li.fp-moving').addClass('selected');
        if (_this.fpsPlane != null) {
            _this.fpsPlane.destroy();
            _this.fpsPlane = null;
        }

        infoTipsClass.hiddenInfoTips('moveByFpsInfoTips');
    }

    /**
     * 说明：创建小人
     */
    createBox() {
        var _this = this;
        _this.app.level.options.outlineColor = null;
        if (_this.box == null) {
            _this.box = _this.app.create({
                type: 'Thing',
                url: 'https://model.3dmomoda.com/models/9CD08ED91F5C4E0ABB6B0833C86F2942/0/gltf/',
                position: [0, 0, 0],
                angle: 180,
                scale: [1.7, 1.7, 1.7],
                style: {
                    color: '#FF0000'
                }
            })
        }
        _this.app.on(THING.EventType.Click, function (ev) {
            if (ev.button == 2) {
                _this.app.resumeEvent(THING.EventType.DBLClick, '*', THING.EventTag.LevelEnterOperation);
                _this.app.resumeEvent(THING.EventType.Click, '*', THING.EventTag.LevelBackOperation);
                _this.destroyBox();
            }
        }, '右键取消盒子');
    }

    /**
     * 说明：取消盒子
     */
    destroyBox() {
        var _this = this;
        if (peopleSettingClass != null) {
            _this.app.level.options.outlineColor = peopleSettingClass.initColor;
        }else{
            _this.app.level.options.outlineColor = '16744448';
        }
        if (_this.box != null) {
            _this.box.destroy();
            _this.box = null;
            _this.app.off(THING.EventType.Click, null, '右键取消盒子');
        }
    }
}
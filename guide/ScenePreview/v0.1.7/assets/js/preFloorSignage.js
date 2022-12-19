class PreFloorSignage {
    constructor() {
        this.init();
    }
    init() {
        this.version = 'v0.1.4';
        this.app = THING.App.current;
        this.userDateKey = 'marker-floor-signage';
        this.height = 3.4;
        this.building = building;
        this.firstFloorSize = null;
        this.firstFloorPos = null;

        this.adminPermissions = PreConfig.getPermission();
        this.isAuthor = PreConfig.getSceneAuthor();
        this.pathname = window.location.pathname;
        this.prelink = this.pathname.split('/').pop();
        this.reqDatas = {
            preLink: this.prelink
        }
        this.initSelectEvent();

    }
    /**
    * 权限校验
    */
    initSelectEvent() {
        if (this.adminPermissions != true || this.isAuthor != true) return;
        var _this = this;
        _this.create();
        _this.hidden();
    }
    create() {
        var _this = this;
        _this.app.on(THING.EventType.EnterLevel, '.Building', function (ev) {
            _this.initFloorEvent(ev.object);
        }, 'enterBuildingCreateMarker')
        this.mouseEnterMarker();

    }
    show() {
        var _this = this;

    }
    hidden() {
        var _this = this;
        this.rightBackToCampusEvent();
    }
    destroy() {
        var _this = this;
    }

    /**
     * 初始化进入楼层事件
     * 备注：暂不识别地下楼层索引
     */
    initFloorEvent(building) {
        var _this = this;
        // _this.app.on(THING.EventType.EnterLevel, '.Building', function (ev) {

        // }, 'enterBuildingCreateMarker')
        // _this.mouseEnterMarker();



        // let building = ev.object;
        let floorArr = building.floors;
        if (floorArr.length > 0) {
            let count = 0;
            floorArr.forEach(v => {
                let floorObj = v;
                let hasMarker = floorObj.userData[_this.userDateKey];
                if (hasMarker != null) {
                    hasMarker.visible = true;
                    hasMarker.scale = [_this.height, _this.height, _this.height];
                    return;
                }
                floorObj.userData['floorOfIndex'] = ++count;
                if (count == 1) {
                    _this.firstFloorSize = floorObj.orientedBoundingBox.size;
                    _this.firstFloorPos = floorObj.position;
                }
                _this.createMarker(floorObj, floorObj.userData['floorOfIndex'], count)
            })
        }
    }
    /**
     * 创建marker顶牌事件
     * @param {Object} object 
     * @param {number} floorOfIndex 
     */
    createMarker(object, floorOfIndex, count) {
        var _this = this;
        if (object.selfForward[0] >= 0) {
            var posX = _this.firstFloorPos[0] + _this.firstFloorSize[0] * 0.5 + 5;
        } else if (object.selfForward[0] <= 0) {
            var posX = _this.firstFloorPos[0] - _this.firstFloorSize[0] * 0.5 - 5;
        }
        var posZ = _this.firstFloorPos[2];
        let marker = this.app.create({
            type: "Marker",
            id: "floorSignage" + count,
            // offset: [_this.firstFloorSize[0] * 0.65, object.size[1] * -0.8, _this.firstFloorSize[2] * -0.65],
            position: [posX, object.position[1] + 0.64 * 1.2 + 0.5, posZ],
            canvas: _this.createFloorSignageCanvas(floorOfIndex),
            parent: object,
            scale: [_this.height, _this.height, _this.height],
            inheritVisible: true
        });
        marker.on(THING.EventType.MouseEnter, function (ev) {
            var parentFloor = ev.object.parent;
            parentFloor.style.outlineColor = '#FF8000';
            ev.object.scale = [4.4, 4.4, 4.4];
        }, 'mouseEnterOfMarker').on(THING.EventType.MouseLeave, function (ev) {
            var parentFloor = ev.object.parent;
            ev.object.scale = [_this.height, _this.height, _this.height];
            parentFloor.style.outlineColor = null;
        }, 'mouseLeaveOfMarker').on(THING.EventType.DBLClick, function (ev) {
            let markerClickObj = ev.object;
            let markerParentFloor = markerClickObj.parent;
            _this.app.level.change(markerParentFloor);
        }, 'markerdblclick');
        object.userData[_this.userDateKey] = marker;
    }
    /**
     * 绘制canvas
     * @param {String} text 
     * @returns 
     */
    createFloorSignageCanvas(text) {
        var _this = this;
        let canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;

        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgba(250, 100, 0, 0.3)";
        ctx.beginPath();
        ctx.arc(32, 32, 32, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(250, 100, 0,0.9)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(32, 32, 30, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.font = "32px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(text, 32, 42);
        return canvas;
    }
    /**
     * 鼠标滑上或滑出Marker事件
     * 鼠标滑上或滑出楼层事件
     */
    mouseEnterMarker() {
        var _this = this;
        _this.app.on(THING.EventType.MouseEnter, '.Floor', function (ev) {
            var floorCurrentObj = ev.object;
            floorCurrentObj.style.outlineColor = '#FF8000';
            if (floorCurrentObj.userData[_this.userDateKey] != null) {
                floorCurrentObj.userData[_this.userDateKey].scale = [3.4, 3.4, 3.4];
            }
        }, 'mouseEnterOfFloor')
        _this.app.on(THING.EventType.MouseLeave, '.Floor', function (ev) {
            var floorCurrentObj = ev.object;
            floorCurrentObj.style.outlineColor = null;
            if (floorCurrentObj.userData[_this.userDateKey] != null) {
                floorCurrentObj.userData[_this.userDateKey].scale = [_this.height, _this.height, _this.height];
            }
        }, 'mouseLeaveOfFloor')
    }

    /**
     * 右键回退到园区事件
     */
    rightBackToCampusEvent() {
        var _this = this;
        _this.app.on(THING.EventType.SingleClick, function (ev) {
            if (ev.button == 2 && _this.app.level.current.type == 'Campus') {
                var markerArr = _this.app.query(/floorSignage/);
                if (markerArr.length > 0) {
                    for (let i = 0; i < markerArr.length; i++) {
                        let count = i + 1;
                        if (_this.app.query('#floorSignage' + count).length > 0) {
                            _this.app.query('#floorSignage' + count)[0].visible = false;
                        }

                    }
                }
            }
        }, 'rightBackToCampusEvent')
    }
    /**
     * 右键点击楼层展开，恢复对marker的可拾取状态
     * @param {*} obj 
     */
    rightClickExpendFloor() {
        var _this = this;
        setTimeout(function () {
            // 改变右键点击的可拾取对象类型
            _this.app.picker.pickedResultFunc = function (obj) {
                if (obj.type == 'Facade' || obj.type == 'Thing' || obj.type == 'Building' || obj.type == 'Marker' || obj.type == 'Floor') {
                    return obj;
                }
            }
        }, 2000)
    }
    /**
     * 楼层合并marker隐藏
     */
    expendFloorToMarker(obj) {
        var _this = this;
        let floorArr = obj.floors;
        if (floorArr.length > 0) {
            floorArr.forEach(v => {
                let floorObj = v;
                let hasMarker = floorObj.userData[_this.userDateKey];
                if (hasMarker != null) {
                    hasMarker.visible = false;
                }
            })
        }
    }
}
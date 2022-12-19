class DivisionFloor {
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
        this.cameraPos = this.app.camera.position;
        this.cameraTarget = this.app.camera.target;
        this.randomStr = 'division-box-' + new Date().getTime().toString();
        this.floorInfo = {};
        this.listener = {};
        this.status = false;
        this.defaultEvent = ['floorClick', 'roomClick', 'floorLevelBack'];
        this.regionPolygon = null;
        this.selectFooor = false;  // 判断当前是否是选中楼层状态
        this.createMenuState = true;
    }

    /**
     * 楼层分割
     */
    divisionFloorEvent(obj) {
        var _this = this;
        var id, index, setclippingInfo = [];
        _this.app.on('MouseMove', function (e) {
            if (!e.pickedObj) return;
            if (e.pickedObj.type == 'Facade') {
                e.pickedObj = e.pickedObj.parent;
            }
            if (_this.floorInfo) {
                $('#div3d').css('cursor', 'pointer');
                id = Object.keys(_this.floorInfo).find(v => v == e.pickedObj.id);
            }
            if (id) {
                index = _this.calcFloor(e.pickedPosition[1], _this.floorInfo[id].floorPosY, 0);
                _this.campusDivision(_this.app.query('#' + id)[0], _this.floorInfo[id].floorHeight[index], _this.floorInfo[id].floorPosY[index - 1], index, id);
            } else {
                if (_this.regionPolygon) {
                    _this.regionPolygon.destroy();
                    _this.regionPolygon = null;
                }
                $("#div3d").css("cursor", "default");
            }
        }, '楼层移动');
        _this.app.on('SingleClick', function (e) {
            if (!id || e.button == 2 || e.button == 1) return;
            _this.app.pauseEvent('MouseMove', '*', '楼层移动');
            _this.selectFooor = true;
            if (obj.floors) {
                obj.floors.visible = true;
                setclippingInfo = [
                    { height: obj.boundingBox.min[1] - obj.floors[index - 1].boundingBox.min[1] + 0.4, direction: [0, 1, 0] },  // 下往上剖切
                    { height: obj.floors[index - 1].boundingBox.max[1] - obj.boundingBox.min[1] - 0.5, direction: [0, -1, 0] }  // 上往下剖切
                ];
            } else {
                setclippingInfo = [
                    { height: obj.boundingBox.min[1] - _this.regionPolygon.boundingBox.min[1] + 0.4, direction: [0, 1, 0] },  // 下往上剖切
                    { height: _this.regionPolygon.boundingBox.max[1] - obj.boundingBox.min[1] - 0.4, direction: [0, -1, 0] }  // 上往下剖切
                ];
            }
            _this.app.pauseEvent(THING.EventType.Pick, '*', THING.EventTag.LevelPickOperation);
            obj.setClippingPlanes(setclippingInfo)
            _this.regionPolygon.visible = false;
            _this.app.pauseEvent('SingleClick', '*', '楼层点击');
        }, '楼层点击');
        _this.app.on('SingleClick', function (e) {
            if (!id || e.button == 0 || e.button == 1) return;
            if (_this.selectFooor == true) {
                _this.app.resumeEvent('MouseMove', '*', '楼层移动');
                _this.app.resumeEvent('SingleClick', '*', '楼层点击');
                _this.selectFooor = false;
            } else {
                setTimeout(function () {
                    _this.uninstallDivisionFloorEvent();
                    _this.app.resumeEvent(THING.EventType.SingleClick, '*', '右键物体创建菜单');
                }, 200)
            }
            _this.cameraEvent(true);
            _this.campusDivision(_this.app.query('#' + id)[0], _this.floorInfo[id].floorHeight[index], _this.floorInfo[id].floorPosY[index - 1], index, id);
            obj.clearClippingPlanes();
        }, '右键回退');
        _this.dealBuildingData(obj)
    }

    /**
     * 计算移动位置
     */
    calcFloor(value, height, countIndex) {
        let tempVal = height[countIndex];
        if (value - tempVal < 0 || countIndex >= height.length - 1) {
            return countIndex;
        }
        countIndex++;
        return this.calcFloor(value, height, countIndex);
    }

    /**
     * 园区场景分割
     */
    campusDivision(build, floorHeight, posY, floorIndex, id) {
        var _this = this;
        let boundPoints = [];
        build.style.outlineColor = null;
        build.orientedBoundingBox.points.forEach((v, k) => {
            if (k < 4) {
                boundPoints.push(v);
            }
        });
        if (posY + floorHeight > build.orientedBoundingBox.size[1]) {
            floorHeight = build.build.orientedBoundingBox.size[1] - posY;
        }
        let points = [boundPoints[0], boundPoints[1], boundPoints[3], boundPoints[2]];
        if (_this.regionPolygon) {
            _this.regionPolygon.destroy();
        }
        _this.regionPolygon = _this.app.create({
            type: 'Shape',
            id: _this.randomStr,
            points: points,  // 传入世界坐标系下点坐标
            height: floorHeight,
            style: {
                color: '#db6400',  // 区域颜色
                opacity: 0.8,  // 不透明度 (默认是 0.5 半透明)
            }
        })
        _this.regionPolygon.style.renderOrder = 1000;
        _this.regionPolygon.pickable = false;
        _this.regionPolygon.position = [_this.regionPolygon.position[0], posY, _this.regionPolygon.position[2]];
        _this.regionPolygon.scale = [1.02, 1, 1.02];
        let cPos = [(boundPoints[3][0] + boundPoints[2][0]) / 2, posY + floorHeight / 3, (boundPoints[3][2] + boundPoints[2][2]) / 2]
        _this.createCard({
            parent: _this.regionPolygon,
            type: 'floor',
            buildNo: id,
            floorIndex: floorIndex,
            position: cPos
        });
    }

    /**
     * 创建顶牌
     */
    createCard(param) {
        let _this = this;
        if ($("#pointBoard")) { $("#pointBoard").remove() };
        let parent = param.parent;
        let floorIndex = param.floorIndex;
        if (param.type == 'floor') {
            this.template = `<div id = "pointBoard" style = "z-index: 10; font-size: 13px; color:#f0f0f0;position :absolute;padding:0 3px;background:rgba(0,0,0,0.5)"><span class = "uint"></span><span class = "floor">F` + floorIndex + `</span></div>`;
        }
        $("#div3d").append(this.template);
        this.srcElem = document.getElementById("pointBoard");
        let info = {
            type: 'UIAnchor',
            parent: parent,
            element: this.srcElem,
        }
        param.position ? info.position = param.position : null;
        param.pivot ? info.pivot = param.pivot : null;
        this.ui = _this.app.create(info);
    }

    /**
     * 摄影机事件
     * @param {Boolean} status 
     */
    cameraEvent(status) {
        this.app.camera.enablePan = status;
        this.app.camera.enableRotate = status;
        this.app.camera.enableZoom = status;
    }

    dealBuildingData(buildObj) {
        var _this = this;
        try {
            if (!buildObj.id) return console.log('type 为 "DivideBuilding" 的对象缺少id');
            if (!buildObj.userData.floorHeight) return console.log(`id为"${buildObj.id}"的对象缺少楼层分户必需参数:{"floorHeight":[]}]`);
            let floorHeight = [];
            let floorHeightArr = [];
            if (buildObj.floors) {
                buildObj.floors.forEach(floor => {
                    floor.roof.visible = false;
                    floorHeightArr.push(floor.size[1]);
                })
            } else {
                floorHeight = buildObj.userData.floorHeight;
                floorHeightArr = floorHeight.split(',');
            }
            if (floorHeightArr.length < 1) return;
            let buildObjJson = {
                id: buildObj.id,
                floorHeight: [0],
                room: {}
            };
            let reg = /^\s+$/g;
            for (let i = 0; i < floorHeightArr.length; i++) {
                if (isNaN(Number(floorHeightArr[i])) == true || reg.test(floorHeightArr[i]) == true) return console.log(`id为"${buildObj.id}"的对象楼层分户必需参数:{"floorHeight":${floorHeight}}]参数不规范`);
                buildObjJson.floorHeight.push(Number(floorHeightArr[i]));
            }
            _this.createBuildObj(buildObjJson);
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * 创建分割楼层对象
     */
    createBuildObj(param) {
        var _this = this;
        if (param == null && param.id == null) return;
        _this.floorInfo[param.id] = {
            floorHeight: param.floorHeight,
            floorPosY: [],
            room: param.room,
            roomPosX: {},
            floorCamera: param.floorCamera ? param.floorCamera : {
                'xAngle': 15,  // 绕X轴旋转的角度
                'yAngle': 45,  // 绕y轴旋转的角度
                'radiusFactor': 1,  // 物体包围球半径的倍数
                'time': 500
            }
        };
        _this.countFloorPosY(param.id);
    }

    /**
     * 计算楼层移动距离
     */
    countFloorPosY(id) {
        var _this = this;
        _this.floorInfo[id].floorPosY = [];
        _this.floorInfo[id].floorHeight.reduce(function (prev, cur, index) {
            let c = prev + cur;
            _this.floorInfo[id].floorPosY.push(c);
            return prev + cur
        }, 0)
    }

    /**
     * 卸载建筑外立面楼层选择事件
     */
    uninstallDivisionFloorEvent() {
        var _this = this;
        if (_this.regionPolygon != null) {
            _this.regionPolygon.destroy();
            _this.regionPolygon = null;
        }
        _this.app.off('MouseMove', null, '楼层移动');
        _this.app.off('SingleClick', null, '楼层点击');
        _this.app.off('SingleClick', null, '右键回退');
        _this.app.resumeEvent(THING.EventType.Pick, '*', THING.EventTag.LevelPickOperation);
        $('#div3d').css('cursor', 'default');
    }
}
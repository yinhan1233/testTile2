class SceneExpandFloor {
    constructor() {
        this.init();
    }
    init() {
        this.app = THING.App.current;
        this.horizontalDistance = 1;  // 横向展开楼层间距
        this.verticalDistance = 3;  // 垂直展开楼层间距
        this.wheelState = false;  // 滑动状态
        this.timer = null;
        this.building = null;
    }

    /**
     * 说明：给建筑添加初始点坐标
     */
    addFloorPos(building) {
        var _this = this;
        _this.building = building;
        let floors = _this.building.floors;
        let pos = floors[1].getAttribute('initPos');
        if (pos != null) {
            return;
        }
        for (let i = 1; i < floors.length; i++) {
            let floor = floors[i];
            let initPos = floor.position;
            floor.setAttribute('initPos', initPos);
            let horizontalDistance = _this.countHorizontalOffsetDistance(floor, floors);
            floor.setAttribute('horizontalDistance', horizontalDistance);
            let verticalDistance = _this.countVerticalOffsetDistance(floor, floors);
            floor.setAttribute('verticalDistance', verticalDistance);
        }
        _this.isEmptyFloor(_this.building);
    }

    /**
     * 说明：楼层横向展开/折叠
     */
    horizontalExpand(building, state) {
        var _this = this;
        building.setAttribute('expandState', 'moving');
        let floors = building.floors;
        for (let i = 1; i < floors.length; i++) {
            let floor = floors[i];
            let distance = floor.getAttribute('horizontalDistance');
            if (distance == null) {
                distance = _this.countHorizontalOffsetDistance(floor, floors);
                floor.setAttribute('horizontalDistance', distance);
            }
            if (state != 'close') {
                distance = -distance;
            }
            floor.moveTo({
                offsetPosition: [0, 0, distance],
                time: 600,
                orientToPath: false,
                complete: function () {
                    if (state == 'close') {
                        building.setAttribute('expandState', 'close');
                    } else {
                        building.setAttribute('expandState', 'horizontal');
                    }
                }
            });
        }
    }

    /**
     * 说明：楼层纵向展开/折叠
     */
    verticalExpand(building, state) {
        var _this = this;
        _this.building = building;
        _this.building.setAttribute('expandState', 'moving');
        let floors = _this.building.floors;
        if (_this.wheelState == false) {
            _this.verticalDistance = 3;
            $('#expandFloorDataDetails .tj-value').text(_this.verticalDistance)
        }
        for (let i = 1; i < floors.length; i++) {
            let floor = floors[i];
            let distance = floor.getAttribute('verticalDistance');
            if (distance == null) {
                distance = _this.countVerticalOffsetDistance(floor, floors);
                floor.setAttribute('verticalDistance', distance);
            }
            if (state == 'close') {
                let initPos = floor.getAttribute('initPos');
                floor.movePath({
                    path: [floor.position, initPos],
                    time: 600,
                    complete: function () {
                        _this.building.setAttribute('expandState', 'close');
                    }
                });
            } else {
                let preFloor = floors[0];
                floor.moveTo({
                    position: [floor.position[0], preFloor.position[1] + distance, floor.position[2]],
                    time: 600,
                    orientToPath: false,
                    complete: function () {
                        _this.building.setAttribute('expandState', 'vertical');
                    }
                });
            }
        }
    }

    /**
     * 说明：横向展开状态下纵向展开
     */
    horizontalToVertical(building) {
        var _this = this;
        building.setAttribute('expandState', 'moving');
        let floors = building.floors;
        for (let i = 0; i < floors.length; i++) {
            let floor = floors[i];
            let distance = floor.getAttribute('horizontalDistance');
            floor.moveTo({
                offsetPosition: [0, 0, distance],
                time: 600,
                orientToPath: false,
                complete: function () {
                    if (i == floors.length - 1) {
                        _this.verticalExpand(building, 'vertical');
                    }
                }
            });
        }
    }

    /**
     * 说明：纵向展开状态下横向展开
     */
    verticalToHorizontal(building) {
        var _this = this;
        building.setAttribute('expandState', 'moving');
        let floors = building.floors;
        for (let i = 1; i < floors.length; i++) {
            let floor = floors[i];
            let initPos = floor.getAttribute('initPos');
            floor.movePath({
                path: [floor.position, initPos],
                time: 600,
                complete: function () {
                    building.setAttribute('expandState', 'close');
                    if (i == floors.length - 1) {
                        _this.horizontalExpand(building, 'horizontal');
                    }
                }
            });
        }
    }

    /**
     * 说明：退出层级后楼层折叠
     */
    exitBuildingCloseFloor(building) {
        var _this = this;
        _this.building = building;
        let expandState = _this.building.getAttribute('expandState');
        if (expandState == 'close') {
            return;
        }
        let floors = _this.building.floors;
        for (let i = 1; i < floors.length; i++) {
            let floor = floors[i];
            floor.stopMoving();
            let initPos = floor.getAttribute('initPos');
            floor.position = initPos;
            _this.building.setAttribute('expandState', 'close');
        }
    }

    /**
     * 说明：计算每层楼横向偏移的距离
     */
    countHorizontalOffsetDistance(floor, floors) {
        var _this = this;
        let indexOfBuilding = floor.indexOfBuilding;
        let floorZ1 = floor.getAttribute('horizontalSpacing');
        if (floorZ1 == null) {
            floorZ1 = _this.countHorizontalSpacing(floor, floors);

        }
        let distance = 0;
        for (let i = indexOfBuilding; i > 0; i--) {
            distance += floorZ1 + _this.horizontalDistance;
            if (i - 1 > 0) {
                let floorpre = floors[i - 1];
                let floorZ2 = floorpre.getAttribute('horizontalSpacing');
                if (floorZ2 == null) {
                    floorZ2 = _this.countHorizontalSpacing(floorpre, floors);
                }
                floorZ1 = floorZ2;
            }
        }
        return distance;
    }

    /**
     * 说明：计算每层楼纵向偏移的距离
     */
    countVerticalOffsetDistance(floor, floors) {
        var _this = this;
        let indexOfBuilding = floor.indexOfBuilding;
        let floorZ1 = _this.getFloorHeight(floor);
        let distance = 0;
        for (let i = indexOfBuilding - 1; i >= 0; i--) {
            let floorpre = floors[i];
            let floorZ2 = _this.getFloorHeight(floorpre);
            distance += floorZ2 + _this.verticalDistance;
            floorZ1 = floorZ2;
        }
        return distance;
    }
    /**
     * 说明：计算每层楼横向偏移的距离
     */
    countHorizontalSpacing(floor, floors) {
        var _this = this;
        let indexOfBuilding = floor.indexOfBuilding;
        if (indexOfBuilding > 0) {
            let floorpre = floors[indexOfBuilding - 1];
            let center1 = floor.boundingBox.center;
            let center2 = floorpre.boundingBox.center;
            let centerToCenter = _this.countPlanRange(center1, center2);
            let floorWidth = _this.getFloorWidth(floor) / 2;
            let floorpreWidth = _this.getFloorWidth(floorpre) / 2;
            let spacing = floorWidth + centerToCenter + floorpreWidth;
            floor.setAttribute('horizontalSpacing', spacing);
            return spacing;
        }
    }

    /**
     * 说明：获取楼层宽度
     */
    getFloorWidth(floor) {
        let size = floor.size;
        return size[2];
    }

    /**
     * 说明：获取楼层高度
     */
    getFloorHeight(floor) {
        let parentFloors = floor.parent.floors;
        let len = parentFloors.length;
        let index = floor.indexOfBuilding;
        let height = 0;
        if (index <= 0) {
            let pos1 = floor.position;
            let pos2 = parentFloors[1].getAttribute('initPos');
            height = pos2[1] - pos1[1];
        } else if (index >= len - 1) {
            height = floor.size[1];
        } else {
            let pos1 = floor.getAttribute('initPos');
            let pos2 = parentFloors[index + 1].getAttribute('initPos');
            if (pos2 == null) {
                pos2 = parentFloors[index + 1].position;
                parentFloors[index + 1].setAttribute('initPos', parentFloors[index + 1].position);
            }
            height = pos2[1] - pos1[1];
        }
        return height;
    }

    countPlanRange(pos1, pos2) {
        let pos01 = [pos1[0], 0, pos1[2]];
        let pos02 = [pos2[0], 0, pos2[2]];
        // let distance = THING.Math.getDistance(pos01, pos02);
        let distance = pos2[2] - pos1[2];
        if (pos1[2] >= pos2[2]) {
            return distance;
        }
        return -distance;
    }

    /**
     * 滑动滚轮，修改楼层纵向偏移距离
     */
    changeVerticalOffsetDistance(building) {
        var _this = this;
        _this.building = building;
        if (_this.wheelState == false) {
            _this.verticalDistance = 3;
        }
        let floors = _this.building.floors;
        _this.app.off(THING.EventType.KeyDown, null, '横向按下shift键');
        _this.app.on(THING.EventType.KeyDown, function (ev) {
            if (ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') {
                if (!$('#verticalExpansion').hasClass('active')) {
                    _this.verticalDistance = 0;
                }
                _this.app.on(THING.EventType.MouseWheel, function (ev) {
                    _this.wheelState = true;
                    $('#verticalExpansion').addClass('active');
                    _this.building.setAttribute('expandState', 'vertical');
                    if (ev.delta < 0) {
                        _this.verticalDistance++;
                        for (let i = 1; i < floors.length; i++) {
                            let floor = floors[i];
                            let distance = _this.countVerticalOffsetDistance(floor, floors);
                            floor.setAttribute('verticalDistance', distance);
                            let floorX = floor.position[0];
                            let floorZ = floor.position[2];
                            floor.position = [floorX, floors[0].position[1] + distance, floorZ];
                        }
                    } else {
                        if (_this.verticalDistance > 0) {
                            _this.verticalDistance--;
                            if (_this.verticalDistance <= 0) {
                                _this.wheelState = false;
                            }
                            for (let i = 1; i < floors.length; i++) {
                                let floor = floors[i];
                                let distance = _this.countVerticalOffsetDistance(floor, floors);
                                floor.setAttribute('verticalDistance', distance);
                                let floorX = floor.position[0];
                                let floorZ = floor.position[2];
                                floor.position = [floorX, floors[0].position[1] + distance, floorZ];
                            }
                        }
                    }
                    if ($('#expandFloorDataDetails').length > 0) {
                        $('#expandFloorDataDetails').css('display', 'block')
                    } else {
                        _this.floorExpandDistanceHtml();
                    }
                    $('#expandFloorDataDetails .tj-value').text(_this.verticalDistance);
                    if (_this.app.level.current.type == 'Campus') {
                        if (_this.verticalDistance == 0) {
                            contextMenuClass.resetContextMenu(_this.building);
                        }
                    }
                }, '滑动滚轮改变楼层纵向间距')
            }
        }, '纵向按下Shift键');
        $('#expandFloorDataDetails .tj-value').text(_this.verticalDistance)
        _this.app.on(THING.EventType.KeyUp, function (ev) {
            if (ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') {
                _this.app.off(THING.EventType.MouseWheel, null, '滑动滚轮改变楼层纵向间距');
            }
        }, '纵向抬起Shift键');
    }

    /**
     * 滑动滚轮，修改楼层横向偏移距离
     */
    changeHorizontalOffsetDistance(building) {
        var _this = this;
        if ($('#expandFloorDataDetails').length > 0) {
            $('#expandFloorDataDetails').css('display', 'block')
        } else {
            _this.floorExpandDistanceHtml();
        }
        let floors = building.floors;
        _this.app.pauseEvent(THING.EventType.KeyDown, null, '纵向按下Shift键');
        _this.app.on(THING.EventType.KeyDown, function (ev) {
            if (ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') {
                _this.app.on(THING.EventType.MouseWheel, function (ev) {
                    for (let i = 1; i < floors.length; i++) {
                        let floor = floors[i];
                        let distance = floor.getAttribute('horizontalDistance');
                        if (ev.delta < 0) {
                            distance = distance + i;
                            floor.translate([0, 0, -i]);
                        } else {
                            if (distance > 0) {
                                distance = distance - i;
                                if (distance < 0) {
                                    distance = 0;
                                    if (floor.position[2] < floors[0].position[2]) {
                                        let floorZPosition = floors[0].position[2];
                                        floor.position = [floor.position[0], floor.position[1], floorZPosition];
                                    }
                                } else {
                                    floor.translate([0, 0, i]);
                                }
                            }
                        }
                        $('#expandFloorDataDetails .tj-value').text(parseInt(floors[1].getAttribute('horizontalDistance')));
                        floor.setAttribute('horizontalDistance', distance);
                    }
                }, '滚动滚轮改变楼层横向间距')
            }
        }, '横向按下shift键')
        $('#expandFloorDataDetails .tj-value').text(parseInt(floors[1].getAttribute('horizontalDistance')))
        _this.app.on(THING.EventType.KeyUp, function (ev) {
            if (ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') {
                _this.app.off(THING.EventType.MouseWheel, null, '滚动滚轮改变楼层横向间距');
            }
        }, '横向抬起shift键');
    }

    /**
     * 点击楼层展开 提示按住shift键，滑动滚轮可改变楼层间距
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
            text: '楼层展开后，按住【Shift+鼠标滚轮】可以调节楼层展开间距！',
            keepTime: '10000',
            isRemove: false
        }
        infoTipsClass.createInfoTips(expandFloorInfoTipsJson);
    }

    /**
     * 楼层展开高度
     */
    floorExpandDistanceHtml() {
        if ($('.infoContainer').length > 0) {
            if ($('.infoContainer').hasClass('resetTips')) {
                $('.infoContainer').removeClass('resetTips');
            }
            $('.infoContainer').addClass('moveTips');
        }
        var dataDetails =
            `<div id="expandFloorDataDetails" class="expandFloorDataDetails" style=" display: block;position: relative;float: right;top: 15px;right: 20px;font-family: Open Sans, sans-serif;font-size: 18px; line-height: 17px;color:#fff;">
                <span>楼层展开高度：
                    <span class="tj-value">0</span>
                    <span>米</span>
                </span>
            </div>`
        $('#div2d').append($(dataDetails));
    }

    /**
     * 判断是否为空楼层
     */
    isEmptyFloor(build) {
        var _this = this;
        _this.building = build;
        var floors = _this.building.floors;
        var emptyFloorArr = [];
        for (let i = 0; i < floors.length; i++) {
            let floor = floors[i];
            if (floor.size[1] < 0.001) {
                emptyFloorArr.push(floor);
            }
        }
        if (floors.length == 1 && emptyFloorArr.length == 1) {
            _this.createBoxToFloor(emptyFloorArr[0]);
        }
        for (let i = 0; i < emptyFloorArr.length; i++) {
            let emptyFloor = emptyFloorArr[i];
            let indexOfBuilding = emptyFloor.indexOfBuilding;
            let afterFloor = floors[indexOfBuilding + 1];
            let beforeFloor = null;
            if (indexOfBuilding != 0) {
                beforeFloor = floors[indexOfBuilding - 1];
            }
            if (afterFloor != null) {
                if (afterFloor.size[1] > 0.001) {
                    _this.createBoxToFloor(emptyFloor, afterFloor);
                } else if (beforeFloor.size[1] > 0.001) {
                    _this.createBoxToFloor(emptyFloor, beforeFloor);
                }
            }
        }
    }

    /**
     * 创建红色的盒子代替空楼层
     */
    createBoxToFloor(emptyFloor, hasFloor) {
        var _this = this;
        let width = 20;
        let height = 3;
        let depth = 20;
        if (hasFloor != null) {
            width = hasFloor.size[0];
            if (emptyFloor.indexOfBuilding > hasFloor.indexOfBuilding) {
                height = emptyFloor.position[1] - hasFloor.position[1] - 0.01;
            } else {
                height = hasFloor.position[1] - emptyFloor.position[1] - 0.01;
            }
            depth = hasFloor.size[2];
        }
        if (emptyFloor.userData['box'] == null) {
            var box = _this.app.create({
                type: 'Box',
                name: 'box',
                id: 'box-' + emptyFloor.id,
                width: width, // 宽度 
                height: height, // 高度 
                depth: depth, // 深度
                parent: emptyFloor,
                localPosition: [0.125, height / 2, 0.25],
                style: {
                    color: '#ff0000',
                    opacity: 0.3,
                }
            });
            emptyFloor.userData['box'] = box;
        }
    }
}
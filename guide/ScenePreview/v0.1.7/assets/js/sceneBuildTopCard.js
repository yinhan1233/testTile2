class SceneBuildTopCard {
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
        this.sceneBuildArr = {};  // 场景中带室内结构的建筑
        this.getBuildHasFloor();
        this.setTopCardToBuild();
    }

    /**
     * 获取带室内结构的建筑
     */
    getBuildHasFloor() {
        var _this = this;
        var buildings = _this.app.query('.Building');
        var buildingsLength = buildings.length;
        for (let i = 0; i < buildingsLength; i++) {
            var floors = buildings[i].floors;
            if (floors.length > 0) {
                let buildJson = {
                    'obj': buildings[i],
                    'topCard': null,
                    'topCardPos': [0, 0, 0]
                };
                _this.sceneBuildArr[buildings[i].id] = buildJson;
            }
        }
    }

    /**
     * 带室内结构的建筑顶牌
     */
    setTopCardToBuild() {
        var _this = this;
        for (let key in _this.sceneBuildArr) {
            var building = _this.sceneBuildArr[key].obj;
            _this.createTopCard(building);
        }
    }

    /**
     * 创建顶牌
     */
    createTopCard(obj) {
        var _this = this;
        if (obj == null) return;
        let html = `
            <div class="scenebuild-topcard" data-id="`+ obj.id + `" style="position:absolute;display: block;left:-100%">
                <div class="topcard-line"></div>
                <div class="topcard-content">
                    <div class="topcard-title">`+ obj.name + `</div>
                </div>
                <div class="arrow"></div>
            </div>`
        $('#div3d').append($(html));
        _this.createCardTo3D(obj);
        _this.showOrHiddenTopCard();
    }

    /**
     * 创建3D顶牌
     */
    createCardTo3D(obj) {
        var _this = this;
        if ($('.scenebuild-topcard[data-id="' + obj.id + '"]').length <= 0) return;
        html2canvas($('.scenebuild-topcard[data-id="' + obj.id + '"]')[0], {
            backgroundColor: '#00000000',
            logging: false,
            scale: 1
        }).then(canvas => {
            let texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            texture.magFilter = THREE.NearestMipMapNearestFilter;
            texture.minFilter = THREE.NearestMipMapNearestFilter;
            texture.anisotropy = 16;
            let objPos = obj.position;
            let boxCenter = obj.boundingBox.center;
            let objSize = obj.size;
            let localPositionData = [boxCenter[0] - objPos[0], objSize[1], boxCenter[2] - objPos[2]];
            let planeJson = {
                type: 'Plane',
                width: canvas.width * 0.08,
                height: canvas.height * 0.08,
                parent: obj,
                localPosition: localPositionData,
                style: {
                    color: 0xffffff,
                    opacity: 0.9
                }
            }
            if (obj.facade != null) {
                planeJson.parent = obj.facade;
                planeJson.localPosition = [boxCenter[0] - objPos[0], objSize[1] + 15, boxCenter[2] - objPos[2]];
            } else {
                planeJson.parent = obj.floors[obj.floors.length - 1];
                planeJson.localPosition = [0, obj.floors[obj.floors.length - 1].size[1] + 8, 0];
            }
            if (obj.userData['bussiness_groundClearance'] != null) {
                let groundClearance = parseFloat(obj.userData['bussiness_groundClearance']);
                planeJson.localPosition = [boxCenter[0] - objPos[0], groundClearance + objSize[1] + 10, boxCenter[2] - objPos[2]];
            }
            let plane = _this.app.create(planeJson);
            plane.node.children[0].material = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide,
                transparent: true,
                map: texture,
            });
            plane.pickable = false;
            plane.visible = true;
            plane.lookAt(_this.app.camera);
            plane.inheritVisible = false;
            plane.style.renderOrder = 1000;
            obj.userData['sceneCard'] = plane;
            _this.sceneBuildArr[obj.id].topCard = plane;
            _this.sceneBuildArr[obj.id].topCardPos = plane.position;
            obj.on(THING.EventType.MouseEnter, function (ev) {
                let cardPlane = ev.object.userData['sceneCard'];
                if (cardPlane != null) {
                    cardPlane.style.outlineColor = null;
                }
            }, 'CampusInfoCardObjPick' + obj.id);
            let timer = setTimeout(function () {
                clearTimeout(timer)
                _this.startFloatAnimation(plane);
            }, 1200)
        })
    }

    /**
     * 顶牌显示与隐藏
     */
    showOrHiddenTopCard() {
        var _this = this;
        _this.app.on(THING.EventType.EnterLevel, function () {
            let levelCurrent = _this.app.level.current;
            if (levelCurrent.type == 'Campus') {
                _this.app.query('.Building').forEach(building => {
                    let cardPlane = building.userData['sceneCard'];
                    if (cardPlane != null) {
                        cardPlane.visible = true;
                    }
                })
            } else {
                _this.app.query('.Building').forEach(building => {
                    let cardPlane = building.userData['sceneCard'];
                    if (cardPlane != null) {
                        cardPlane.visible = false;
                    }
                })
            }
        })
    }
    /**
     * 移除所有顶牌
     */
    destroyAll() {
        var _this = this;
        _this.app.query('.Building').forEach(building => {
            let cardPlane = building.userData['sceneCard'];
            if (cardPlane != null) {
                cardPlane.destroy();
                delete building.userData['sceneCard'];
            }
        })
    }
    /**
     * 移除顶牌
     */
    destroy(id) {
        var _this = this;
        _this.app.query('#' + id).forEach(v => {
            if (v.type == 'Building') {
                let cardPlane = v.userData['sceneCard'];
                if (cardPlane != null) {
                    cardPlane.destroy();
                    delete v.userData['sceneCard'];
                }
            }
        })
    }
    /**
     * 顶牌初始化位置
     */
    initPlanePos(obj) {
        obj.position = this.sceneBuildArr[obj.parent.parent.id].topCardPos;
    }

    /**
     * 设置顶牌上下浮动动画
     */
    startFloatAnimation(obj) {
        if (obj != null) {
            setTimeout(function () {
                let localPoints = [[obj.position[0], obj.position[1], obj.position[2]], [obj.position[0], obj.position[1] + 5, obj.position[2]], [obj.position[0], obj.position[1] - 0.5, obj.position[2]]];
                obj.movePath({
                    path: localPoints, // 路径坐标点数组
                    time: 3 * 1000, // 路径总时间 毫秒
                    lerpType: null, // 插值类型（默认为线性插值）此处设置为不插值
                    loopType: THING.LoopType.Repeat
                })
            }, 500)
        }

    }

    /**
     * 关闭顶牌上下浮动动画
     */
    stopFloatAnimation(obj) {
        var _this = this;
        if (JSON.stringify(_this.sceneBuildArr) != '{}') {
            if (obj == null) {
                for (let key in _this.sceneBuildArr) {
                    let topcard = _this.sceneBuildArr[key].obj.userData['sceneCard'];
                    let topCardPos = _this.sceneBuildArr[key].topCardPos;
                    if (topcard != null) {
                        topcard.stopMoving();
                        topcard.position = topCardPos;
                    }
                }
            } else {
                let topcard = _this.sceneBuildArr[obj.id].obj.userData['sceneCard'];
                let topCardPos = _this.sceneBuildArr[obj.id].topCardPos;
                if (topcard != null) {
                    topcard.stopMoving();
                    topcard.position = topCardPos;
                }
            }
        }
    }
}
/**
 * 识别模模搭场景的信息牌
 */
class SceneTopCard {
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
        // 查询自定义属性包含“bbIdx”的物体
        this.objArr = this.app.query('[userData/bbIdx]');
        this.createAllTopCard();
    }
    /**
     * 创建所有顶牌
     */
    createAllTopCard() {
        var _this = this;
        for (let i = 0, length = _this.objArr.length; i < length; i++) {
            let curI = _this.objArr[i];
            _this.create(curI);
        }
    }
    /**
     * 创建顶牌
     * @param { Object } obj - 创建顶牌的对象
     */
    create(obj) {
        if (obj == null) return;
        var _this = this;
        let bbIdx = obj.userData['bbIdx'];
        let bb3d = obj.userData['bb3d'];
        if (bbIdx == null || bb3d == null) return;
        bb3d = bb3d.toLowerCase();
        let title0 = obj.userData['title0'];
        title0 = _this.getDecodeText(title0);
        let title1 = obj.userData['title1'];
        title1 = _this.getDecodeText(title1);
        let title2 = obj.userData['title2'];
        title2 = _this.getDecodeText(title2);
        let title3 = obj.userData['title3'];
        title3 = _this.getDecodeText(title3);
        let param = {
            obj: obj,
            bbIdx: bbIdx,
            title0: title0,
            title1: title1,
            title2: title2,
            title3: title3,
            scaleW: 1,
            scaleH: 1
        }
        let bbScaleW = obj.userData['bbScaleW'];
        if(bbScaleW != null || isNaN(parseFloat(bbScaleW)) == false){
            param.scaleW = parseFloat(bbScaleW);
        }
        let bbScaleH = obj.userData['bbScaleH'];
        if(bbScaleH != null && isNaN(parseFloat(bbScaleH)) == false){
            param.scaleH = parseFloat(bbScaleH);
        }
        let html = _this.getHtml(param);
        $('#div3d').append($(html));
        if (bb3d == 'false') {
            _this.createCardFor2d(param);
        } else if (bb3d == 'true') {
            _this.createCardFor3d(param);
        }
    }
    /**
     * 创建2D顶牌
     * @param { JSON } param - 顶牌参数
     */
    createCardFor2d(param) {
        if (param == null) return null;
        var _this = this;
        let eleId = 'scene-card-' + param.obj.id;
        let objPos = param.obj.position;
        let boxCenter = param.obj.boundingBox.center;
        let objSize = param.obj.size;
        let localPositionData = [boxCenter[0] - objPos[0], objSize[1] / 2 + 0.2, boxCenter[2] - objPos[2]];
        let pivotPixelData = _this.getPivotPixel(param);
        let anchorCreateJson = {
            type: 'UIAnchor',
            parent: param.obj,
            element: $('#' + eleId)[0],
            localPosition: localPositionData,
            pivotPixel: pivotPixelData
        }
        let tempTopCard = _this.app.create(anchorCreateJson);
        tempTopCard.visible = false;
        param.obj.userData['sceneCard'] = tempTopCard;
        _this.registerEvent(param.obj);
    }
    /**
     * 创建3D顶牌
     * @param { JSON } param - 顶牌参数
     */
    createCardFor3d(param) {
        if (param == null) return null;
        var _this = this;
        let eleId = 'scene-card-' + param.obj.id;
        if ($('#' + eleId).length <= 0) return;
        html2canvas($('#' + eleId)[0], {
            backgroundColor: '#00000000',
            scale: 1
        }).then(canvas => {
            let texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            texture.magFilter = THREE.NearestMipMapNearestFilter;
            texture.minFilter = THREE.NearestMipMapNearestFilter;
            texture.anisotropy = 16;
            let objPos = param.obj.position;
            let boxCenter = param.obj.boundingBox.center;
            let objSize = param.obj.size;
            let localPositionData = [boxCenter[0] - objPos[0], canvas.height * 0.05 / 2 + objSize[1], boxCenter[2] - objPos[2]];
            if (param.bbIdx == '3') {
                localPositionData[0] = localPositionData[0] + (canvas.width * 0.05 / 2);
            } else if (param.bbIdx == '6') {
                localPositionData[0] = localPositionData[0] + (canvas.width * 0.05 / 2) - (canvas.width * 0.05 / (canvas.width / 44));
            }
            let plane = _this.app.create({
                type: 'Plane',
                width: canvas.width * 0.05,
                height: canvas.height * 0.05,
                parent: param.obj,
                localPosition: localPositionData,
                style: {
                    color: 0xffffff,
                    opacity: 0.9
                }
            });
            plane.node.children[0].material = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide,
                transparent: true,
                map: texture,
                envMaps: null,
            });
            plane.pickable = false;
            plane.visible = false;
            param.obj.userData['sceneCard'] = plane;
            _this.registerEvent(param.obj);
            param.obj.on(THING.EventType.MouseEnter, function (ev) {
                let cardPlane = ev.object.userData['sceneCard'];
                if (cardPlane != null) {
                    cardPlane.style.outlineColor = null;
                }
            }, 'CampusInfoCardObjPick' + param.obj.id);
        });
    }
    /**
     * 注册事件
     * @param { Object } obj - 注册事件的物体
     */
    registerEvent(obj) {
        let sceneCard = obj.userData['sceneCard'];
        if (sceneCard == null) return;
        let bbModel = obj.userData['bbModel'];
        if (bbModel == null) bbModel = 'always';
        bbModel = bbModel.toLowerCase();
        if (bbModel == 'always') {
            sceneCard.visible = true;
        } else if (bbModel == 'click') {
            obj.on('singleclick', function () {
                sceneCard.visible = !sceneCard.visible;
            }, 'CampusInfoCardClick' + obj.id);
        } else if (bbModel == 'float') {
            obj.on('mouseenter', function () {
                sceneCard.visible = true;
            }, 'CampusInfoCardFloatEnter' + obj.id);
            obj.on('mouseleave', function () {
                sceneCard.visible = false;
            }, 'CampusInfoCardFloatLeave' + obj.id);
        }
    }
    /**
     * 注销事件
     * @param { Object } obj - 注销事件的对象
     */
    offEvent(obj) {
        obj.off('singleclick', null, 'CampusInfoCardClick' + obj.id);
        obj.off('mouseenter', null, 'CampusInfoCardFloatEnter' + obj.id);
        obj.off('mouseleave', null, 'CampusInfoCardFloatLeave' + obj.id);
    }
    /**
     * 获取顶牌html
     * @param { JSON } param - 顶牌参数
     */
    getHtml(param) {
        if (param == null) return null;
        let html = ``;
        if (param.bbIdx == '1') {
            html +=
                `<div id="scene-card-` + param.obj.id + `" style="position: absolute; left: -600px; top: 0; width: 319px; height: 150px;transform: scaleX(` + param.scaleW + `) scaleY(` + param.scaleH + `)">
                    <div class="scene-card-type-one" style="width: 319px; height: 150px;"></div>`;
            if (param.title0 != null) {
                html += `<div class="card-title0" style="position: absolute; left: 0; top: 0; width: 93px; height: 100px; font-size: 80px; font-weight: bold; color: rgba(18.8%, 52.5%, 87.8%, 1); vertical-align: middle; text-align: center; overflow: hidden; white-space: nowrap; user-select: none;">` + param.title0 + `</div>`;
            }
            if (param.title1 != null) {
                html += `<div class="card-title1" style="position: absolute; left: 93px; top: 21px; width: 220px; height: 67px; font-size: 36px; font-weight: bold; color: rgba(40%, 40%, 40%, 1); overflow: hidden; white-space: nowrap; user-select: none;">` + param.title1 + `</div>`;
            }
            if (param.title2 != null) {
                html += `<div class="card-title2" style="position: absolute; left: 93px; top: 67px; width: 220px; height: 30px; font-size: 12px; color: rgba(18.8%, 52.5%, 87.8%, 1); overflow: hidden; white-space: nowrap; user-select: none;">` + param.title2 + `</div>`
            }
            html += `</div>`;
        } else if (param.bbIdx == '2') {
            html +=
                `<div id="scene-card-` + param.obj.id + `" style="position: absolute; left: -600px; top: 0; width: 136px; height: 297px;transform: scaleX(` + param.scaleW + `) scaleY(` + param.scaleH + `)">
                    <div class="scene-card-type-two" style="width: 136px; height: 297px;"></div>`;
            if (param.title0 != null) {
                html += `<div class="card-title0" style="position: absolute; left: 0; top: 0; width: 136px; height: 136px; line-height: 136px; font-size: 80px; color: rgba(0, 0, 0, 1); vertical-align: middle; text-align: center; overflow: hidden; white-space: nowrap; user-select: none;">` + param.title0 + `</div>`
            }
            html += `</div>`;
        } else if (param.bbIdx == '3') {
            html +=
                `<div id="scene-card-` + param.obj.id + `" style="position: absolute; left: -600px; top: 0; width: 338px; height: 230px;transform: scaleX(` + param.scaleW + `) scaleY(` + param.scaleH + `)">
                    <div class="scene-card-type-three" style="width: 338px; height: 230px;"></div>`;
            if (param.title0 != null) {
                html += `<div class="card-title0" style="position: absolute; left: 0; top: 0; width: 93px; height: 100px; font-size: 80px; font-weight: bold; color: rgba(100%, 100%, 100%, 1); vertical-align: middle; text-align: center; overflow: hidden; white-space: nowrap; user-select: none;">` + param.title0 + `</div>`;
            }
            if (param.title1 != null) {
                html += `<div class="card-title1" style="position: absolute; left: 93px; top: 21px; width: 248px; height: 40px; font-size: 30px; color: rgba(100%, 100%, 100%, 1); overflow: hidden; white-space: nowrap; user-select: none;">` + param.title1 + `</div>`;
            }
            if (param.title2 != null) {
                html += `<div class="card-title2" style="position: absolute; left: 93px; top: 70px; width: 245px; height: 24px; font-size: 14px; color: rgba(100%, 100%, 100%, 1); overflow: hidden; white-space: nowrap; user-select: none;">` + param.title2 + `</div>`
            }
            html += `</div>`;
        } else if (param.bbIdx == '4') {
            html +=
                `<div id="scene-card-` + param.obj.id + `" style="position: absolute; left: -600px; top: 0; width: 122px; height: 153px;transform: scaleX(` + param.scaleW + `) scaleY(` + param.scaleH + `)">
                    <div class="scene-card-type-four" style="width: 122px; height: 153px;"></div>`;
            if (param.title0 != null) {
                html += `<div class="card-title0" style="position: absolute; left: 0; top: 0; width: 81px; height: 81px; font-size: 48px; color: rgba(100%, 100%, 100%, 1); vertical-align: bottom; text-align: right; line-height: 112px; overflow: hidden; white-space: nowrap; user-select: none;">` + param.title0 + `</div>`;
            }
            if (param.title1 != null) {
                html += `<div class="card-title1" style="position: absolute; left: 81px; top: 0px; width: 40px; height: 75px; font-size: 25px; font-weight: bold; color: rgba(100%, 100%, 100%, 1); vertical-align: bottom; text-align: left; line-height: 125px; overflow: hidden; white-space: nowrap; user-select: none;">` + param.title1 + `</div>`;
            }
            if (param.title2 != null) {
                html += `<div class="card-title2" style="position: absolute; left: 25px; top: 81px; width: 74px; height: 25px; font-size: 20px; color: rgba(100%, 100%, 100%, 1); vertical-align: middle; text-align: center; overflow: hidden; white-space: nowrap; user-select: none;">` + param.title2 + `</div>`
            }
            html += `</div>`;
        } else if (param.bbIdx == '5') {
            html +=
                `<div id="scene-card-` + param.obj.id + `" style="position: absolute; left: -600px; top: 0; width: 417px; height: 364px;transform: scaleX(` + param.scaleW + `) scaleY(` + param.scaleH + `)">
                    <div class="scene-card-type-five" style="width: 417px; height: 364px;"></div>`;
            if (param.title0 != null) {
                html += `<div class="card-title0" style="position: absolute; left: 0; top: 0; width: 417px; height: 82px; font-size: 42px; color: rgba(100%, 100%, 100%, 1); vertical-align: middle; text-align: center; line-height: 82px; overflow: hidden; white-space: nowrap; user-select: none;">` + param.title0 + `</div>`
            }
            html += `</div>`;
        } else if (param.bbIdx == '6') {
            html +=
                `<div id="scene-card-` + param.obj.id + `" style="position: absolute; left: -600px; top: 0; width: 386px; height: 159px;transform: scaleX(` + param.scaleW + `) scaleY(` + param.scaleH + `)">
                    <div class="scene-card-type-six" style="width: 386px; height: 159px;"></div>`;
            if (param.title0 != null) {
                html += `<div class="card-title0" style="position: absolute; left: 0; top: 0; width: 93px; height: 100px; font-size: 80px; font-weight: bold; color: rgba(100%, 100%, 100%, 1); vertical-align: middle; text-align: center; overflow: hidden; white-space: nowrap; user-select: none;">` + param.title0 + `</div>`;
            }
            if (param.title1 != null) {
                html += `<div class="card-title1" style="position: absolute; left: 93px; top: 21px; width: 245px; height: 40px; font-size: 30px; color: rgba(100%, 100%, 100%, 1); overflow: hidden; white-space: nowrap; user-select: none;">` + param.title1 + `</div>`;
            }
            if (param.title2 != null) {
                html += `<div class="card-title2" style="position: absolute; left: 93px; top: 70px; width: 245px; height: 24px; font-size: 14px; color: rgba(100%, 100%, 100%, 1); overflow: hidden; white-space: nowrap; user-select: none;">` + param.title2 + `</div>`
            }
            html += `</div>`;
        } else if (param.bbIdx == '7') {
            html +=
                `<div id="scene-card-` + param.obj.id + `" style="position: absolute; left: -600px; top: 0; width: 386px; height: 115px;transform: scaleX(` + param.scaleW + `) scaleY(` + param.scaleH + `)">
                    <div class="scene-card-type-seven" style="width: 386px; height: 115px;"></div>`;
            if (param.title0 != null) {
                html += `<div class="card-title0" style="position: absolute; left: 0; top: 0; width: 123px; height: 115px; font-size: 100px; font-weight: bold; color: rgba(100%, 100%, 100%, 1); line-height: 115px; vertical-align: middle; text-align: center; overflow: hidden; white-space: nowrap; user-select: none;">` + param.title0 + `</div>`;
            }
            if (param.title1 != null) {
                html += `<div class="card-title1" style="position: absolute; left: 123px; top: 0; width: 185px; height: 115px; font-size: 67px; font-weight: bold; color: rgba(100%, 100%, 100%, 1); line-height: 115px; vertical-align: middle; text-align: center; overflow: hidden; white-space: nowrap; user-select: none;">` + param.title1 + `</div>`;
            }
            if (param.title2 != null) {
                html += `<div class="card-title2" style="position: absolute; left: 308px; top: 30px; width: 78px; height: 28px; font-size: 24px; color: rgba(100%, 100%, 100%, 1); overflow: hidden; white-space: nowrap; user-select: none;">` + param.title2 + `</div>`
            }
            if (param.title3 != null) {
                html += `<div class="card-title2" style="position: absolute; left: 308px; top: 58px; width: 78px; height: 28px; font-size: 24px; color: rgba(100%, 100%, 100%, 1); overflow: hidden; white-space: nowrap; user-select: none;">` + param.title3 + `</div>`
            }
            html += `</div>`;
        }
        return html;
    }
    /**
     * 解析富文本
     * @param { String } value - 顶牌显示内容值
     * @description 解析富文本中的 <color=red>xxx</color>或<size=10></size> 此类值
     */
    getDecodeText(value) {
        if (value == null) return null;
        let temp = value + '';
        if (temp.indexOf('</color>') != -1) {
            temp = temp.replace(/<color=/g, '<font color=');
            temp = temp.replace(/<\/color>/g, '</font>');
        }
        if (temp.indexOf('</size>') != -1) {
            temp = temp.replace(/<size=/g, '<font size=');
            temp = temp.replace(/<\/size>/g, '</font>');
        }
        return temp;
    }
    /**
     * 获取偏移量
     * @param { JSON } param - 顶牌参数
     * @description 设定每种样式顶牌对应的偏移量
     */
    getPivotPixel(param) {
        if (param == null) return [0, 0];
        let bbIdx = param.bbIdx;
        if (bbIdx == '1' || bbIdx == '2' || bbIdx == '4' || bbIdx == '5' || bbIdx == '7') {
            return [parseFloat($('#scene-card-' + param.obj.id).css('width')) / 2, parseFloat($('#scene-card-' + param.obj.id).css('height')) * ((1 - param.scaleH) / 2 + param.scaleH)];
        } else if (bbIdx == '3') {
            return [parseFloat($('#scene-card-' + param.obj.id).css('width')) * ((1 - param.scaleW) / 2), parseFloat($('#scene-card-' + param.obj.id).css('height')) * ((1 - param.scaleH) / 2 + param.scaleH)];
        } else if (bbIdx == '6') {
            return [44, parseFloat($('#scene-card-' + param.obj.id).css('height'))];
        }
    }
}
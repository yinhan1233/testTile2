class ContextMenu {
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
        if(typeof(CMAP) != 'undefined'){
            this.map = CMAP.getCurrentMap();
        }
        this.menuId = 'contextMenu';
        this.expandState = false;  // 楼层展开状态
        this.selectState = false;  // 楼层选择状态
        this.menuContent = null;
        this.tempObj = null;  // 右键点击的物体
        this.contextMenuHtml();
        this.determineObjectType();
    }

    /**
     * 鼠标右键，判断物体类型
     */
    determineObjectType() {
        var _this = this;
        $(document).on('click', function (ev) {
            if ($('.context-menu').length > 0) {
                $('.context-menu').empty();
                _this.tempObj = null;
            }
        });
        _this.app.on(THING.EventType.SingleClick, function (ev) {
            $('.context-menu').css('display', 'none');
            if(_this.map != null){

            }else{
                if (_this.app.level.current.type != 'Campus') {
                    _this.tempObj = null;
                    return;
                }
            }
            if(ev.button == 2){
                if(ev.picked == true){
                    if(ev.object == null) {
                        $('.context-menu').empty();
                        _this.tempObj = null;
                        _this.addcontextMenu();
                        _this.startContextMenu();
                        return;
                    };
                    let obj = ev.object;
                    if ($('.context-menu-item').length > 0 && $('.context-menu-item').attr('data-id') == obj.id) {
                        $('.context-menu').css('display', 'block');
                        _this.tempObj = obj;
                        return;
                    }
                    if (obj.type == 'Facade') {
                        obj = obj.parent;
                    }
                    if (obj.type == 'Floor') {
                        obj = obj.parent;
                    }
                    $('.context-menu').empty();
                    _this.tempObj = obj;
                    _this.addcontextMenu(obj.type, obj.id);
                    _this.startContextMenu();
                }else{
                    $('.context-menu').empty();
                    _this.tempObj = null;
                    _this.addcontextMenu();
                    _this.startContextMenu();
                }
                if($('.context-menu .context-menu-item').length > 0) {
                    let clientX = ev.clientX;
                    let clientY = ev.clientY;
                    $('.context-menu').css('display', 'block');
                    let menuWidth = $('.context-menu')[0].clientWidth;
                    let menuHeight = $('.context-menu')[0].clientHeight;
                    clientX = (clientX + menuWidth) > $(window).width() ? clientX - menuWidth : clientX;
                    clientY = (clientY + menuHeight) > $(window).height() ? clientY - menuHeight : clientY;
                    $('.context-menu').css({
                        left: clientX + "px",
                        top: clientY + "px"
                    });
                }
            }else{
                $('.context-menu').empty();
                _this.tempObj = null;
            }
        }, '右键物体创建菜单');
        if(this.map == null){
            _this.app.pauseEvent(THING.EventType.SingleClick, null, '右键物体创建菜单');
            _this.app.on(THING.EventType.LevelFlyEnd, function (ev) {
                if (ev.object.type == 'Campus') {
                    _this.app.resumeEvent(THING.EventType.SingleClick, null, '右键物体创建菜单');
                } else {
                    _this.app.pauseEvent(THING.EventType.SingleClick, null, '右键物体创建菜单');
                }
            }, '切换层级时改变右键菜单状态');
        }
    }
    /**
     * 开启右键菜单
     */
    startContextMenu() {
        var _this = this;
        $('.context-menu-item').on('click', function () {
            $('.context-menu').css('display', 'none');
            _this.clickContextMenu(this);
        })
    }

    /**
     * 点击菜单项
     */
    clickContextMenu(dom) {
        var _this = this;
        if ($(dom).hasClass('disable')) return;
        if ($(dom).hasClass('expandFloor')) {
            if(_this.tempObj == null) return;
            let obj = _this.tempObj;
            let sceneCard = obj.userData['sceneCard'];
            if ($('#autoRotate').hasClass('active')) {
                $('#autoRotate').trigger('click');
            }
            if (obj.userData['expand'] == 'true') return;
            if (obj.type == 'Floor') {
                obj = obj.parent;
            }
            if (obj.type == 'Facade') {
                obj = obj.parent;
            }
            if (sceneBuildTopCardClass != null) {
                sceneBuildTopCardClass.stopFloatAnimation(obj);
            }
            let floors = obj.floors;
            floors.visible = true;
            for (let i = 0; i < floors.length; i++) {
                let floor = floors[i];
                let roof = floor.roof;
                roof.visible = false;
            }
            if (floors.length > 1) {
                let expandFloorInfoTipsJson = {
                    id: 'expandFloorInfoTips',
                    type: 'tip',
                    text: '按住【Shift+鼠标滚轮】可以调节楼层展开间距！',
                    keepTime: '10000',
                    isRemove: false
                }
                infoTipsClass.createInfoTips(expandFloorInfoTipsJson);
            }
            if (obj.facade != null) {
                // 有外立面楼层展开，创建marker
                if (floorsTopCardClass != null) {
                    floorsTopCardClass.initFloorEvent(obj);
                    floorsTopCardClass.rightClickExpendFloor();
                }
                if (floors.length >= 1) {
                    if (sceneCard != null) {
                        obj.facade.remove(sceneCard);
                        let sceneCardParent = obj.floors[obj.floors.length - 1];
                        sceneCardParent.add({
                            object: sceneCard, // 作为孩子的对象
                            localPosition: [0, sceneCardParent.size[1] + 10, 0] // 相对于父物体的坐标
                        });
                    }
                    obj.facade.fadeOut({
                        time: 800,
                        complete: function () {
                            _this.expandState = true;
                            obj.userData['expand'] = 'true';
                            obj.userData['buildInitPos'] = obj.position;
                            obj.position = [obj.position[0], obj.position[1] + 0.1, obj.position[2]];
                            if (floors.length > 1) {
                                if (obj.userData['bussiness_groundClearance'] != null) {
                                    let groundClearance = parseFloat(obj.userData['bussiness_groundClearance']);
                                    obj.position = [obj.position[0], groundClearance, obj.position[2]];
                                }
                                sceneExpandFloorClass.addFloorPos(obj);
                                sceneExpandFloorClass.verticalExpand(obj, 'vertical');
                                sceneExpandFloorClass.changeVerticalOffsetDistance(obj);
                                $('#verticalExpansion').addClass('active');
                                if ($('#expandFloorDataDetails').length > 0) {
                                    $('#expandFloorDataDetails').css('display', 'block');
                                } else {
                                    sceneExpandFloorClass.floorExpandDistanceHtml();
                                }
                                $('#expandFloorDataDetails .tj-value').text(sceneExpandFloorClass.verticalDistance);
                            }
                        }
                    })
                } else {
                    obj.facade.fadeOut({
                        time: 800,
                        complete: function () {
                            obj.userData['expand'] = 'true';
                        }
                    })
                }
            } else {
                // 有外立面楼层展开，创建marker
                if (floorsTopCardClass != null) {
                    floorsTopCardClass.initFloorEvent(obj);
                    floorsTopCardClass.rightClickExpendFloor();
                }
                _this.expandState = true;
                obj.userData['expand'] = 'true';
                obj.position = [obj.position[0], obj.position[1] + 0.1, obj.position[2]];
                if (floors.length > 1) {
                    $('#verticalExpansion').addClass('active');
                    sceneExpandFloorClass.addFloorPos(obj);
                    sceneExpandFloorClass.verticalExpand(obj, 'vertical');
                    sceneExpandFloorClass.changeVerticalOffsetDistance(obj);
                    if ($('#expandFloorDataDetails').length > 0) {
                        $('#expandFloorDataDetails').css('display', 'block');
                    } else {
                        sceneExpandFloorClass.floorExpandDistanceHtml();
                    }
                    $('#expandFloorDataDetails .tj-value').text(sceneExpandFloorClass.verticalDistance);
                }
            }
            _this.app.picker.pickedResultFunc = function (obj) {
                if (obj.type == 'Floor') {
                    return obj;
                }
            }
            _this.app.query('.Floor').forEach(floor => {
                floor.pickable = true;
            })
            _this.app.on(THING.EventType.SingleClick, function (ev) {
                if (ev.button == 2 && obj.userData['expand'] == 'true') {
                    $('#expandFloorInfoTips').css('display', 'none');
                    infoTipsClass.hiddenInfoTips('expandFloorInfoTips');
                    $('.infoContainer').removeClass('moveTips');
                    _this.app.pauseEvent(THING.EventType.SingleClick, null, '右键物体创建菜单');
                    _this.app.off(THING.EventType.KeyDown, null, '纵向按下Shift键');
                    if (obj.type == 'Floor') {
                        obj = obj.parent;
                    }
                    _this.expandState = false;
                    obj.userData['expand'] = 'false';
                    $('#verticalExpansion').removeClass('active');
                    $('#expandFloorDataDetails').remove();
                    sceneExpandFloorClass.verticalExpand(obj, 'close');
                    if (sceneBuildTopCardClass != null) {
                        sceneBuildTopCardClass.startFloatAnimation(obj.userData['sceneCard']);
                    }
                    if (obj.facade != null) {
                        obj.floors.visible = false;
                        obj.position = [obj.position[0], obj.position[1] - 0.1, obj.position[2]];
                        // 关闭楼层展开，隐藏marker
                        if (floorsTopCardClass != null) {
                            floorsTopCardClass.expendFloorToMarker(obj);
                        }
                        if (obj.userData['bussiness_groundClearance'] != null) {
                            obj.position = obj.userData['buildInitPos'];
                        }
                        obj.facade.fadeIn({
                            time: 1500,
                            complete: function () {
                                _this.app.resumeEvent(THING.EventType.SingleClick, null, '右键物体创建菜单');
                                _this.app.off(THING.EventType.SingleClick, null, '关闭楼层展开');
                            }
                        })
                        if (sceneCard != null) {
                            let sceneCardParent = obj.floors[obj.floors.length - 1];
                            sceneCardParent.remove(sceneCard);
                            let cardJson = {
                                object: sceneCard,
                                localPosition: [0, 1, 0]
                            }
                            cardJson.localPosition = [obj.boundingBox.center[0] - obj.position[0], obj.size[1] + 15, obj.boundingBox.center[2] - obj.position[2]];
                            if (obj.userData['bussiness_groundClearance'] != null) {
                                let groundClearance = parseFloat(obj.userData['bussiness_groundClearance']);
                                cardJson.localPosition = [obj.boundingBox.center[0] - obj.position[0], obj.size[1] + groundClearance + 10, obj.boundingBox.center[2] - obj.position[2]];
                            }
                            obj.facade.add(cardJson);
                        }
                    } else {
                        // 关闭楼层展开，隐藏marker
                        if (floorsTopCardClass != null) {
                            floorsTopCardClass.expendFloorToMarker(obj);
                        }

                        obj.floors.forEach(floor => {
                            floor.roof.visible = true;
                        });
                        obj.position = [obj.position[0], obj.position[1] - 0.1, obj.position[2]];
                        _this.app.off(THING.EventType.SingleClick, null, '关闭楼层展开');
                        setTimeout(function () {
                            _this.app.resumeEvent(THING.EventType.SingleClick, null, '右键物体创建菜单');
                        }, 500)
                    }
                    setTimeout(function () {
                        _this.app.picker.pickedResultFunc = function (obj) {
                            if (obj.type == 'Floor') {
                                return obj.parent;
                            }
                            return obj;
                        }
                    }, 500)
                }
            }, '关闭楼层展开')
        } else if ($(dom).hasClass('startSelectFloor')) {
            if(_this.tempObj == null) return;
            let obj = _this.tempObj;
            if (obj.type == 'Floor') {
                obj = obj.parent;
            }
            if (obj.type == 'Facade') {
                obj = obj.parent;
            }
            _this.selectState = true;
            _this.app.pauseEvent(THING.EventType.SingleClick, '.Building', '右键物体创建菜单');
            divisionFloorClass.divisionFloorEvent(obj);
        }else if($(dom).hasClass('saveTpProject')){
            if (typeof preAlertClass != 'undefined' && typeof PreConfig != 'undefined' && typeof(PreConfig.getPermission) == 'function' && typeof(PreConfig.getSceneAuthor) == 'function'){
                if(PreConfig.getPermission() == true && PreConfig.getSceneAuthor() == true){
                    preAlertClass.fileNamedDialog({}, function (name, isOpen) {
                        PreConfig.savePreToProject('project', { name: name, isOpen: isOpen}, {
                            success: function () {
                            },
                            fail: function () {
                            },
                            error: function () {
                            },
                            complete: function(){
                            }
                        })
                    })
                }
            }
        }
    }

    /**
     * 禁止右键菜单
     */
    banContextMenu() {

    }

    /**
     * 重置右键菜单
     */
    resetContextMenu(obj) {
        var _this = this;
        _this.expandState = false;
        obj.userData['expand'] = 'false';
        if (obj.type == 'Building' && obj.floors.length > 0) {
            _this.app.off(THING.EventType.KeyDown, null, '纵向按下Shift键');
            _this.app.off(THING.EventType.MouseWheel, null, '滑动滚轮改变楼层纵向间距');
            _this.app.resumeEvent(THING.EventType.SingleClick, null, '右键物体创建菜单');
            _this.app.off(THING.EventType.SingleClick, null, '关闭楼层展开');
            $('#expandFloorInfoTips').css('display', 'none');
            infoTipsClass.hiddenInfoTips('expandFloorInfoTips');
            $('.infoContainer').removeClass('moveTips');
            let floors = obj.floors;
            sceneExpandFloorClass.wheelState = true;
            sceneExpandFloorClass.verticalDistance = 3;
            for (let i = 1; i < floors.length; i++) {
                let floor = floors[i];
                let distance = sceneExpandFloorClass.countVerticalOffsetDistance(floor, floors);
                floor.setAttribute('verticalDistance', distance);
            }
            $('#expandFloorDataDetails').remove();
            if (obj.facade != null) {
                // 有外立面楼层展开缩到0
                if (floorsTopCardClass != null) {
                    floorsTopCardClass.expendFloorToMarker(obj);
                }
                obj.facade.fadeIn();
                if (obj.userData['bussiness_groundClearance'] != null) {
                    obj.position = obj.userData['buildInitPos'];
                }
                floors.visible = false;
                if (obj.userData['sceneCard'] != null) {
                    let sceneCardParent = obj.floors[obj.floors.length - 1];
                    sceneCardParent.remove(obj.userData['sceneCard']);
                    let cardJson = {
                        object: obj.userData['sceneCard'],
                        localPosition: [0, 1, 0]
                    }
                    cardJson.localPosition = [obj.boundingBox.center[0] - obj.position[0], obj.size[1] + 15, obj.boundingBox.center[2] - obj.position[2]];
                    if (obj.userData['bussiness_groundClearance'] != null) {
                        let groundClearance = parseFloat(obj.userData['bussiness_groundClearance']);
                        cardJson.localPosition = [obj.boundingBox.center[0] - obj.position[0], obj.size[1] + groundClearance + 10, obj.boundingBox.center[2] - obj.position[2]];
                    }
                    obj.facade.add(cardJson);
                }
            } else {
                // 没有外立面楼层展开缩到0
                if (floorsTopCardClass != null) {
                    floorsTopCardClass.expendFloorToMarker(obj);
                }
            }
            obj.position = [obj.position[0], obj.position[1] - 0.1, obj.position[2]];
            setTimeout(function () {
                _this.app.picker.pickedResultFunc = function (obj) {
                    if (obj.type == 'Floor') {
                        return obj.parent;
                    }
                    return obj;
                }
            }, 500)
            if (sceneBuildTopCardClass != null) {
                sceneBuildTopCardClass.startFloatAnimation(obj.userData['sceneCard']);
            }
        }
    }

    /**
     * 右键菜单html
     */
    contextMenuHtml() {
        var _this = this;
        let contextMenu =
            `<div id="` + _this.menuId + `" class="context-menu" style="display:block"></div> `;
        $("#div2d").append($(contextMenu));
    }

    /**
     * 右键菜单添加内容
     */
    addcontextMenu(type, id) {
        var _this = this;
        if (_this.app.level.current != null && _this.app.level.current.type == 'Campus' && type == 'Building' && id != null) {
            let menuContent = `
                <div class="context-menu-item expandFloor" data-id="`+ id + `">
                    <div class="context-menu-item-text">楼层展开</div>
                </div>
                <div class="context-menu-item startSelectFloor disable" data-id="`+ id + `">
                    <div class="context-menu-item-text">楼层选择</div>
                </div>`;
            $('.context-menu').append($(menuContent));
        }
        if (window.location.pathname.indexOf('/pre/') == 0 && typeof PreConfig != 'undefined' && typeof(PreConfig.getPermission) == 'function' && typeof(PreConfig.getSceneAuthor) == 'function'){
            if(PreConfig.getPermission() == true && PreConfig.getSceneAuthor() == true){
                let appHtml = 
                    `<div class="context-menu-item saveTpProject" data-type="saveToProject">
                        <div class="context-menu-item-text">生成项目</div>
                    </div>`;
                $('.context-menu').append($(appHtml));
            }
        }
    }
}
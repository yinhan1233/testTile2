
/**
 * 说明： 层级导航 
 * 备注： 此类是为在预览脚本中定义层级导航（园区）
 */
 class PreLevelControl {
    /**
    * 构造方法
    */
    constructor() {
    }
    /**
     * 初始化
     */
    init() {
        this.version = 'v0.1.4';
        this.app = THING.App.current;
        this.randomStr = new Date().getTime().toString();  // 随机字符串
        this.elementId = 'level-navigation-';
        this.levelIndex = 0;
        this.levelIndexList = {
            'country': 0,
            'province': 1,
            'city': 2,
            'district': 3,
            'Campus': 4
        }
        this.levelType = {
            'Campus': '园区',
            'Building': '建筑',
            'Floor': '楼层',
            'Room': '房间',
            'Thing': '物体',
            'Door': '门'
        }
        this.timer = null;
        this.childTimer = null;
        this.create();
    }
    create() {
        var _this = this;
        var liHtml =
            `<li class="level-control setting-item setting-item-split selected">层级导航</li>`;
        $('.light-change').after($(liHtml));
        _this.initHtml();
        _this.createLevelTree();
        _this.registerEvent();
        _this.getLevelCurrentEvent();
        _this.clickHomeLevel();
        _this.closeLevelTree();
        _this.thumbLevelTree();
        _this.refreshLevelTree();
    }
    show() {
        var _this = this;
        if ($('.level-navigation').length > 0) {
            $('.level-navigation').show();
            if ($('.treeTable .tree-btn-panel .tree-btn #thumb' + _this.elementId).hasClass('thumbHover')) {
                $(this).show();
            }
            if ($('.treeTable .tree-btn-panel .tree-btn #thumbChild' + _this.elementId).hasClass('thumbHover')) {
                $(this).show();
            }
        }
    }
    hidden() {
        var _this = this;
        if ($('.level-navigation').length > 0) {
            $('.level-navigation').hide();
            if ($('#' + _this.elementId + 'treeTable').length > 0) {
                $('#' + _this.elementId + 'treeTable').hide();
            }
            if ($('#' + _this.elementId + 'treeChildTable').length > 0) {
                $('#' + _this.elementId + 'treeChildTable').hide();
            }
        }
    }
    destroy() {
        if ($('.level-navigation').length > 0) {
            $('.level-navigation').remove();
        }
    }

    /**
     * 初始化层级导航根节点
     */
    initHtml() {
        var _this = this;
        if (typeof (CMAP) == 'undefined') {
            var currentLevel = _this.app.level.current;
            _this.levelIndex = _this.levelIndexList[currentLevel.type];
            let html =
                `<div id="` + _this.elementId + `Campus" class="level-navigation">
                    <div class="layui-breadcrumb" lay-separator=">">
                        <div class="level-control-home-icon" data-id="` + currentLevel.id + `s" data-level="` + currentLevel.type + `" data-index="` + _this.levelIndex + `" title="` + currentLevel.name + `"></div>
                    </div>
                </div>`;
            $('#div2d').append($(html));
            $('#' + _this.elementId + 'Campus').css('border-radius', '14px');
            $('#' + _this.elementId + 'Campus').css('padding', '1px 5px');
        }
    }

    /**
     * 获取当前层级事件
     */
    getLevelCurrentEvent() {
        var _this = this;
        if (typeof (CMAP) == 'undefined') {
            _this.app.on(THING.EventType.EnterLevel, function () {
                let currentLevel = _this.app.level.current;
                let index = _this.getCurrentLevelIndex(currentLevel);
                _this.changeLevel(currentLevel.name, currentLevel.type, currentLevel.id, index, currentLevel.uuid)
            })
        }
    }

    /**
     * 判断当前层级的索引
     * @params {Object} currentLevel 当前层级对象
     */
    getCurrentLevelIndex(currentLevel) {
        var _this = this;
        if (typeof (CMAP) == 'undefined') {
            if (currentLevel.parents) {
                _this.currentLevelIndex = 4 + (currentLevel.parents.length - 1);
                return _this.currentLevelIndex;
            }
        }
    }

    /**
     * 切换层级
     * @params {String,String,String,Number}
     * name 当前层级名称
     * level 当前层级类型
     * id 当前层级id
     * index 当前层级索引
     */
    changeLevel(name, level, id, index, uuid) {
        var _this = this;
        _this.clickLevelName();
        // _this.dropArrowEvent();
        var type = _this.levelType[level];
        if (typeof (CMAP) == 'undefined') {
            if (_this.levelIndex < index) {
                _this.levelIndex = index;
                let addHtml = `<div class="lay-separator" lay-separator="" data-index="` + _this.levelIndex + `">></div>
                <div class ="addItem"data-id="`+ id + `" data-index="` + _this.levelIndex + `">
                <div class="addItem-content" data-id="` + id + `"data-level="` + level + `" data-index="` + _this.levelIndex + `" data-uuid="` + uuid + `"title="` + name + `">` + type + ` (<span class="levelName">` + name + `</span>)</div>
                </div>`;

                $('#' + _this.elementId + 'Campus .layui-breadcrumb').append($(addHtml));
                let querySelectArr = _this.app.query('#' + id);
                // 判断当前层级是否含有子元素
                if (querySelectArr.length > 0) {
                    for (let i = 0; i < querySelectArr.length; i++) {
                        if (querySelectArr[i].uuid == uuid) {
                            if (querySelectArr[i].children.length > 0) {
                                let childSelectArr = querySelectArr[i].children;
                                // 初始化新数组
                                let newChildSelect = [];
                                childSelectArr.forEach(v => {
                                    if (v.type == 'Thing' || v.type == 'Room' || v.type == 'Door' || v.type == 'Floor' && v.type != 'Marker' && v.type != 'Plane' && v.type != 'Facade') {
                                        newChildSelect.push(v)
                                    }
                                })
                                if (newChildSelect.length > 0) {
                                    let addArrowHtml =
                                        `<div class="dropDown-box" data-id="` + id + `">
                                            <div class="dropDown-arrow" data-index="` + _this.levelIndex + `"data-id="` + id + `""data-level="` + level + `"" data-uuid="` + uuid + `"></div>
                                        </div>`;
                                    $('.addItem[data-id="' + id + '"]').append($(addArrowHtml));
                                    _this.dropArrowEvent();
                                }
                            }
                        }
                    }


                }
                $('#' + _this.elementId + 'Campus').css('border-radius', '14px 4px 4px 14px');
                $('#' + _this.elementId + 'Campus').css('padding', '0px 10px 0px 5px');
                // 清除面板所有阴影
                $('#levelTree .layui-tree-entry').css('background-color', '');
                $($("#levelTree div[data-id='" + uuid + "'] .layui-tree-entry")[0]).css('background-color', '#1c1f20');
                $('#levelChildTree .layui-tree-entry').css('background-color', '');
                $($("#levelChildTree div[data-id='" + uuid + "'] .layui-tree-entry")[0]).css('background-color', '#1c1f20');
            } else if (_this.levelIndex > index) {
                if (index == null) return;
                if (index == 4) {
                    $('#' + _this.elementId + 'Campus').css('border-radius', '14px');
                    $('#' + _this.elementId + 'Campus').css('padding', '0px 5px');
                }
                for (let i = index + 1; i <= _this.levelIndex; i++) {
                    $('#' + _this.elementId + 'Campus .layui-breadcrumb').children('[data-index="' + i + '"]').remove();
                    var treeIndex = index + 1;
                    $('#' + _this.elementId + 'treeChildTable[data-index="' + treeIndex + '"]').remove();
                }
                _this.levelIndex = index;
                $('#levelTree .layui-tree-entry').css('background-color', '');
                $($("#levelTree div[data-id='" + uuid + "'] .layui-tree-entry")[0]).css('background-color', '#1c1f20');
                $('#levelChildTree .layui-tree-entry').css('background-color', '');
                $($("#levelChildTree div[data-id='" + uuid + "'] .layui-tree-entry")[0]).css('background-color', '#1c1f20');
            }
        }
    }

    /**
     * 层级点击事件 根据名称查询切换层级（默认最后一层不添加点击事件）
     */
    clickLevelName() {
        var _this = this;
        // $('#' + _this.elementId + 'Campus span.layui-breadcrumb p').on('click', function () {
        $('#' + _this.elementId + 'Campus .layui-breadcrumb .addItem-content').on('click', function () {
            _this.clicklevelIndex = $(this).attr('data-index');
            let levelid = $(this).attr('data-id');
            let levelName = $(this).attr('title');
            let levelUuid = $(this).attr('data-uuid');
            if (typeof (CMAP) == 'undefined') {
                var queryArr = _this.app.query('#' + levelid);
                // 判断当前id查询的结果是否为多个
                if (queryArr.length > 0) {
                    for (let i = 0; i < queryArr.length; i++) {
                        // 从当前结果集中移除type为Ground的对象
                        if (queryArr[i].type == 'Ground') {
                            queryArr.remove(queryArr[i])
                        }
                    }
                    if (queryArr.length > 0) {
                        for (let i = 0; i < queryArr.length; i++) {
                            // 否则当当前查询id的结果集大于0的前提下判断对象的name
                            if (queryArr[i].name == levelName) {
                                if (queryArr[i].uuid == levelUuid) {
                                    _this.app.level.change(queryArr[i])
                                }
                            }
                        }
                    }
                }
            }
        })
    }

    /**
     * 点击Campus层级事件
     */
    clickHomeLevel() {
        var _this = this;
        // $('#' + _this.elementId + 'Campus span.layui-breadcrumb .level-control-home-icon').on('mousedown', function (ev) {
        $('#' + _this.elementId + 'Campus .layui-breadcrumb .level-control-home-icon').on('mousedown', function (ev) {
            if ($('#' + _this.elementId + 'treeChildTable').length > 0) {
                $('#' + _this.elementId + 'treeChildTable').remove();
            }
            let levelName = $(this).attr('title');
            if ($('#' + _this.elementId + 'treeTable').css('display') == 'none') {
                $('#levelTree .layui-tree-entry').css('background-color', '');
                $('#' + _this.elementId + 'treeTable').slideDown();
                $('#' + _this.elementId + 'treeTable').css('display', 'block')
            }
            // 查询到根节点，设置小三角旋转
            $($("#levelTree div[data-id='0'] .layui-tree-entry")[0]).find('i').removeClass().addClass('layui-tree-iconArrow iconclickAni');

            // 获取当前层级
            let curLevel = _this.app.level.current;
            $('#levelTree .layui-tree-entry').css('background-color', '');
            $($("#levelTree div[data-id='" + curLevel.uuid + "'] .layui-tree-entry")[0]).css('background-color', '#1c1f20');
            _this.mouseEnterTreeTable();
        })
    }
    registerEvent() {
        var _this = this;
        $('#sceneSetting .control-menu-pane li.level-control').on('click', function (ev) {
            ev.stopPropagation();
            $(this).parents('.control-menu').removeClass('actives');
            $(this).parents('.control-item').removeClass('active');
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
                if ($(this).hasClass('level-control')) {
                    _this.hidden();
                }
            } else {
                $(this).addClass('selected');
                if ($(this).hasClass('level-control')) {
                    _this.show();
                }
            }
        })
    }

    // 下拉箭头点击事件
    dropArrowEvent() {
        var _this = this;
        if ($('.dropDown-arrow').length > 0) {
            $('.dropDown-arrow').on('click', function () {
                if ($('#' + _this.elementId + 'treeChildTable').length > 0) {
                    $('#' + _this.elementId + 'treeChildTable').remove();
                }
                var id = $(this).attr('data-id');
                var uuid = $(this).attr('data-uuid');
                var index = $(this).attr('data-index')
                var pos = _this.getDivPosition($('.addItem[data-id="' + id + '"]')[0]);
                var queryArrSelect = _this.app.query('#' + id);
                if (queryArrSelect.length > 0) {
                    for (let i = 0; i < queryArrSelect.length; i++) {
                        if (queryArrSelect[i].uuid == uuid) {
                            var objClick = queryArrSelect[i];
                            _this.createChildTree(objClick, pos, index);
                            if ($('#' + _this.elementId + 'treeChildTable').css('display') == 'none') {
                                $('#levelChildTree .layui-tree-entry').css('background-color', '');
                                $('#' + _this.elementId + 'treeChildTable').slideDown();
                                $('#' + _this.elementId + 'treeChildTable').css('display', 'block')
                            }
                            // 获取当前层级
                            let curLevel = _this.app.level.current;
                            $($("#levelChildTree div[data-id='" + objClick.uuid + "'] .layui-tree-entry")[0]).find('i').removeClass().addClass('layui-tree-iconArrow iconclickAni');
                            $('#levelChildTree .layui-tree-entry').css('background-color', '');
                            $($("#levelChildTree div[data-id='" + curLevel.uuid + "'] .layui-tree-entry")[0]).css('background-color', '#1c1f20');
                            _this.mouseEnterChildTreeTable();
                            _this.closeChildLevelTree();
                            _this.thumbChildLevelTree();
                            _this.refreshLevelTree();
                        }
                    }
                }
            })
        }
    }
    getDivPosition(div) {
        var x = div.getBoundingClientRect().left;
        return x;
    }
    getCurrentRootData(obj) {
        var childData = [];
        childData.push(this.getCurrentLevelData(obj))
        return childData;
    }
    /**
     * 获取当前点击的层级
     * @returns 
     */
    getCurrentLevelData(obj) {
        var _this = this;
        var type = _this.levelType[obj.type];
        var childData = {
            id: obj.uuid,
            name: obj.id,
            title: type + ' (' + obj.name + ')',
            spread: true
        };
        childData["children"] = [];
        var objectArr = [];
        for (let key in obj.children) {
            var type = obj.children[key].type;
            if (type == 'Floor' || type == 'Building' || type == 'Door' || type == 'Room' || type == 'Thing' && type != 'Facade' && type != 'Marker') {
                objectArr[key] = obj.children[key]
            }
        }
        var filtered = objectArr.filter(function (el) {
            return el != null;
        });
        filtered.forEach(function (child) {
            childData["children"].push(_this.getCurrentLevelChildData(child));
        })
        return childData;
    }
    getCurrentLevelChildData(child) {
        var _this = this;
        var type = _this.levelType[child.type];
        return {
            id: child.uuid,
            name: child.id,
            title: type + ' (' + child.name + ')'
        };
    }

    /**
     * 创建子集的树形结构
     * @returns 
     */
    createChildTree(obj, pos, index) {
        var _this = this;
        let treeHtml = `<div class="treeTable" id="` + _this.elementId + `treeChildTable" data-index="` + index + `" style="left:` + pos + `px;top:49px">
        <div class="tree-btn-panel">
            <div class="tree-title">场景信息</div>
            <div class="tree-btn">
                <span class="seticonfont icon-shuaxin pre-refresh"></span>
                <span class="thumb thumbimg" id="thumbChild`+ _this.elementId + `">
                    <span></span>            
                </span>
                <span class="close"></span>
            </div>
        </div>
        <div id="levelChildTree" class="demo-tree-more"></div>
    </div>`
        $('#div2d').append($(treeHtml));
        var data = _this.getCurrentRootData(obj);
        _this.layuiDataWrite(data, '#levelChildTree');
    }
    /**
     * 获取园区层级，置为根节点 
     */
    getRootLevelData() {
        var _this = this;
        var data = [];
        var campus = _this.app.query('.Campus');
        if(campus.length > 0){
            data.push(this.campusLevelData(campus[0]));
        }
        return data;
    }
    /**
     * 根节点信息由建筑和室外物体组成
     * @param {Object} campus - 园区类
     */
    campusLevelData(campus) {
        var _this = this;
        var type = _this.levelType[campus.type];
        var camera = this.app.query('[物体类型=摄像头]').objects;  // 场景里是否存在摄像头
        var data = {
            id: campus.uuid,
            name: campus.id,
            title: type,
            spread: true
        };
        data["children"] = [];
        campus.buildings.forEach(function (building) {
            data["children"].push(_this.getBuildingData(building));
        });
        campus.things.forEach(function (thing) {
            data["children"].push(_this.getThingData(thing));
        });

        if (camera.length > 0) {
            data.title = type + `<span class="camera-badge"></span><span class="circle" title="监控摄像头` + camera.length + `个">` + camera.length + `</span>`;
        }
        return data;
    }

    /**
     * 收集建筑信息
     * @param {Object} building - 建筑对象
     */
    getBuildingData(building) {
        var _this = this;
        var type = _this.levelType[building.type];
        var camera = [];
        var data = {
            id: building.uuid,
            name: building.id,
            title: type + ' (' + building.name + ')'
        };
        data["children"] = [];
        building.floors.forEach(function (floor) {
            data["children"].push(_this.getFloorData(floor));
            floor.things.forEach(function (thing) {
                if (thing.userData['物体类型'] == '摄像头') {
                    camera.push(thing);
                    data.title = type + ' (' + building.name + ')' + `<span class="camera-badge"></span>`;
                }
            })
        });
        return data;
    }

    /**
     * 收集楼层信息
     * @param {Object} floor - 楼层对象
     */
    getFloorData(floor) {
        var _this = this;
        var type = _this.levelType[floor.type];
        var camera = [];
        var data = {
            id: floor.uuid,
            name: floor.id,
            title: type + ' (' + floor.name + ')'
        };
        data["children"] = [];
        floor.things.forEach(function (thing) {
            data["children"].push(_this.getThingData(thing));
            if (thing.userData['物体类型'] == '摄像头') {
                camera.push(thing);
                data.title = type + ' (' + floor.name + ')' + `<span class="camera-badge" title="监控摄像头"></span>`;
            }
        });
        return data;
    }

    /**
     * 物体对象
     * @param {Object} thing - 物对象
     */
    getThingData(thing) {
        var _this = this;
        var type = _this.levelType[thing.type];
        var data = {
            id: thing.uuid,
            name: thing.id,
            title: type + ' (' + thing.name + ')'
        }
        if (thing.userData['物体类型'] == '摄像头') {
            data.title = type + ' (' + thing.name + ')' + `<span class="camera-badge" title="监控摄像头"></span>`;
        }
        return data;
    }



    /**
     * 创建树形结构html
     */
    createLevelTree() {
        var _this = this;
        var pos = _this.getDivPosition($('#' + _this.elementId + 'Campus')[0]);
        let treeHtml = `<div class="treeTable" id="` + _this.elementId + `treeTable" style="left:` + pos + `px">
            <div class="tree-btn-panel">
                <div class="tree-title">场景信息</div>
                <div class="tree-btn">
                    <span class="seticonfont icon-shuaxin pre-refresh"></span>
                    <span class="thumb thumbimg" id="thumb`+ _this.elementId + `">
                        <span></span>            
                    </span>
                    <span class="close"></span>
                </div>
            </div>
            <div id="levelTree" class="demo-tree-more"></div>
        </div>`
        $('#div2d').append($(treeHtml));
        var data = _this.getRootLevelData();
        _this.layuiDataWrite(data, '#levelTree');
    }

    /**
     * layui 创建树形结构
     */
    layuiDataWrite(data, dom) {
        var _this = this;
        layui.use(["tree", "util"], function () {
            var tree = layui.tree;
            var layer = layui.layer;
            var util = layui.util;
            // var data = _this.getRootLevelData();
            //无连接线风格
            tree.render({
                elem: dom,
                data: data,
                showLine: false,  //是否开启连接线
                click: function (obj) {
                    // 清除背景色
                    $('.demo-tree-more .layui-tree-entry').css('background-color', '');
                    $($("div[data-id='" + obj.data.id + "'] .layui-tree-entry")[0]).css('background-color', '#1c1f20');
                    var levelObjArr = _this.app.query('#' + obj.data.name);
                    // 判断当前查询对象的长度
                    if (levelObjArr.length > 0) {
                        // 判断当前查询对象的type是否为Ground，从查询到的数组中移除掉
                        for (let i = 0; i < levelObjArr.length; i++) {
                            if (levelObjArr[i].type == 'Ground') {
                                levelObjArr.remove(levelObjArr[i])
                            }
                        }
                        // 判断当前查询对象是否存在id相同
                        if (levelObjArr.length > 0) {
                            for (let i = 0; i < levelObjArr.length; i++) {
                                // 如果查询对象对象为Campus，直接切换层级
                                if (levelObjArr[i].id == 'Campus') {
                                    _this.app.level.change(levelObjArr[i])
                                } else {
                                    // 否则当当前查询id的结果集大于0的前提下判断对象的name
                                    var tit = obj.data.title;
                                    var index = tit.lastIndexOf("\(");
                                    tit = tit.substring(index + 1, tit.length - 1);
                                    if (levelObjArr[i].name == tit) {
                                        if (levelObjArr[i].uuid == obj.data.id) {
                                            _this.app.level.change(levelObjArr[i])
                                        }

                                    }
                                }
                            }
                        }
                    }
                    if (!$($("#levelTree div[data-id='" + obj.data.id + "'] .layui-tree-main")[0]).find('i').hasClass('layui-hide')) {
                        if (obj.state == 'open') {
                            $($("#levelTree div[data-id='" + obj.data.id + "'] .layui-tree-main")[0]).find('i').removeClass().addClass('layui-tree-iconArrow iconclickAni');
                        } else if (obj.state == 'close') {
                            $($("#levelTree div[data-id='" + obj.data.id + "'] .layui-tree-main")[0]).find('i').removeClass().addClass('layui-tree-iconArrow iconclickBackAni')
                        }
                    }
                    if (!$($("#levelChildTree div[data-id='" + obj.data.id + "'] .layui-tree-main")[0]).find('i').hasClass('layui-hide')) {
                        if (obj.state == 'open') {
                            $($("#levelChildTree div[data-id='" + obj.data.id + "'] .layui-tree-main")[0]).find('i').removeClass().addClass('layui-tree-iconArrow iconclickAni');
                        } else if (obj.state == 'close') {
                            $($("#levelChildTree div[data-id='" + obj.data.id + "'] .layui-tree-main")[0]).find('i').removeClass().addClass('layui-tree-iconArrow iconclickBackAni')
                        }
                    }
                }
            });
        })
    }

    /**
     * 关闭场景信息面板事件
     */
    closeLevelTree() {
        var _this = this;
        $('#' + _this.elementId + 'treeTable .tree-btn-panel .tree-btn .close').on('click', function () {
            $('#' + _this.elementId + 'treeTable').slideUp();
            $('#levelTree .layui-tree-entry').css('background-color', '');
            setTimeout(function () {
                $('#' + _this.elementId + 'treeTable').css('display', 'none');
            }, 500)
        })

    }
    closeChildLevelTree() {
        var _this = this;
        $('#' + _this.elementId + 'treeChildTable .tree-btn-panel .tree-btn .close').on('click', function () {
            $('#' + _this.elementId + 'treeChildTable').slideUp();
            $('#levelChildTree .layui-tree-entry').css('background-color', '');
            setTimeout(function () {
                $('#' + _this.elementId + 'treeChildTable').css('display', 'none');
            }, 500)
        })
    }
    /**
     * 锁定场景信息面板事件
     */
    thumbLevelTree() {
        var _this = this;
        // 点击事件
        $('#' + _this.elementId + 'treeTable .tree-btn-panel .tree-btn #thumb' + _this.elementId).on('click', function () {
            if ($(this).hasClass('thumbHover')) {
                $(this).removeClass('thumbHover');
                _this.setTimer();
                return;
            } else {
                _this.clearTimer();
                $(this).addClass('thumbHover');
                return;
            }
        })

    }
    /**
     * 锁定子集场景信息面板
     */
    thumbChildLevelTree() {
        var _this = this;
        $('#' + _this.elementId + 'treeChildTable .tree-btn-panel .tree-btn #thumbChild' + _this.elementId).on('click', function () {
            if ($(this).hasClass('thumbHover')) {
                $(this).removeClass('thumbHover');
                _this.setChildTimer();
                return;
            } else {
                _this.clearChildTimer();
                $(this).addClass('thumbHover');
                return;
            }
        })
    }
    /**
     * 设置定时器
     */
    setChildTimer() {
        var _this = this;
        if (_this.childTimer == null) {
            _this.childTimer = setTimeout(function () {
                clearTimeout(_this.childTimer)
                _this.childTimer = null;
                $('#' + _this.elementId + 'treeChildTable').slideUp();
            }, 5000)
        }
    }

    /**
     * 关闭定时器
     */
    clearChildTimer() {
        var _this = this;
        if (_this.childTimer != null) {
            clearTimeout(_this.childTimer)
            _this.childTimer = null;
        }
    }
    /**
     * 刷新场景信息面板事件
     */
    refreshLevelTree() {
        var _this = this;
        $('#' + _this.elementId + 'treeTable .tree-btn-panel .pre-refresh').on('click', function () {
            $('#levelTree').remove();
            let appendHtml = `<div id="levelTree" class="demo-tree-more"></div>`;
            $('#' + _this.elementId + 'treeTable').append($(appendHtml));
            var data = _this.getRootLevelData();
            _this.layuiDataWrite(data, '#levelTree');
        })
        $('#' + _this.elementId + 'treeChildTable .tree-btn-panel .pre-refresh').on('click', function () {
            $('#levelChildTree').remove();
            let appendHtml = `<div id="levelChildTree" class="demo-tree-more"></div>`;
            $('#' + _this.elementId + 'treeChildTable').append($(appendHtml));
            var data = _this.getRootLevelData();
            _this.layuiDataWrite(data, '#levelChildTree');
        })
    }

    /**
     * 设置定时器
     */
    setTimer() {
        var _this = this;
        if (_this.timer == null) {
            _this.timer = setTimeout(function () {
                clearTimeout(_this.timer)
                _this.timer = null;
                $('#' + _this.elementId + 'treeTable').slideUp();
            }, 5000)
        }
    }

    /**
     * 关闭定时器
     */
    clearTimer() {
        var _this = this;
        if (_this.timer != null) {
            clearTimeout(_this.timer)
            _this.timer = null;
        }
    }
    /**
     * 鼠标滑入树形结构面板
     */
    mouseEnterTreeTable() {
        var _this = this;
        $('#' + _this.elementId + 'treeTable').hover(function () {
            if (!$('.treeTable .tree-btn-panel .tree-btn #thumb' + _this.elementId).hasClass('thumbHover')) {
                _this.clearTimer();
            }
        })
        $('#' + _this.elementId + 'treeTable').on('mouseleave', function () {
            if (!$('.treeTable .tree-btn-panel .tree-btn #thumb' + _this.elementId).hasClass('thumbHover')) {
                if (_this.timer != null) {
                    clearTimeout(_this.timer);
                    _this.timer = null;
                    _this.setTimer();
                } else {
                    _this.setTimer();
                }
            }
        })

    }
    mouseEnterChildTreeTable() {
        var _this = this;
        $('#' + _this.elementId + 'treeChildTable').hover(function () {
            if (!$('.treeTable .tree-btn-panel .tree-btn #thumbChild' + _this.elementId).hasClass('thumbHover')) {
                _this.clearChildTimer();
            }
        })
        $('#' + _this.elementId + 'treeChildTable').on('mouseleave', function () {
            if (!$('.treeTable .tree-btn-panel .tree-btn #thumbChild' + _this.elementId).hasClass('thumbHover')) {
                if (_this.childTimer != null) {
                    clearTimeout(_this.childTimer);
                    _this.childTimer = null;
                    _this.setChildTimer();
                } else {
                    _this.setChildTimer();
                }
            }
        })
    }
}
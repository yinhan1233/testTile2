var positionInit = [39.235, 44.705, 39.235, 44.705, 39.235, 44.705, 42.940]
//四楼货架的位置
var positionArr = [
    [39.235, 19.674, 10.96],
    [44.705, 19.674, 10.96],
    [39.235, 19.674, 13.35],
    [44.705, 19.674, 13.35],
    [39.235, 19.674, 15.63],
    [44.705, 19.674, 15.63],
    [42.940, 19.674, 23.68]
]
// 五楼货架位置
var positionInit_5 = [-0.04, -0.04];
var positionArr1 = [
    [-0.04, 25.67, 21.10],
    [-0.04, 25.67, 23.10]
];


var height = [19.674, 25.67];

function shelvesAddBox(num) {
    var reg = new RegExp(num + "_0");//正则表达式匹配含 4_0或5_0 的字符串
    for (var i = 1; i <= app.query("成都点火装配" + num + "楼").app.query(reg).length; i++) {
        var obj = {
            name: "#" + num + "_0" + i + "货架",
            shelvesnum: i,
            floornum: num
        }
        if (num == 4) {
            shelvesAdd(positionArr[i - 1], obj);//四楼的货架上物料盒添加
        } else {
            shelvesAdd(positionArr1[i - 1], obj);//五楼的货架上物料盒添加
        }
    }

}

//在四五楼的每个货架上分别添加物料盒
function shelvesAdd(position, object) {
    // 创建Thing 
    for (var i = 0; i < 8; i++) {//外循环8层
        position[1] = position[1] - i * 0.2;//确定每一层第一个物料盒的位置
        for (var j = 0; j < 21; j++) {//内循环21列
            app.create({
                type: 'Material',
                id: object.floornum + '层_0' + object.shelvesnum + '货架_Materialbox_' + (j + 1) + '_第' + (i + 1) + '层',
                name: object.floornum + '层_0' + object.shelvesnum + '货架_Materialbox_' + (j + 1) + '_第' + (i + 1) + '层',
                url: "/api/models/2c2c10bc844c4e769ff7351cf70de9d4/0/gltf/", // 模型地址 
                userData: "Materialbox",
                position: position, // 世界坐标系下的位置
                complete: function (ev) {
                    //物体创建成功以后执行函数
                }
            });
            var newposition_X = position[0] + 0.255;
            position[0] = newposition_X;
        }
        if (object.floornum == 4) {
            position[0] = positionInit[object.shelvesnum - 1];
            position[1] = height[0];
        } else {
            position[0] = positionInit_5[object.shelvesnum - 1];
            position[1] = height[1];
        }
    }
    var reg = new RegExp(object.floornum + '层_0' + object.shelvesnum + '货架_Materialbox_');
    var sel = app.query(reg);//查找到此货架上的所有物料盒
    var shelves = app.query(object.name)[0];
    for (var k = 0; k < sel.length; k++) {//将每一个物料盒绑定在货架的子元素架板上
        // debugger;
        // var nodesix = shelves.subNodes[6];
        // nodesix.add(sel[k]);
        shelves.subNodes.forEach(obj => {
            if(obj._name == "架板"){
                if(!isEmpty(obj)){
                   obj.add(sel[k]);
                }
             return true;
            }
        });
        
    }
}














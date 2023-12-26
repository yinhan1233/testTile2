var horizontalDistance = 1; // 横向展开楼层间距
var verticalDistance = 7; // 垂直展开楼层间距

/**
 * 说明：给建筑添加初始点坐标
 */
function addFloorPos(building) {
  let floors = building.floors;
  let pos = floors[1].getAttribute("initPos");
  if (pos != null) {
    return;
  }
  for (let i = 1; i < floors.length; i++) {
    let floor = floors[i];
    let initPos = floor.position;
    floor.setAttribute("initPos", initPos);
    let horizontalDistance = countHorizontalOffsetDistance(floor, floors);
    floor.setAttribute("horizontalDistance", horizontalDistance);
    let verticalDistance = countVerticalOffsetDistance(floor, floors);
    floor.setAttribute("verticalDistance", verticalDistance);
  }
}

/**
 * 说明：楼层横向展开/折叠
 */
function horizontalExpand(building, state) {
  building.setAttribute("expandState", "moving");
  let floors = building.floors;
  for (let i = 1; i < floors.length; i++) {
    let floor = floors[i];
    let distance = floor.getAttribute("horizontalDistance");
    if (distance == null) {
      distance = countHorizontalOffsetDistance(floor, floors);
      floor.setAttribute("horizontalDistance", distance);
    }
    if (state != "close") {
      distance = -distance;
    }
    floor.moveTo({
      offsetPosition: [0, 0, distance],
      time: 600,
      orientToPath: false,
      complete: function () {
        if (state == "close") {
          building.setAttribute("expandState", "close");
        } else {
          building.setAttribute("expandState", "horizontal");
        }
      },
    });
  }
}

/**
 * 说明：楼层纵向展开/折叠
 */
function verticalExpand(building, state) {
  building.setAttribute("expandState", "moving");
  let floors = building.floors;
  for (let i = 1; i < floors.length; i++) {
    let floor = floors[i];
    let distance = floor.getAttribute("verticalDistance");
    if (distance == null) {
      console.log("---");
      distance = countVerticalOffsetDistance(floor, floors);
      floor.setAttribute("verticalDistance", distance);
    }
    if (state == "close") {
      distance = -distance;
    }
    floor.moveTo({
      offsetPosition: [0, distance, 0],
      time: 600,
      orientToPath: false,
      complete: function () {
        if (state == "close") {
          building.setAttribute("expandState", "close");
        } else {
          building.setAttribute("expandState", "vertical");
        }
      },
    });
  }
}

/**
 * 说明：横向展开状态下纵向展开
 */
function horizontalToVertical(building) {
  building.setAttribute("expandState", "moving");
  let floors = building.floors;
  for (let i = 0; i < floors.length; i++) {
    let floor = floors[i];
    let distance = floor.getAttribute("horizontalDistance");
    floor.moveTo({
      offsetPosition: [0, 0, distance],
      time: 600,
      orientToPath: false,
      complete: function () {
        if (i == floors.length - 1) {
          verticalExpand(building, "vertical");
        }
      },
    });
  }
}

/**
 * 说明：纵向展开状态下横向展开
 */
function verticalToHorizontal(building) {
  building.setAttribute("expandState", "moving");
  let floors = building.floors;
  for (let i = 1; i < floors.length; i++) {
    let floor = floors[i];
    let distance = floor.getAttribute("verticalDistance");
    floor.moveTo({
      offsetPosition: [0, -distance, 0],
      time: 600,
      orientToPath: false,
      complete: function () {
        if (i == floors.length - 1) {
          horizontalExpand(building, "horizontal");
        }
      },
    });
  }
}

/**
 * 说明：退出层级后楼层折叠
 */
function exitBuildingCloseFloor(building) {
  let expandState = building.getAttribute("expandState");
  if (expandState == "close") {
    return;
  }
  let floors = building.floors;
  for (let i = 1; i < floors.length; i++) {
    let floor = floors[i];
    floor.stopMoving();
    let initPos = floor.getAttribute("initPos");
    floor.position = initPos;
    building.setAttribute("expandState", "close");
  }
}

/**
 * 说明：计算每层楼横向偏移的距离
 */
function countHorizontalOffsetDistance(floor, floors) {
  let indexOfBuilding = floor.indexOfBuilding;
  let floorZ1 = floor.getAttribute("horizontalSpacing");
  if (floorZ1 == null) {
    floorZ1 = countHorizontalSpacing(floor, floors);
  }
  let distance = 0;
  for (let i = indexOfBuilding; i > 0; i--) {
    distance += floorZ1 + horizontalDistance;
    if (i - 1 > 0) {
      let floorpre = floors[i - 1];
      let floorZ2 = floorpre.getAttribute("horizontalSpacing");
      if (floorZ2 == null) {
        floorZ2 = countHorizontalSpacing(floorpre, floors);
      }
      floorZ1 = floorZ2;
    }
  }
  return distance;
}

/**
 * 说明：计算每层楼纵向偏移的距离
 */
function countVerticalOffsetDistance(floor, floors) {
  let indexOfBuilding = floor.indexOfBuilding;
  let floorZ1 = getFloorHeight(floor);
  let distance = 0;
  for (let i = indexOfBuilding - 1; i >= 0; i--) {
    let floorpre = floors[i];
    let floorZ2 = getFloorHeight(floorpre);
    distance += floorZ1 + verticalDistance;
    floorZ1 = floorZ2;
  }
  return distance;
}

function countHorizontalSpacing(floor, floors) {
  let indexOfBuilding = floor.indexOfBuilding;
  if (indexOfBuilding > 0) {
    let floorpre = floors[indexOfBuilding - 1];
    let center1 = floor.boundingBox.center;
    let center2 = floorpre.boundingBox.center;
    let centerToCenter = countPlanRange(center1, center2);
    let floorWidth = getFloorWidth(floor) / 2;
    let floorpreWidth = getFloorWidth(floorpre) / 2;
    let spacing = floorWidth + centerToCenter + floorpreWidth;
    floor.setAttribute("horizontalSpacing", spacing);
    return spacing;
  }
}

/**
 * 说明：获取楼层宽度
 */
function getFloorWidth(floor) {
  let size = floor.size;
  return size[2];
}

/**
 * 说明：获取楼层高度
 */
function getFloorHeight(floor) {
  let size = floor.size;
  return size[1];
}

function countPlanRange(pos1, pos2) {
  let pos01 = [pos1[0], 0, pos1[2]];
  let pos02 = [pos2[0], 0, pos2[2]];
  let distance = THING.Math.getDistance(pos01, pos02);
  if (pos1[2] >= pos2[2]) {
    return distance;
  }
  return -distance;
}

function newAlert(msg, type, title, fn) {
  var content = setWH(msg, type);
  let swalData = {
    type: type,
    title: title || "温馨提示",
    html: content,
    confirmButtonText: "确定",
    showConfirmButton: type == "success" ? false : true,
  };
  if (type == "success") {
    swalData.timer = 1500;
  }
  swal(swalData).then(function (value) {
    if (value) {
      if (fn) fn();
    }
  });
  $(".swal2-container").addClass("newalert");
}
function newConfirm(msg, btnArr, fnArr) {
  var str = "";
  fnArr = fnArr || [];
  for (var i = 0; i < btnArr.length; i++) {
    str += "<button class='btn_item" + i + "'>" + btnArr[i] + "</button>";
  }
  var btn = `<div class='footer-btn'>` + str + `</div>`;
  swal({
    type: "warning",
    title: "温馨提示",
    html: setWH(msg, "confirm"),
    showConfirmButton: false,
    footer: btn,
  });
  $(".swal2-container").addClass("newalert");
  $(".swal2-footer .footer-btn").on("click", "button", function () {
    if (fnArr[$(this).index()]) {
      fnArr[$(this).index()]();
    } else {
      swal_close();
    }
  });
}
function swal_close() {
  swal.close();
}
function getStrLength(str) {
  if (str) {
    var r = /[^\x00-\xff]/g;
    return str.replace(r, "mm").length;
  }
  return 0;
}
function setWH(msg, type) {
  var type = type || "warning";
  var strLength = getStrLength(msg) / 40;
  var lineNum = Math.ceil(strLength);
  var width = 465 * (0.618 + 0.1 * (lineNum - 1)) - 40;
  var newLineNum = Math.ceil(
    (getStrLength(msg) * 14 * 12) / 24 / (width - 50 - 48)
  );
  var msgHeight = newLineNum * 20;
  var height = (width + 48) * 0.618 - 102 - 32;
  var marginH = (height - msgHeight - 20) / 2 + (newLineNum > 1 ? 1 : -4);
  var typeIcon = `<div class="` + type + `-icon"></div>`;
  var msgDiv =
    `<div class="msg" style='margin-top:` +
    (newLineNum > 1 ? 0 : 3) +
    `px'>` +
    msg +
    `</div>`;
  var content =
    `<div class='main' style="width:` +
    width +
    `px;margin:` +
    marginH +
    `px auto">` +
    typeIcon +
    msgDiv +
    `</div>`;
  return content;
}

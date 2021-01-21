document.write("<h3>가위 바위 보 맞추기</h3>");

var game = prompt("가위, 바위, 보", "가위");
var gameNum;

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못작성하였습니다.");
    location.reload();
}

var com = Math.ceil(Math.random() * 3);

if (com == 1) {
  var result = "가위";
} else if (com == 2) {
  var result = "바위";
} else {
  var result = "보";
}

document.write("당신의 대답 : " + game + "<br>");
document.write("컴퓨터의 생각 : " + result + "<br>");

if (gameNum == com) {
  document.write("맞췄습니다.");
} else {
  document.write("틀렸습니다.");
}

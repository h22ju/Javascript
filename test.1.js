var transportation = 3000;
var food = 6000;
var beverage = 3000;
var maximum = 10000;
var sum = transportation + food + beverage;
var result = sum - maximum;

if (sum > maximum) {
  document.write("하루 적정 지출 비용 " + result + "원 초과");
} else if (sum <= maximum) {
  document.write("돈 관리 잘했어요!");
}

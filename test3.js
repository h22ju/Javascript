var i = 1;

while (i <= 9) {
  document.write("5*" + i + "=" + i * 5, "<br>");
  i++;
}

for (var j = 1; j <= 9; j++) {
  document.write("5*" + j + "=" + j * 5, "<br>");
}

for (var k = 1; k <= 9; k++) {
  for (var t = 1; t <= 9; t++) {
    document.write(k + "*" + t + "=" + k * t, "<br>");
  }
  document.write("<br>");
}

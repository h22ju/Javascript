var i = 1;
document.write("<table border=1>");

for (var row = 1; row <= 5; row++) {
  document.write("<tr>");

  for (var col = 1; col <= 5; col++) {
    document.write("<td>" + i + "</td>");
    i++;
  }
  document.write("</tr>");
}
document.write("</table>");

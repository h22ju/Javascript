function calculate(commmand, a, b) {
  switch (commmand) {
    case "add":
    case "+":
      console.log(`${a}+${b} = ${a + b}`);
      break;
    case "substract":
    case "-":
      console.log(`${a}-${b} = ${a - b}`);
      break;
    case "divide":
    case "/":
      console.log(`${a}/${b} = ${a / b}`);
      break;
    case "multiply":
    case "*":
      console.log(`${a}*${b} = ${a * b}`);
      break;
    case "remainder":
    case "%":
      console.log(`${a}%${b} = ${a % b}`);
      break;

    default:
      console.log(`unknown command`);
      break;
  }
}

calculate("+", 1, 2);
calculate("add", 1, 2);

calculate("-", 1, 2);
calculate("substract", 1, 2);

calculate("/", 1, 2);
calculate("divide", 1, 2);

calculate("*", 1, 2);
calculate("multiply", 1, 2);

calculate("%", 1, 2);
calculate("remainder", 1, 2);

calculate("=", 1, 2);

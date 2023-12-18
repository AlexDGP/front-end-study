const readline = require("readline").createInterface(process.stdin);
readline.on("line", function (value) {
  let number = parseInt(value);
  const sqrtValue = Math.sqrt(number);
  const arr = [];
  for (let i = 2; i * i <= number; i++) {
    while (number % i === 0) {
      arr.push(i);
      number = number / i;
    }
  }
  if (number !== 1) {
    arr.push(number);
  }
  console.log(arr.join(" "));
});

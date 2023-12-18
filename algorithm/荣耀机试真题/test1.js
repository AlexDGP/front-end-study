const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result;
readline.on("line", function (line) {
  result = getRes(parseInt(line));
});
readline.on("close", function () {
  console.log(result);
});

function getRes(n) {
  if (n === 1) return 1;
  if (n > 1) return getRes(n - 1) + 1 / factorial(n);
}

function factorial(n) {
  if (n === 1) return 1;
  if (n > 1) return factorial(n - 1) * n;
}

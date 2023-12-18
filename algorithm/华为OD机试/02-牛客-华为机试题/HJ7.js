const readline = require("readline").createInterface(process.stdin);
readline.on("line", function (line) {
  let value = parseFloat(line);
  console.log(Math.round(value));
});

const readline = require("readline").createInterface(process.stdin);
readline.on("line", function (line) {
  console.log(line.split(" ").reverse().join(" "));
});
// 时长: 1分4秒

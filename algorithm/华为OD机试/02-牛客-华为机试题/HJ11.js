const readline = require("readline").createInterface(process.stdin);
readline.on("line", function (line) {
  let val = line.split('').reverse().join("");
  console.log(val);
});
// 时长:4分56秒

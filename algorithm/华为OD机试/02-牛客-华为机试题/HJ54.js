const readline = require("readline").createInterface(process.stdin);
let result;
readline
  .on("line", function (line) {
    result = eval(line);
    readline.close();
  })
  .on("close", function () {
    console.log(result);
  });
// 时长:1分35秒

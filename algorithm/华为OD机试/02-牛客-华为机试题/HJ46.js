const readline = require("readline").createInterface(process.stdin);
let result;
let str;
let K;
let i = 0;
readline
  .on("line", function (line) {
    i++;
    if (i === 1) {
      str = line;
    }
    if (i === 2) {
      K = parseInt(line);
      result = str.slice(0, K);
      readline.close();
    }
  })
  .on("close", function () {
    console.log(result);
  });
// 时长: 3分57秒

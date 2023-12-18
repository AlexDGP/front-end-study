const readline = require("readline").createInterface(process.stdin);
let result = [];
readline
  .on("line", function (line) {
    result.push(line.match(/[a-z]/gi));
    result.push(line.match(/\s/g));
    result.push(line.match(/[0-9]/gi));
    result.push(line.match(/[^0-9a-z\s]/gi));
    readline.close();
  })
  .on("close", function () {
    for (const argument of result) {
      console.log(getLength(argument));
    }
  });
// 时长: 7分37秒
function getLength(param) {
  if (param === null) {
    return 0;
  }
  if (Array.isArray(param)) {
    return param.length;
  }
}
// 时长:14分钟8秒

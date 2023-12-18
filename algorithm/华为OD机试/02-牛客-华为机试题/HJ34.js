const readline = require("readline").createInterface(process.stdin);
let result;
readline
  .on("line", function (line) {
    result = [...line]
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
    readline.close();
  })
  .on("close", function () {
    console.log(result);
  });
// 时长: 3分5秒

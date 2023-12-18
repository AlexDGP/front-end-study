const readline = require("readline").createInterface(process.stdin);
let result;
readline
  .on("line", function (line) {
    [n, m] = line.split(" ").map((v) => parseInt(v));
    result = go(n, m);
    readline.close();
  })
  .on("close", function () {
    console.log(result);
  });
// 时长:

function go(n, m) {
  if (n === 1 || m === 1) {
    return m + n;
  } else {
    return go(n - 1, m) + go(n, m - 1);
  }
}

// 时长: 12分30秒

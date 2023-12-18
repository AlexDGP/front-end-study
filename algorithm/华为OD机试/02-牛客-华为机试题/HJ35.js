/* question:
描述
蛇形矩阵是由1开始的自然数依次排列成的一个矩阵上三角形。

例如，当输入5时，应该输出的三角形为：
1 3 6 10 15
2 5 9 14
4 8 13
7 12
11

输入描述：
输入正整数N（N不大于100）
输出描述：
输出一个N行的蛇形矩阵。

示例1
输入：
4
输出：
1 3 6 10
2 5 9
4 8
7
*/

// time:

const readline = require("readline").createInterface(process.stdin);
let result;
readline
  .on("line", function (line) {
    result = getResult(parseInt(line));
    readline.close();
  })
  .on("close", function () {
    result.forEach((item) => {
      console.log(item.join(" "));
    });
  });

function getResult(n) {
  let res = new Array(n).fill(null);
  res = res.map((v) => []);
  let sum = 1;
  for (let i = 0; i < n; i++) {
    sum += i;
    res[i].push(sum);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      res[i].push(res[i][j - 1] + j + i + 1);
    }
  }
  return res;
}

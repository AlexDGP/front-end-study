/* question:
描述
输出 1到n之间 的与 7 有关数字的个数。
一个数与7有关是指这个数是 7 的倍数，或者是包含 7 的数字（如 17 ，27 ，37 ... 70 ，71 ，72 ，73...）

数据范围：

1≤n≤30000
输入描述：
一个正整数 n 。( n 不大于 30000 )

输出描述：
一个整数，表示1到n之间的与7有关的数字个数。

示例1
输入：
20
复制
输出：
3
复制
说明：
输入20，1到20之间有关的数字包括7,14,17共3个。
*/

// time:

const readline = require("readline").createInterface(process.stdin);
let result;
readline
  .on("line", function (line) {
    result = getSeven(parseInt(line));
    readline.close();
  })
  .on("close", function () {
    console.log(result);
  });

function getSeven(n) {
  let arr = [];
  let count = 0;
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  arr = arr.map((v) => v + "");
  arr.forEach((item, index) => {
    if (/7/.test(item) || Number(item) % 7 === 0) {
      count++;
    }
  });
  return count;
}

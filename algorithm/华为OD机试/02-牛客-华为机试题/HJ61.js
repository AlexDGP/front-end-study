/* question: 不会
描述
把m个同样的苹果放在n个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的分法？
注意：如果有7个苹果和3个盘子，（5，1，1）和（1，5，1）被视为是同一种分法。

数据范围：

0≤m≤10 ，

1≤n≤10 。

输入描述：
输入两个int整数

输出描述：
输出结果，int型

示例1
输入：
7 3

输出：
8
*/

// time:

const readline = require("readline").createInterface(process.stdin);
readline
  .on("line", function (line) {
    readline.close();
  })
  .on("close", function () {});

function f(m, n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return Math.floor(m / 2) + 1;
  } else if (n >= 3) {
    let res = 0;
    for (let i = 0; i <= m; i++) {
      res += i + f(i, n - 1);
    }
    // return m + f(m, n - 1);
    return res;
  }
}

console.log(f(7, 3));
// m n result
// 0 1 1
// 1 1 1
// 2 1 1
//
//
//

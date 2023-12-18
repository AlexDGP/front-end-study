/* question:
描述
正整数A和正整数B 的最小公倍数是指 能被A和B整除的最小的正整数值，设计一个算法，求输入A和B的最小公倍数。

数据范围：
100000

1≤a,b≤100000
输入描述：
输入两个正整数A和B。

输出描述：
输出A和B的最小公倍数。

示例1
输入：
5 7
输出：
35

示例2
输入：
2 4
输出：
4
*/

// time:9分19秒

const readline = require("readline").createInterface(process.stdin);
let result;
readline
  .on("line", function (line) {
    let arr = line.split(" ");
    arr = arr.map((v) => parseInt(v));
    result = getTheLeastCommonMultiple(arr[0], arr[1]);
    readline.close();
  })
  .on("close", function () {
    console.log(result)
  });

function getTheLeastCommonMultiple(x, y) {
  let res = 0;
  while (true) {
    res += x;
    if (res % y === 0) {
      return res;
    }
  }
}

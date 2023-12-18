/* question:
描述
验证尼科彻斯定理，即：任何一个整数m的立方都可以写成m个连续奇数之和。
例如：
1^3=1
2^3=3+5
3^3=7+9+11
4^3=13+15+17+19
输入一个正整数m（m≤100），将m的立方写成m个连续奇数之和的形式输出。
数据范围：
1≤m≤100
进阶：时间复杂度：O(m) ，空间复杂度：O(1)
输入描述：
输入一个int整数
输出描述：
输出分解后的string

示例1
输入：
6
输出：
31+33+35+37+39+41
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
    console.log(result);
  });

function getResult(m) {
  let result;
  let cubeOfm = m * m * m;
  let middle;
  let arr = [];
  if (m % 2 === 1) {
    middle = m * m;
    arr.push(middle);
    for (let i = 1; i <= (m - 1) / 2; i++) {
      arr.push(middle + i * 2);
      arr.push(middle - i * 2);
    }
    arr.sort((a, b) => a - b);
  } else {
    middle = [m * m - 1, m * m + 1];
    arr = [...middle];
    for (let i = 1; i <= m / 2 - 1; i++) {
      arr.push(m * m + 1 + i * 2);
      arr.push(m * m - 1 - i * 2);
    }
    arr.sort((a, b) => a - b);
  }
  result = arr.join("+");
  return result;
}

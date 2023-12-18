/* question:
描述
某商店规定：三个空汽水瓶可以换一瓶汽水，允许向老板借空汽水瓶（但是必须要归还）。
小张手上有n个空汽水瓶，她想知道自己最多可以喝到多少瓶汽水。
数据范围：输入的正整数满足
1≤n≤100

注意：本题存在多组输入。输入的 0 表示输入结束，并不用输出结果。
输入描述：
输入文件最多包含 10 组测试数据，每个数据占一行，仅包含一个正整数 n（ 1<=n<=100 ），表示小张手上的空汽水瓶数。n=0 表示输入结束，你的程序不应当处理这一行。

输出描述：
对于每组测试数据，输出一行，表示最多可以喝的汽水瓶数。如果一瓶也喝不到，输出0。

示例1
输入：
3
10
81
0
输出：
1
5
40

说明：
样例 1 解释：用三个空瓶换一瓶汽水，剩一个空瓶无法继续交换
样例 2 解释：用九个空瓶换三瓶汽水，剩四个空瓶再用三个空瓶换一瓶汽水，剩两个空瓶，向老板借一个空瓶再用三个空瓶换一瓶汽水喝完得一个空瓶还给老板
*/

// time: 28分13秒

const readline = require("readline").createInterface(process.stdin);
let result = [];
readline
  .on("line", function (line) {
    if (line !== "0") {
      result.push(f(parseInt(line)));
    } else {
      readline.close();
    }
  })
  .on("close", function () {
    result.forEach((item) => {
      console.log(item);
    });
  });

/*
0 => end
1 => 0
2 => 1
3 => 1 => 0
4 => 2 => 1 =>0
*/
// n%3 + n/3 => n / 3
function f(n) {
  if (n === 0) {
    return null;
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else if (n >= 3) {
    return f((n % 3) + Math.floor(n / 3)) + Math.floor(n / 3);
  }
}

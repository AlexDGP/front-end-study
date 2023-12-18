/* question:
描述
输入 n 个整型数，统计其中的负数个数并求所有非负数的平均值，结果保留一位小数，如果没有非负数，则平均值为0
本题有多组输入数据，输入到文件末尾。

数据范围：

1≤n≤50000  ，其中每个数都满足∣val∣≤10

输入描述：
输入任意个整数，每行输入一个。

输出描述：
输出负数个数以及所有非负数的平均值

示例1
输入：
-13
-4
-7
输出：
3
0.0

示例2
输入：
-12
1
2
输出：
1
1.5
*/

// time:

const readline = require("readline").createInterface(process.stdin);
let result;
let arr = [];
readline
  .on("line", function (line) {
    arr.push(parseInt(line));
  })
  .on("close", function () {
    result = getResult(arr);
    result.forEach((item) => {
      console.log(item);
    });
  });

function getResult() {
  let res1 = arr.filter((v) => v < 0).length;
  let res2;
  if (arr.filter((v) => v >= 0).length === 0) {
    res2 = 0;
  } else {
    res2 =
      arr.filter((v) => v >= 0).reduce((p, c) => p + c) /
      arr.filter((v) => v >= 0).length;
  }

  return [res1, res2.toFixed(1)];
}

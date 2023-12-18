/* question:
描述
将一个字符串中所有的整数前后加上符号“*”，其他字符保持不变。连续的数字视为一个整数。

数据范围：字符串长度满足
1≤n≤100
输入描述：
输入一个字符串

输出描述：
字符中所有出现的数字前后加上符号“*”，其他字符保持不变

示例1
输入：
Jkdi234klowe90a3
输出：
Jkdi*234*klowe*90*a*3*

*/

// time:

const readline = require("readline").createInterface(process.stdin);
let result;
readline
  .on("line", function (line) {
    result = getResult(line);
    readline.close();
  })
  .on("close", function () {
    console.log(result);
  });

function getResult(str) {
  str = str.replace(/(\d+)/g, "*$1*");
  return str;
}

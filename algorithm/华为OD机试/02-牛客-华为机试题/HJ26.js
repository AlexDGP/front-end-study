/* question:
描述
编写一个程序，将输入字符串中的字符按如下规则排序。
规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。
如，输入： Type 输出： epTy
规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。
如，输入： BabA 输出： aABb
规则 3 ：非英文字母的其它字符保持原来的位置。
如，输入： By?e 输出： Be?y
数据范围：输入的字符串长度满足
1≤n≤1000

输入描述：
输入字符串
输出描述：
输出字符串
示例1
输入：
A Famous Saying: Much Ado About Nothing (2012/8).
输出：
A aaAAbc dFgghh: iimM nNn oooos Sttuuuy (2012/8).
*/

// time: 44分02秒

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
  let result = "";
  let arr = [];
  let reg = /[a-zA-Z]/g;
  let res;
  while ((res = reg.exec(str))) {
    arr.push(res);
  }
  arr.sort((a, b) => {
    return a[0].toLowerCase().charCodeAt(0) - b[0].toLowerCase().charCodeAt(0);
  });
  let lettersArray = arr.map((v) => v[0]);
  let indexsArray = arr.map((v) => v.index).sort((a, b) => a - b);
  result = new Array(str.length).fill(null);
  indexsArray.forEach((item, index) => {
    result[item] = lettersArray[index];
  });
  result.forEach((item, index) => {
    if (item === null) {
      result[index] = str[index];
    }
  });
  result = result.join("");
  return result;
}

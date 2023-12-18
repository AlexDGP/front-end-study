/* question:
描述
密码要求:
1.长度超过8位
2.包括大小写字母.数字.其它符号,以上四种至少三种
3.不能有长度大于2的包含公共元素的子串重复 （注：其他符号不含空格或换行）
数据范围：输入的字符串长度满足
1≤n≤100
输入描述：
一组字符串。

输出描述：
如果符合要求输出：OK，否则输出NG

示例1
输入：
021Abc9000
021Abc9Abc1
021ABC9000
021$bc9000
复制
输出：
OK
NG
NG
OK
*/

// time:

const readline = require("readline").createInterface(process.stdin);
let result = [];
readline
  .on("line", function (line) {
    result.push(checkRules(line));
  })
  .on("close", function () {
    result.forEach((item) => {
      console.log(item);
    });
  });

function checkFirstRule(str) {
  return str.length > 8;
}

function checkSecondRule(str) {
  let count = 0;
  if (/[a-z]/.test(str)) {
    count++;
  }
  if (/[A-Z]/.test(str)) {
    count++;
  }
  if (/\d/.test(str)) {
    count++;
  }
  if (/[^a-zA-Z \d\n]/.test(str)) {
    count++;
  }
  return count >= 3;
}

function checkThirdRule(str) {
  const res = [];
  let reg = /.{3}/g;
  for (let i = 0; i < str.length - 2; i++) {
    reg.lastIndex = i;
    res.push(reg.exec(str)[0]);
  }
  const set = new Set(res);
  return set.size === res.length;
}

function checkRules(str) {
  return checkFirstRule(str) && checkSecondRule(str) && checkThirdRule(str)
    ? "OK"
    : "NG";
}

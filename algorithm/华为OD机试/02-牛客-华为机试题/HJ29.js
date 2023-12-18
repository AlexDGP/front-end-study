/* question:
描述
对输入的字符串进行加解密，并输出。
加密方法为：
当内容是英文字母时则用该英文字母的后一个字母替换，同时字母变换大小写,如字母a时则替换为B；字母Z时则替换为a；
当内容是数字时则把该数字加1，如0替换1，1替换2，9替换0；
其他字符不做变化。
解密方法为加密的逆过程。

数据范围：输入的两个字符串长度满足
1≤n≤1000  ，保证输入的字符串都是只由大小写字母或者数字组成
输入描述：
第一行输入一串要加密的密码
第二行输入一串加过密的密码
输出描述：
第一行输出加密后的字符
第二行输出解密后的字符

示例1
输入：
abcdefg
BCDEFGH
输出：
BCDEFGH
abcdefg

*/

// time:

const readline = require("readline").createInterface(process.stdin);
let result = [];
let count = 0;
readline
  .on("line", function (line) {
    count++;
    if (count === 1) result.push(encryption(line));
    if (count === 2) {
      result.push(decode(line));
      readline.close();
    }
  })
  .on("close", function () {
    result.forEach((item) => {
      console.log(item);
    });
  });

function encryption(str) {
  return [...str]
    .map((v) => {
      if (/\d/g.test(v)) {
        v = parseInt(v);
        if (v === 9) {
          return 0;
        } else {
          return v + 1;
        }
      } else if (/[a-z]/g.test(v)) {
        v = v.toUpperCase();
        if (v === "Z") {
          return "A";
        } else {
          return String.fromCharCode(v.charCodeAt(0) + 1);
        }
      } else if (/[A-Z]/g.test(v)) {
        v = v.toLowerCase();
        if (v === "z") {
          return "a";
        } else {
          return String.fromCharCode(v.charCodeAt(0) + 1);
        }
      }
    })
    .join("");
}

function decode(str) {
  return [...str]
    .map((v) => {
      if (/\d/g.test(v)) {
        v = parseInt(v);
        if (v === 0) {
          return 9;
        } else {
          return v - 1;
        }
      } else if (/[a-z]/g.test(v)) {
        v = v.toUpperCase();
        if (v === "A") {
          return "Z";
        } else {
          return String.fromCharCode(v.charCodeAt(0) - 1);
        }
      } else if (/[A-Z]/g.test(v)) {
        v = v.toLowerCase();
        if (v === "a") {
          return "z";
        } else {
          return String.fromCharCode(v.charCodeAt(0) - 1);
        }
      }
    })
    .join("");
}

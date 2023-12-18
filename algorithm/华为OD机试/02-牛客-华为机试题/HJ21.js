/* question:
描述
现在有一种密码变换算法。
九键手机键盘上的数字与字母的对应： 1--1， abc--2, def--3, ghi--4, jkl--5, mno--6, pqrs--7, tuv--8 wxyz--9, 0--0，把密码中出现的小写字母都变成九键键盘对应的数字，如：a 变成 2，x 变成 9.
而密码中出现的大写字母则变成小写之后往后移一位，如：X ，先变成小写，再往后移一位，变成了 y ，例外：Z 往后移是 a 。
数字和其它的符号都不做变换。
数据范围： 输入的字符串长度满足
1≤n≤100
输入描述：
输入一组密码，长度不超过100个字符。
输出描述：
输出密码变换后的字符串
示例1
输入：
YUANzhi1987
输出：
zvbo9441987
*/

// time: 37分41秒
let result;
const readline = require("readline").createInterface(process.stdin);
readline
  .on("line", function (line) {
    result = translatePassword(line);
    readline.close();
  })
  .on("close", function () {
    console.log(result);
  });

function translateRule1(str) {
  const Regs = [
    {
      reg: /[abc]/g,
      res: "2",
    },
    {
      reg: /[def]/g,
      res: "3",
    },
    {
      reg: /[ghi]/g,
      res: "4",
    },
    {
      reg: /[def]/g,
      res: "2",
    },
    {
      reg: /[jkl]/g,
      res: "5",
    },
    {
      reg: /[mno]/g,
      res: "6",
    },
    {
      reg: /[pqrs]/g,
      res: "7",
    },
    {
      reg: /[tuv]/g,
      res: "8",
    },
    {
      reg: /[wxyz]/g,
      res: "9",
    },
  ];
  Regs.forEach((item) => {
    str = str.replace(item.reg, (v) => item.res);
  });
  return str;
}

function translateRule2(str) {
  str = str.replace(/[A-Z]/g, function (v) {
    let res = "";
    if (v !== "Z") {
      res = String.fromCharCode(v.toLowerCase().charCodeAt(0) + 1);
    } else {
      res = "a";
    }
    return res;
  });
  return str;
}

function translatePassword(str) {
  str = translateRule1(str);
  str = translateRule2(str);
  return str;
}

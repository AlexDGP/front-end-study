const readline = require("readline").createInterface(process.stdin);
let res;
readline
  .on("line", function (line) {
    res = 0;
    for (let i = 1; i <= parseInt(line); i++) {
      if (isPerfectNum(i)) {
        res++;
      }
    }
    readline.close();
  })
  .on("close", function () {
    console.log(res);
  });

function isPerfectNum(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  let sum = 0;
  for (const arrElement of arr) {
    sum += arrElement;
  }
  if (sum === num) {
    return true;
  }
}

// 时长:8分30秒

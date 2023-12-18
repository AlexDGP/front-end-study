const readline = require("readline").createInterface(process.stdin);
let count = 0;
let i = 0;
let arr = [];
readline.on("line", function (line) {
  if (i === 0) {
    count = parseInt(line);
  } else {
    arr.push(line);
    if (i === count) {
      for (const ele of arr.sort()) {
        console.log(ele);
      }
      readline.close();
    }
  }
  i++;
});
// 时长:10分25秒

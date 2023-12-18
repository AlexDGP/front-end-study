const readline = require("readline").createInterface(process.stdin);
readline.on("line", function (line) {
  let val = parseInt(line);
  let count = 0;
  for (const ele of val.toString(2)) {
    if (ele === "1") count++;
  }
  console.log(count);
});
// 时长:10分33秒

const readline = require("readline").createInterface(process.stdin);
readline.on("line", function (line) {
  const val = Array.from(new Set(line));
  let count = 0;
  for (const ele of val) {
    if (ele.charCodeAt(0) >= 0 && ele.charCodeAt(0) <= 127) {
      count++;
    }
  }
  console.log(count);
});
// 8分4秒

const readline = require("readline").createInterface(process.stdin);
readline.on("line", function (line) {
  let val = parseInt(Array.from(new Set(Array.from(line).reverse())).join(""));
  console.log(val);
});
// 9分20秒

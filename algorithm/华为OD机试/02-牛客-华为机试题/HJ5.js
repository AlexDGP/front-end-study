const readline = require("readline").createInterface(process.stdin);
readline.on("line", (value) => {
  const res = parseInt(value, 16);
  console.log(res);
});

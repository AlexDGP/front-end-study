const readline = require("readline").createInterface(process.stdin);
let rowCount = 0;
let rowIndex = 0;
let arr = [];
readline.on("line", function (value) {
  if (rowIndex === 0) {
    rowCount = parseInt(value);
  } else if (rowIndex > 0 && rowIndex <= rowCount) {
    arr.push(parseInt(value));
    if (rowIndex === rowCount) {
      rl.close();
    }
  }
  rowIndex++;
}).on("close", function () {
  const result = Array.from(new Set(arr)).sort((a, b) => a - b);
  for (const res of result) {
    console.log(res);
  }
});

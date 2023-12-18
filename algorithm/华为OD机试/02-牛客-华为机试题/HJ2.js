const readline = require("readline").createInterface(process.stdin);
let count = 0;
let str = null;
let letter = null;
let num = 0;
readline.on("line", function (value) {
  count++;
  if (count === 1) {
    str = value;
  } else if (count === 2) {
    letter = value;
    readline.close();
  }
}).on("close", function () {
  for (const iteratorElement of str) {
    if (
      iteratorElement === letter.toLowerCase() ||
      iteratorElement === letter.toUpperCase()
    ) {
      num++;
    }
  }
  console.log(num);
});

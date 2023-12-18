const readline = require("readline").createInterface(process.stdin);
let i = 0;
let count = 0;
const map = new Map();
readline.on("line", function (line) {
  if (count === 0) {
    count = parseInt(line);
  } else if (i >= 1 && i <= count) {
    let key = parseInt(line.split(" ")[0]);
    let val = parseInt(line.split(" ")[1]);
    if (!map.has(key)) {
      map.set(key, val);
    } else {
      val = map.get(key) + val;
      map.set(key, val);
    }
    if (i === count) {
      const arr = Array.from(map.keys()).sort((a, b) => a - b);
      for (const ele of arr) {
        console.log(ele + " " + map.get(ele));
      }
      readline.close();
    }
  }
  i++;
});

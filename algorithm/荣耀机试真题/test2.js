const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let legalString = [];
let illegalString = [];
readline.on("line", function (line) {
  if (line === "") readline.close();
  if (isLegalString(line)) {
    legalString.push(line.replace(/\s+/, ""));
  } else {
    illegalString.push(line.replace(/\s+/, " "));
  }
});
readline.on("close", function () {
  let res1 = [...new Set(legalString)];
  console.log(res1.join(" "));
  let res2 = illegalString.join(" ");
  console.log(res2);
  let res3 = res1.map((item) => leftLoop(item));
  console.log(res3.join(" "));
  let res4 = [...res3].sort().join(" ");
  console.log(res4);
});

function isLegalString(str) {
  const reg = /[^a-zA-Z0-9 ]/g;
  return !reg.test(str);
}

function leftLoop(str) {
  let arr = str.split("");
  for (let i = 0; i < 10; i++) {
    let item = arr.shift();
    arr.push(item);
  }
  return arr.join("");
}

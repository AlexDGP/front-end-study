const readline = require("readline").createInterface(process.stdin);
let res = [];
let price = [5, 3, 1 / 3];
readline
  .on("line", function (line) {
    for (let i = 0; i * price[0] <= 100; i++) {
      for (let j = 0; i * price[0] + j * price[1] <= 100; j++) {
        for (
          let k = 0;
          i * price[0] + j * price[1] + k * price[2] <= 100;
          k++
        ) {
          if (
            i + j + k === 100 &&
            i * price[0] + j * price[1] + k * price[2] === 100
          ) {
            res.push([i, j, k]);
          }
        }
      }
    }
    readline.close();
  })
  .on("close", function () {
    for (const ele of res) {
      console.log(ele.join(" "));
    }
  });
// 时长: 5分30秒

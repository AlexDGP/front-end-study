const readline = require("readline").createInterface(process.stdin);
let N = 0;
let m = 0;
class Good {
  constructor(v, p, q, b) {
    this.v = v;
    this.p = p;
    this.q = q;
    this.b = b;
  }
  bought() {
    return this.b;
  }
  canBuy() {
    if (this.q !== 0 && this.getMasterDevice().bought() === 1) {
      return 1;
    }
  }
  getSatisfaction() {
    return this.v * this.p;
  }
  getMasterDevice() {
    if (this.q === 0) {
      return this;
    } else {
      return arr[this.q];
    }
  }
}
let i = 0;
let arr = [];
readline
  .on("line", function (line) {
    if (i === 0) {
      N = parseInt(line.split(" ")[0]);
      m = parseInt(line.split(" ")[1]);
    } else {
      arr.push(
        new Good(
          parseInt(line.split(" ")[0]),
          parseInt(line.split(" ")[1]),
          parseInt(line.split(" ")[2])
        )
      );
      if (i === m) {
        readline.close();
      }
    }
    i++;
  })
  .on("close", () => {
    console.log([1, 1] * [1, 1]);
    console.log(arr);
  });

function fn() {
  let satisfaction = 0;
  let canBuy = false;
  return [satisfaction, canBuy];
}

// 时长:

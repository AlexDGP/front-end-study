const readline = require("readline").createInterface(process.stdin);
let res;
readline
  .on("line", function (line) {
    let arr = line.split(";");
    arr = arr.filter((ele) => {
      return /^[ASWD]\d{1,2}$/.test(ele);
    });
    let position = [0, 0];
    for (const arrElement of arr) {
      position = fn(arrElement, position);
    }
    res = position.join(",");
    readline.close();
  })
  .on("close", function () {
    console.log(res);
  });
function fn(str, position) {
  let step = parseInt(str.slice(1, 3));
  switch (str.at(0)) {
    case "A":
      position[0] -= step;
      break;
    case "W":
      position[1] += step;
      break;
    case "D":
      position[0] += step;
      break;
    case "S":
      position[1] -= step;
      break;
    default:
      break;
  }
  return position;
}

// 时长: 32分49秒

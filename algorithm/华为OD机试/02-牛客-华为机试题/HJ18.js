const readline = require("readline").createInterface(process.stdin);
let res = [0, 0, 0, 0, 0, 0, 0];
readline
  .on("line", function (line) {
    classifyIPAndSubnetMask(line);
  })
  .on("close", function () {
    res = res.join(" ");
    console.log(res);
  });

// 判断子网掩码是否合法
function isTheSubnetMaskValid(str) {
  let arr = str.split(".").map((v) => parseInt(v));
  if (arr.includes(NaN)) {
    return false;
  }
  arr = arr.map((v) => Number(v).toString(2));
  arr = arr.map((v) => v.padStart(8, "0"));
  let res = arr.join("");
  return /^1+0+$/g.test(res);
}

// 判断ip是否合法
function isTheIPValid(str) {
  let arr = str.split(".").map((v) => parseInt(v));
  if (arr.includes(NaN)) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && arr[i] > 255) {
      return false;
    }
  }
  return true;
}

// 分类ip
function classifyIP(str) {
  let result = null;
  if (isTheIPValid(str)) {
    let arr = str.split(".").map((v) => parseInt(v));
    if (arr[0] >= 1 && arr[0] <= 126) {
      result = "A";
    } else if (arr[0] >= 128 && arr[0] <= 191) {
      result = "B";
    } else if (arr[0] >= 192 && arr[0] <= 223) {
      result = "C";
    } else if (arr[0] >= 224 && arr[0] <= 239) {
      result = "D";
    } else if (arr[0] >= 240 && arr[0] <= 255) {
      result = "E";
    }
  }
  return result;
}

// 判断是否忽略ip
function ignoreIp(str) {
  let result = false;
  if (isTheIPValid(str)) {
    let arr = str.split(".").map((v) => parseInt(v));
    if (arr[0] === 0 || arr[0] === 127) {
      result = true;
    }
  }
  return result;
}

// 判断ip是否私有
function isTheIPPrivate(str) {
  let result = false;
  if (isTheIPValid(str)) {
    let arr = str.split(".").map((v) => parseInt(v));
    if (arr[0] === 10) {
      result = true;
    } else if (arr[0] === 172 && arr[1] >= 16 && arr[1] <= 31) {
      result = true;
    } else if (arr[0] === 192 && arr[1] === 168) {
      result = true;
    }
  }
  return result;
}

// 给ip和子网掩码分类
function classifyIPAndSubnetMask(str) {
  let arr = str.split("~");
  if (!ignoreIp(arr[0])) {
    if (!isTheIPValid(arr[0]) || !isTheSubnetMaskValid(arr[1])) {
      res[5]++;
    } else {
      let ipClass = classifyIP(arr[0]);
      switch (ipClass) {
        case "A":
          res[0]++;
          break;
        case "B":
          res[1]++;
          break;
        case "C":
          res[2]++;
          break;
        case "D":
          res[3]++;
          break;
        case "E":
          res[4]++;
          break;
        default:
          break;
      }
      if (isTheIPPrivate(arr[0])) {
        res[6]++;
      }
    }
  }
}
// 时长: 4小时30分5秒

// 2023.10.23二刷
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//
// let result = [];
// readline.on("line", function (line) {
//   result.push(line);
// });
// readline.on("close", function () {
//   console.log(getResult(result).join(" "));
// });
//
// function isIP(ip) {
//   if (typeof ip === "string") {
//     let ipArr = ip.split(".").map((v) => parseInt(v));
//     if (
//         ipArr[0] >= 0 &&
//         ipArr[0] <= 255 &&
//         ipArr[1] >= 0 &&
//         ipArr[1] <= 255 &&
//         ipArr[2] >= 0 &&
//         ipArr[2] <= 255 &&
//         ipArr[3] >= 0 &&
//         ipArr[3] <= 255
//     ) {
//       const regExp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
//       return regExp.test(ip);
//     }
//   }
//   return false;
// }
//
// function classifyIp(ip) {
//   if (isIP(ip)) {
//     let ipArr = ip.split(".").map((v) => parseInt(v));
//     if (
//         ipArr[1] >= 0 &&
//         ipArr[1] <= 255 &&
//         ipArr[2] >= 0 &&
//         ipArr[2] <= 255 &&
//         ipArr[3] >= 0 &&
//         ipArr[3] <= 255
//     ) {
//       if (ipArr[0] === 0 || ipArr[0] === 127) {
//         return "ignore";
//       } else if (ipArr[0] >= 1 && ipArr[0] <= 126) {
//         return "A";
//       } else if (ipArr[0] >= 128 && ipArr[0] <= 191) {
//         return "B";
//       } else if (ipArr[0] >= 192 && ipArr[0] <= 223) {
//         return "C";
//       } else if (ipArr[0] >= 224 && ipArr[0] <= 239) {
//         return "D";
//       } else if (ipArr[0] >= 240 && ipArr[0] <= 255) {
//         return "E";
//       }
//     }
//   }
//   return "invalid";
// }
//
// function isPrivateIp(ip) {
//   if (classifyIp(ip) !== "ignore" && classifyIp(ip) !== "invalid") {
//     let ipArr = ip.split(".").map((v) => parseInt(v));
//     if (
//         ipArr[0] === 10 ||
//         (ipArr[0] === 172 && ipArr[1] >= 16 && ipArr[1] <= 31) ||
//         (ipArr[0] === 192 && ipArr[1] === 168)
//     ) {
//       return true;
//     }
//   }
//   return false;
// }
//
// function isSubnetMaskValid(ip) {
//   if (isIP(ip)) {
//     let binaryIP = ip
//         .split(".")
//         .map((v) => parseInt(v).toString(2).padStart(8, "0"))
//         .join("");
//     const regExp = /^1+0+$/g;
//     return regExp.test(binaryIP);
//   }
//   return false;
// }
//
// function getResult(array) {
//   let res = [0, 0, 0, 0, 0, 0, 0];
//   array.forEach((item) => {
//     const [ip, subnetMask] = item.split("~");
//     const ipClass = classifyIp(ip);
//     const isPrivate = isPrivateIp(ip);
//     const isSubnetMask = isSubnetMaskValid(subnetMask);
//     if (
//         ipClass === "invalid" ||
//         (ipClass !== "ignore" && isSubnetMask === false)
//     ) {
//       res[5]++;
//     } else if (ipClass === "A" && isSubnetMask === true) {
//       res[0]++;
//     } else if (ipClass === "B" && isSubnetMask === true) {
//       res[1]++;
//     } else if (ipClass === "C" && isSubnetMask === true) {
//       res[2]++;
//     } else if (ipClass === "D" && isSubnetMask === true) {
//       res[3]++;
//     } else if (ipClass === "E" && isSubnetMask === true) {
//       res[4]++;
//     }
//     if (
//         ipClass !== "invalid" &&
//         ipClass !== "ignore" &&
//         isSubnetMask === true &&
//         isPrivate === true
//     ) {
//       res[6]++;
//     }
//   });
//   return res;
// }

/* question:
 */

// time:

const readline = require("readline").createInterface(process.stdin);
readline
  .on("line", function (line) {
    readline.close();
  })
  .on("close", function () {});

console.log(isPerfectChoir([0, 1, 2, 4, 4, 3]));

function dp(n, arr) {
  if (n === 1 || n === 2 || n === 3) {
    return 0;
  }
  if (n > 3) {
    return isPerfectChoir(arr) ? dp(n - 1, arr) : dp(n - 1, arr) + 1;
  }
}

function arrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}
function isIncrementalArray(arr) {
  if (arr.length !== new Set(arr).size) {
    return false;
  }
  let oldArr = [...arr];
  return arrayEquals(
    oldArr,
    arr.sort((a, b) => a - b)
  );
}
function isDecreaseArray(arr) {
  if (arr.length !== new Set(arr).size) {
    return false;
  }
  let oldArr = [...arr];
  return arrayEquals(
    oldArr,
    arr.sort((a, b) => b - a)
  );
}

function isPerfectChoir(arr) {
  if (arr.length === 1) {
    return true;
  } else {
    for (let i = 1; i < arr.length; i++) {
      let leftArr = arr.slice(0, i);
      let rightArr = arr.slice(i - 1, arr.length);
      if (isIncrementalArray(leftArr) && isDecreaseArray(rightArr)) {
        return true;
      }
    }
  }
  return false;
}

/* question:

*/

// time:

const readline = require("readline").createInterface(process.stdin);
readline
  .on("line", function (line) {
    readline.close();
  })
  .on("close", function () {});

let arr1 = [
  [1, 2, 3],
  [3, 2, 1],
];
let arr2 = [
  [1, 2],
  [2, 1],
  [3, 3],
];
function getResult(arr1, arr2) {
  let x = arr1.length;
  let y = arr2.length;
  let z = arr2[0]?.length;

  let res = [];
  for (let i = 0; i < x; i++) {
    res.push([]);
    for (let j = 0; j < y; j++) {
      let sum = 0;
      for (let k = 0; k < y; k++) {
        for (let l = 0; l < z; l++) {
          if (j === l) {
            sum += arr1[i][j] * arr2[k][l];
          }
        }
        res[i].push(sum);
      }
    }
  }

  return res;
}

console.log(getResult(arr1, arr2));

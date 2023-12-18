// 算法：
// 给定一个放有字母和数字的数组，找到最长的子数组，且包含的字母和数字的个数相同。
// 返回该子数组，若存在多个最长子数组，返回左端点下标值最小的子数组。若不存在这样的数组，返回一个空数组。
// 示例1：
// 输入: ["A","1","B","C","D","2","3","4","E","5","F","G","6","7","H","I","J","K","L","M"]
// 输出: ["A","1","B","C","D","2","3","4","E","5","F","G","6","7"]
// 示例2：
// 输入: ["A","A"]
// 输出: []
function findLongestSubarray(arr) {
  let left = 0;
  let right = arr.length - 1;
  for (let left = 0; left < arr.length; left++) {
    for (let right = arr.length - 1; right > left; right--) {
      if (isTargetArr(arr.slice(left, right + 1))) {
        return arr.slice(left, right + 1);
      }
    }
  }
  return [];
}

function isTargetArr(arr) {
  let letterCount = 0;
  let numberCount = 0;
  arr.forEach((item) => {
    if (isNaN(parseInt(item))) {
      letterCount++;
    } else {
      numberCount++;
    }
  });
  return letterCount === numberCount;
}

console.log(
  findLongestSubarray([
    "A",
    "1",
    "B",
    "C",
    "D",
    "2",
    "3",
    "4",
    "E",
    "5",
    "F",
    "G",
    "6",
    "7",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ]),
);
console.log(findLongestSubarray(["A", "A"]));

/* question:
描述
实现删除字符串中出现次数最少的字符，若出现次数最少的字符有多个，则把出现次数最少的字符都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。

数据范围：输入的字符串长度满足

1≤n≤20  ，保证输入的字符串中仅出现小写字母
输入描述：
字符串只包含小写英文字母, 不考虑非法输入，输入的字符串长度小于等于20个字节。

输出描述：
删除字符串中出现次数最少的字符后的字符串。

示例1
输入：
aabcddd

输出：
aaddd

*/

// time:

const readline = require("readline").createInterface(process.stdin);
let result;
readline
  .on("line", function (line) {
    result = deleteTheLeastFrequentCharacter(line);
    readline.close();
  })
  .on("close", function () {
    console.log(result);
  });

function deleteTheLeastFrequentCharacter(str) {
  const reg = /[a-zA-z]/g;
  const arr = str.match(reg);
  const set = new Set(arr);
  const counts = [];
  const characters = [];
  set.forEach((item1) => {
    let count = 0;
    arr.forEach((item2) => {
      if (item1 === item2) {
        count++;
      }
    });
    counts.push(count);
  });
  const min = Math.min(...counts);
  counts.forEach((item, index) => {
    if (item === min) {
      characters.push(Array.from(set)[index]);
    }
  });
  characters.forEach((item) => {
    str = str.replaceAll(item, "");
  });
  return str;
}

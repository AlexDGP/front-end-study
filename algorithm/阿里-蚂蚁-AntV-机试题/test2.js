/**
 * 解析文件大小为 byte 数字
 * @param str 文件大小的描述（带单位）
 * @returns number
 */
function parseBytes(str) {
  let number = str.match(/^\d+\.?\d*/g)[0];
  number = Number(number);
  let unit = str.match(/(Kb)|(Mb)$/gi);

  if (unit === null) {
    return number;
  } else {
    unit = unit[0];
    if (unit === "Kb") {
      return number * 1024;
    } else if (unit === "Mb") {
      return number * 1024 * 1024;
    }
  }
}

// test cases
console.log(parseBytes("123")); // 123
console.log(parseBytes("1.2 Kb")); // 1228.8
console.log(parseBytes("1.2 Mb")); // 12886411837.44

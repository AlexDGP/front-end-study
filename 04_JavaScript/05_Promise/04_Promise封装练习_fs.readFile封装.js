// 用Promise封装一个读取文件的方法 myReadFile(path)
function myReadFile(path) {
  return new Promise((resolve, reject) => {
    const fs = require("fs");
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
//调用方法 myReadFile(path)
myReadFile("./resource/content.txt").then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log(reason);
  }
);

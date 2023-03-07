// 读取路径为"./resource/content.txt"的文件

// 引入fs
const fs = require("fs");
// 回调函数
fs.readFile("./resource/content.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

//用Promise封装
let p = new Promise((resolve, reject) => {
  fs.readFile("./resource/content.txt", (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});
p.then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log(reason);
  }
);

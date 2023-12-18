// 读取路径为"./resource/content.txt"的文件

// 引入fs
const fs = require("fs");

const correctFileAddress = "./resource/content.txt";
const incorrectFileAddress = "./resource/content.tx";
// 回调函数
fs.readFile(correctFileAddress, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

// 用Promise封装
// 正确的文件的地址
let promise1 = new Promise((resolve, reject) => {
  fs.readFile(correctFileAddress, (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});
promise1.then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log(reason);
  }
);
// 错误的文件的地址
let promise2 = new Promise((resolve, reject) => {
  fs.readFile(incorrectFileAddress, (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});
promise2.then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log(reason);
  }
);

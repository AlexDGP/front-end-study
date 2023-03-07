// util模块中的promisify方法 util是nodejs中内置模块
// 引入util和fs
const util = require("util");
const fs = require("fs");
let myReadFile = util.promisify(fs.readFile);
myReadFile("./resource/content.txt").then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log(reason);
  }
);

const a = require("./commonjs.js");
// a.count = 101; // not readonly,并没有真正改变, 模块"./commonjs.js"的count的值
console.log(a.count); // 1
a.add();
a.add();
a.add();
console.log(a.count); // 1
console.log(a.get()); // 4

const b = require("./commonjs.js");
b.add();
b.add();
b.add();
console.log(b.count); // 1
console.log(b.get()); // 4
console.log(a.get()); // 4

console.log(a.get() === b.get());
console.log(a.get() === b.count);

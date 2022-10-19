// ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。
// ES6 数据类型除了 Number 、 String 、 Boolean 、 Object、 null 和 undefined ，还新增了 Symbol 。

// 01_创建Symbol
let sy = Symbol("KK");
console.log(sy); // Symbol(KK)
console.log(typeof sy); // symbol

// 02_相同参数 Symbol() 返回的值不相等
let sy1 = Symbol("KK");
console.log(sy === sy1); // false

// 03_Symbol.for创建Symbol
let sy2 = Symbol.for("KK");
let sy3 = Symbol.for("KK");
console.log(sy2); // Symbol(KK)
console.log(typeof sy2); // symbol
console.log(sy === sy2); // false

// 04_用Symbol.for方法创建的Symbol如何参数相同,则值Symbol值相同
console.log(sy2 === sy3); // true

// 05_Symbol不能与其他数据进行运算
// let res = sy + 100; // 报错
// let res = sy > 100; // 报错
// let res = sy + sy; // 报错

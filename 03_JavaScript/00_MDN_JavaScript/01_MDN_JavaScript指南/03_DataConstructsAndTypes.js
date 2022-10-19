// 最新的 ECMAScript 标准定义了 8 种数据类型：
// 七种基本数据类型：
//    布尔值（Boolean），有 2 个值分别是：true 和 false.
//    null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。
//    undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
//    数字（Number），整数或浮点数，例如： 42 或者 3.14159。
//    任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
//    字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy" 。
//    代表（Symbol）( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。
// 以及对象（Object）。

//01_数据类型转换(Data type conversion)
var answer = 42;
answer = "Thanks for all the fish...";
// 因为 JavaScript 是动态类型的(dynamically typed)，这种赋值方式并不会提示出错。

// 02_数字转换为字符串
x = "The answer is " + 42;
y = 42 + " is the answer";
console.log(x); // The answer is 42
console.log(y); // 42 is the answer

// 03_字符串转换为数字
var resInt = parseInt("3.14");
var resFloat = parseFloat("3.14");
console.log(resInt); // 3
console.log(resFloat); // 3.14

// Function 函数是 JavaScript 中的基本组件之一。
// 函数定义function definition 定义函数有多种方法：

// 01_函数声明 (function declaration) 或称函数语句 (function statement)
// 语法: function name([param[, param[, ... param]]]) { [statements] }
// name 函数名
// param 传递给函数的参数的名称
// statements 组成函数体的声明语句

// (a)如果一个函数中没有使用 return 语句，则它默认返回undefined。要想返回一个特定的值，则函数必须使用 return 语句来指定一个要返回的值。(使用new关键字调用一个构造函数除外)。
function fn() {
	return 1;
}
function fn2() {}
console.log(fn()); // 1
console.log(fn2()); // undefined

// (b)传递给函数的值被称为函数的实参（值传递），对应位置的函数参数名叫作形参。
// 实参为引用数据类型时
function myFunc(theObject) {
	theObject.brand = "Toyota";
}
var mycar = {
	brand: "Honda",
	model: "Accord",
	year: 1998,
};
console.log(mycar.brand); // Honda
myFunc(mycar);
console.log(mycar.brand); // Toyota
// 实参为基本数据类型时
function myFunc2(theData) {
	theData = "newData";
}
var myData = "oldData";
console.log(myData); // oldData
myFunc(myData);
console.log(myData); // oldData

// 02_函数表达式 (function expression)
// 语法: function [name]([param[, param[, ... param]]]) { [statements] }
// name 函数名，可以省略。当省略函数名的时候，该函数就成为了匿名函数
// param 传递给函数的参数的名称
// statements 组成函数体的声明语句

// (a)匿名函数（函数没有名字）
var myFunction = function () {
	// statements
};
// 也可以在定义时为函数命名：
var myFunction = function namedFunction() {
	// statements
};
// 命名函数表达式的好处是当我们遇到错误时，堆栈跟踪会显示函数名，容易寻找错误。

// (b)立即调用的函数表达式
// 当函数只使用一次时，通常使用IIFE (Immediately Invokable Function Expressions)。
(function () {
	// statements;
})();

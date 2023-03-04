// Function 函数是 JavaScript 中的基本组件之一。
// 函数定义function definition 定义函数有多种方法：

// 04_箭头函数表达式 (arrow function expression)=>
/* (a)语法
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression // 相当于：(param1, param2, …, paramN) =>{ return expression; }
(singleParam) => { statements } // 当只有一个参数时，圆括号是可选的：singleParam => { statements }
() => { statements } // 没有参数的函数应该写成一对圆括号。
// param 参数名称
// statements or expression 多个声明 statements 需要用大括号括起来，而单个表达式时则不需要。表达式 expression 也是该函数的隐式返回值
*/

// (b)描述
// 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。
// 箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
// 引入箭头函数有两个方面的作用：更简短的函数并且不绑定this。

// 普通函数
var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
elements.map(function (element) {
	return element.length;
}); //[8, 6, 7, 9]

// 上面的普通函数可以改写成如下的箭头函数
elements.map((element) => {
	return element.length;
}); // [8, 6, 7, 9]

/* vscode prettier 会自动给element加上括号
// 当箭头函数只有一个参数时，可以省略参数的圆括号
elements.map(element => {
	return element.length;
 }); // [8, 6, 7, 9]

// 当箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号
elements.map(element => element.length); // [8, 6, 7, 9]
*/

// 在这个例子中，因为我们只需要 `length` 属性，所以可以使用参数解构
// 需要注意的是字符串 `"length"` 是我们想要获得的属性的名称，而 `lengthFooBArX` 则只是个变量名，
// 可以替换成任意合法的变量名
var res = elements.map(({ length: lengthFooBArX }) => lengthFooBArX);
console.log(res); // [8, 6, 7, 9]

// 箭头函数的this
// 箭头函数不会创建自己的this，它只会从自己的作用域链的上一层继承 this。
// 因此，在下面的代码中，传递给setInterval的函数内的this与封闭函数中的this值相同：
function Person() {
	this.age = 0;
	setInterval(() => {
		this.age++; // |this| 正确地指向 p 实例
		console.log(this.age);
	}, 1000);
}
var p = new Person(); // 1 2 3 4 ...

// 与严格模式的关系
var f = () => {
	"use strict";
	return this;
};
console.log(f() === globalThis); // 或者 global

// 通过 call 或 apply 调用
// 由于 箭头函数没有自己的 this 指针，通过 call() 或 apply() 方法调用一个函数时，只能传递参数（不能绑定 this---译者注），他们的第一个参数会被忽略。
// （这种现象对于 bind 方法同样成立 --- 译者注）
var adder = {
	base: 1,
	add: function (a) {
		var f = (v) => v + this.base;
		return f(a);
	},
	addThruCall: function (a) {
		var f = (v) => v + this.base;
		var b = {
			base: 2,
		};
		return f.call(b, a); // 此时 this 指向还是adder,并不指向b
	},
};
console.log(adder.add(1)); // 2
console.log(adder.addThruCall(1)); // 2

// 不绑定arguments
// 箭头函数不绑定Arguments 对象。因此，在本示例中，arguments只是引用了封闭作用域内的 arguments：
var arr = (a, b) => arguments;
console.log(arr(1, 2)); // {}
// 可以通过隐私绑定arguments对象,在箭头函数外包一个正常函数,然后在箭头函数里使用arguments
function foo(n) {
	// 隐式绑定 foo 函数的 arguments 对象. arguments[0] 是 n，即传给 foo 函数的第一个参数
	var f = () => arguments;
	console.log(arguments);
	return f();
}
foo(1); // [Arguments] { '0': 1 }

// 使用箭头函数作为方法
("use strict");
var obj = {
	i: 10,
	b: () => console.log(this.i, this),
	c: function () {
		console.log(this.i, this);
	},
};
obj.b(); // undefined, {}
obj.c(); // 10, { i: 10, b: [Function: b], c: [Function: c] }

// 箭头函数不能用作构造器，和 new一起用会抛出错误。
/*
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
 */

// 使用 yield 关键字
// yield 关键字通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）。因此，箭头函数不能用作函数生成器。

// 解析顺序
let callback;
callback = callback || function () {}; // ok
// callback = callback || () => {}; // SyntaxError: Malformed arrow function parameter list
// 得在箭头构函数外包一个小括号
callback = callback || (() => {}); // ok

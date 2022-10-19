// Function 函数是 JavaScript 中的基本组件之一。
// 函数定义function definition 定义函数有多种方法：

// 05_Function构造函数 Function constructor
// 语法
// new Function([[arg1,] ... argN,] functionBody)
// arg1,... argN 函数使用零个或多个名称作为正式的参数名称。每一个必须是一个符合有效的 JavaScript 标识符规则的字符串或用逗号分隔的字符串列表，例如“x”,“theValue”或“a,b”
// functionBody 一个构成的函数定义的，包含 JavaScript 声明语句的字符串
// 把 Function 的构造函数当作函数一样调用 (不使用 new 操作符) 的效果与作为 Function 的构造函数调用一样。

//每个 JavaScript 函数实际上都是一个 Function 对象。
console.log(function () {}.constructor === Function); // true

const adder = new Function("a", "b", "return a + b");
console.log(adder(2, 6)); // 8

// (a)实例属性
// #1 Function.prototype.displayName 函数的显示名称
// 当一个函数的 displayName 属性被定义，这个函数的 displayName 属性将返回显示名称。
function doSomething() {}
console.log(doSomething.displayName); // undefined
var popup = function (content) {
	console.log(content);
};
popup.displayName = "Show Popup";
console.log(popup.displayName); // Show Popup

// #2 Function.prototype.length 函数期望的参数数量
// Function 构造器本身也是个Function。他的 length 属性值为 1 。该属性 Writable: false, Enumerable: false, Configurable: true.
console.log(Function.length); // 1
console.log(function () {}.length); // 0
console.log(function (a) {}.length); // 1
console.log(function (a, b) {}.length); // 2
console.log(function (...args) {}.length); // 0, rest parameter is not counted
console.log(function (a, a2, b = 1, c) {}.length); // 2, only parameters before the first one with a default value is counted

// #3 Function.prototype.name 函数的名称
// 使用new Function(...)语法创建的函数或只是 Function(...) create Function对象及其名称为“anonymous”。
function doSomething() {}
console.log(doSomething.name); // doSomething
console.log(new Function().name); // "anonymous"

// 推断函数名称(ES6)
// 变量和方法可以从句法位置推断匿名函数的名称（ECMAScript 2015 中新增）。
var f = function () {};
var object = {
	someMethod: function () {}, // 匿名函数
};
console.log(f.name); // f
console.log(object.someMethod.name); // someMethod

// Function.prototype.name是只读的
var object = {
	someMethod: function () {},
};
object.someMethod.name = "otherMethod"; // 无效
console.log(object.someMethod.name); // someMethod
// 要更改它，可以使用Object.defineProperty()
Object.defineProperty(object.someMethod, "name", {
	value: "otherMethod",
	writable: false,
	enumerable: false,
	configurable: true,
});
console.log(object.someMethod.name); // someMethod

// 简写方法的名称
var o = {
	foo() {},
};
console.log(o.foo.name); // foo

// getters 和 setters 的函数名
// 当通过 get 和 set 访问器来存取属性时，"get" 或 "set" 会出现在函数名称前
var o = {
	get foo() {},
	set foo(x) {},
};
var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
console.log(descriptor.get.name); // get foo
console.log(descriptor.set.name); // set foo

// Symbol 作为函数名称
// 如果Symbol 被用于函数名称，并且这个 symbol 具有相应的描述符，那么方法的名字就是方括号中的描述符
var sym1 = Symbol("foo");
var sym2 = Symbol();
var o = {
	[sym1]: function () {},
	[sym2]: function () {},
};
console.log(o[sym1].name); // "[foo]"
console.log(o[sym2].name); // ""

// JavaScript 压缩和 minifiers
// 例如下面的代码：
function Foo() {}
var foo = new Foo();
if (foo.constructor.name === "Foo") {
	console.log("'foo' is an instance of 'Foo'");
} else {
	console.log("Oops!");
} // 'foo' is an instance of 'Foo'
// 可能被压缩为：
function a() {}
var b = new a();
if (b.constructor.name === "Foo") {
	console.log("'foo' is an instance of 'Foo'");
} else {
	console.log("Oops!");
} // Oops!

// (b)实例方法
// #1 Function.prototype.apply() 和 Function.prototype.call()
/* 语法
apply(thisArg)
apply(thisArg, argsArray)
call(thisArg, arg1, arg2, ...)
*/
// 参数
// thisArg 在 func 函数运行时使用的 this 值。请注意，this 可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
// argsArray 可选 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从 ECMAScript 5 开始可以使用类数组对象。浏览器兼容性请参阅本文底部内容。
// arg1, arg2, ... 可选 参数列表。
// 返回值 调用有指定 this 值和参数的函数的结果。

const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
const max2 = Math.max.call(null, ...numbers);
console.log(max); // expected output: 7
console.log(max2); // expected output: 7
const min = Math.min.apply(null, numbers);
const min2 = Math.min.call(null, ...numbers);
console.log(min); // expected output: 2
console.log(min2); // expected output: 2

const array = ["a", "b"];
const elements = [0, 1, 2];
new Array().push.apply(array, elements); // 这里push方法的this指向array,其实跟new Array()无关,此句等效于array.push(elements)
console.info(array); // ["a", "b", 0, 1, 2]
new Array().push.call(array, ...elements); // 这里push方法的this指向array,其实跟new Array()无关,此句等效于array.push(elements)
console.info(array); // ["a", "b", 0, 1, 2, 0, 1, 2]

// 2# Function.prototype.bind()
// 语法: function.bind(thisArg[, arg1[, arg2[, ...]]])
// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
// 参数
// thisArg 调用绑定函数时作为 this 参数传递给目标函数的值。 如果使用new运算符构造绑定函数，则忽略该值。
// 当使用 bind 在 setTimeout 中创建一个函数（作为回调提供）时，作为 thisArg 传递的任何原始值都将转换为 object。如果 bind 函数的参数列表为空，或者thisArg是null或undefined，执行作用域的 this 将被视为新函数的 thisArg。
// arg1, arg2, ... 当目标函数被调用时，被预置入绑定函数的参数列表中的参数。
// 返回值 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。

this.x = 9; // 在浏览器中，this 指向全局的 "window" 对象
var module = {
	x: 81,
	getX: function () {
		return this.x;
	},
};
module.getX(); // 81
var retrieveX = module.getX;
retrieveX(); // 返回 9 - 因为函数是在全局作用域中调用的
// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81

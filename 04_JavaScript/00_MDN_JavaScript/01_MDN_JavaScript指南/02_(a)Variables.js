// 01_标识符(identifiers)
// 一个 JavaScript 标识符必须以字母、下划线（_）或者美元符号（$）开头；后续的字符也可以是数字（0-9）。
// (A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0–9))
var Number_hits, temp99, $credit, name; // 合法标识符(legal identifiers)

// 02_全局变量(Global variables) 全局变量是全局对象的属性(Global variables are properties of the global object)
// 实际上，全局变量是全局对象的属性。在网页中，（译注：缺省的）全局对象是 window ，所以你可以用形如 window.variable 的语法来设置和访问全局变量
// In web pages, the global object is window, so you can set and access global variables using the window.variable syntax
console.log();
var a = 200;
b = 100;
console.log(globalThis.a); // undefined
console.log(globalThis.b); // 100

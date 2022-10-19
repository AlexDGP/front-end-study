// 01_var声明变量(Declaring variables)
// 语法(Syntax): var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];
var a; // 声明一个变量
var b, c, d; // 声明多个变量
var e = 100; // 声明一个变量并赋初值(initializing it to a value)
var f = 200,
	g = "HelloWorld",
	h = []; // 声明多个变量并赋初值

// 02_var能重复声明同一变量
var star = "Ronaldo";
var star = "Zidane";
console.log(star); // Zidane

// 03_var非块级作用域(not block statement scope)
if (true) {
	var book = "Hamlet";
}
console.log(book); // Hamlet

// 04_var能变量提升(variable hoisting)
console.log(tel); // undefined
var tel = "13812345678";
console.log(tel); // 13812345678

//05_var词法作用域(Lexical scoping)
var school = "atguigu";
function fn() {
	console.log(school);
}
fn(); // atguigu

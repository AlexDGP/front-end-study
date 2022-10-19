// 01_let声明变量
// 语法(Syntax): let varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];
let a; // 声明一个变量
let b, c, d; // 声明多个变量
let e = 100; // 声明一个变量并赋初值
let f = 200,
	g = "HelloWorld",
	h = []; // 声明多个变量并赋初值

// 02_let不能重复声明同一变量
let star = "Ronaldo";
// let star = "Zidane"; // SyntaxError: Identifier 'star' has already been declared

// 03_let块级作用域(block statement scope)
if (true) {
	let book = "Hamlet";
}
// console.log(book); // ReferenceError: book is not defined

// 04_let不能变量提升
// console.log(tel); // ReferenceError: Cannot access 'tel' before initialization
let tel = "13812345678";
console.log(tel); // 13812345678

//05_let词法作用域(Lexical scoping)
let school = "atguigu";
function fn() {
	console.log(school);
}
fn(); // atguigu

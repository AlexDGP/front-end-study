// 01_let声明变量
let a; // 声明一个变量
let b, c, d; // 声明多个变量
let e = 100; // 声明一个变量并赋初值
let f = 200,
	g = "HelloWorld",
	h = []; // 声明多个变量并赋初值

// 02_let不能重复声明同一变量
let star = "Ronaldo";
// let star = "Zidane";

// 03_let块级作用域
{
	let book = "西游记";
	console.log(book); // 结果:西游记
}
// console.log(book); // 报错

// 04_let不允许变量提升
// console.log(tel); // 报错
let tel = "13333333333";
console.log(tel); // 结果:13333333333

//05_let不影响作用域链
{
	let school = "itcast";
	function fn() {
		console.log(school);
	}
	fn(); // 结果:itcast
}

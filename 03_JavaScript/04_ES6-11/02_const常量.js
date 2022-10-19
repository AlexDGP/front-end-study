// 01_const声明常量
const BOOK = "西游记";
console.log(BOOK); // 结果:西游记

// 02_const声明常量必须赋初值
// const STAR; // 报错

// 03 _const声明常量使用大写字母(潜规则)
const TEL = 13333333333;

// 04_const声明常量的值不能修改
// TEL = 13344444444; // 报错
console.log(TEL);

// 05_const块级作用域
{
	let NAME = "Alex";
	console.log(NAME); // 结果:西游记
}
// console.log(NAME); // 报错

// 06_const常量是数组和对象的修改,不算对常量的修改,不会报错(对于数组和对象,const常量只保存了值的内存地址)
const TEAM = ["Beckham", "Figo", "Rual"];
TEAM.push("Owen");
console.log(TEAM); // 结果:[ 'Beckham', 'Figo', 'Rual', 'Owen' ]

//07_const常量不影响作用域链
{
	const SCHOOL = "itcast";
	function fn() {
		console.log(SCHOOL);
	}
	fn(); // 结果:itcast
}

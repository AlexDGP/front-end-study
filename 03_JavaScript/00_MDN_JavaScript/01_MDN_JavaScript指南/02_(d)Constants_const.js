// 常量(Constants)
// 你可以用关键字 const 创建一个只读的常量。常量标识符的命名规则和变量相同：必须以字母、下划线（_）或美元符号（$）开头并可以包含有字母、数字或下划线。
// You can create a read-only, named constant with the const keyword
// The syntax of a constant identifier is the same as any variable identifier: it must start with a letter, underscore, or dollar sign ($), and can contain alphabetic, numeric, or underscore characters
const PI = 3.14;

// 01_const声明常量(Declaring constants)
const BOOK = "Hamlet";
console.log(BOOK); // Hamlet

// 02_const声明常量必须赋初值
// const STAR; // SyntaxError: Missing initializer in const declaration

// 03_const声明常量使用大写字母(潜规则)
const TEL = 13812345678;

// 04_const声明常量的值不能修改
// TEL = 13344444444; // TypeError: Assignment to constant variable.

// 05_const块级作用域
if (true) {
	const MYBOOK = "Hamlet";
}
console.log(MYBOOK); // ReferenceError: MYBOOK is not defined

// 06_const常量是数组和对象的修改,不算对常量的修改,不会报错(对于数组和对象,const常量只保存了值的内存地址)
const TEAM = ["Beckham", "Figo", "Rual"];
TEAM.push("Owen");
console.log(TEAM); // [ 'Beckham', 'Figo', 'Rual', 'Owen' ]

//07_const词法作用域(Lexical scoping)
const SCHOOL = "atguigu";
function fn() {
	console.log(SCHOOL);
}
fn(); // atguigu

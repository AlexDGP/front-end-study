// 字面量是常量，其值是固定的，而且在程序脚本运行中不可更改，比如false，3.14，
// 数组字面量 (Array literals)
// 布尔字面量 (Boolean literals)
// 数字字面量 (Numeric_literals)
// 对象字面量 (Object literals)
// RegExp 字面值
// 字符串字面量 (String literals)

// 01_数组字面量 (Array literals)
var coffees = ["French Roast", "Colombian", "Kona"]; // ["French Roast", "Colombian", "Kona"]是数组字面量
var a = [3]; // [3]是数组字面量
console.log(a.length); // 1
console.log(a[0]); // 3
var fish = ["Lion", , "Angel"];
console.log(fish.length); // 3
console.log(fish); // [ 'Lion', <1 empty item>, 'Angel' ]
console.log(fish[1]); // undefined

// 02_布尔字面量 (Boolean literals)
// 布尔类型有两种字面量：true和false
var bool = true;
var bool2 = false;

// 03_数字字面量(Numeric literals)
// 值得一提的是，语言标准要求数字字面量必须是无符号的。但是像-123.4这样的代码片段还是没有问题的，会被解释为一元操作符-应用于数字字面量123.4

// (a)整数字面量(Integer literals)
// 整数可以用十进制（基数为 10）、十六进制（基数为 16）、八进制（基数为 8）以及二进制（基数为 2）表示
// 十进制整数字面量由一串数字序列组成，且没有前缀 0
var int = 3;
// 二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1
var int2 = 0b101101;
// 八进制的整数以 0（或 0O、0o）开头，只能包括数字 0-7, 严格模式下，八进制整数字面量必须以 0o 或 0O 开头，而不能以 0 开头。
var int3 = 0o15;
// 十六进制整数以 0x（或 0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F
var int4 = 0x25f;

// (b)浮点数字面量(Floating-point literals)
// syntax: [(+|-)][digits][.digits][(E|e)[(+|-)]digits]
var float = 3.14;
var float2 = -0.2345789; // -0.23456789
var float3 = -3.12e12; // -3.12*10^12
var float4 = 0.1e-23; // 0.1*10^(-23)=10^(-24)=1e-24

// 04_对象字面量 (Object literals)
// (a)对象字面值是封闭在花括号对 ({}) 中的一个对象的零个或多个"属性名 - 值"对的（元素）列表
var Sales = "Toyota";
function CarTypes(name) {
	return name === "Honda" ? name : "Sorry, we don't sell " + name + ".";
}
var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };
console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

// (b)对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的 javascript 标识符，它必须用""包裹。属性的名字不合法，那么便不能用。访问属性值，而是通过类数组标记 ("[]") 访问和赋值。
var unusualPropertyNames = {
	"": "An empty string",
	"!": "Bang!",
};
// console.log(unusualPropertyNames."");   // SyntaxError: Unexpected string
console.log(unusualPropertyNames[""]); // An empty string
// console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token '!'
console.log(unusualPropertyNames["!"]); // Bang!

// (c)增强的对象字面量 (Enhanced Object literals)(ES2015/ES6)
var foo = { a: "alpha", 2: "two" };
console.log(foo.a); // alpha
console.log(foo[2]); // two
//console.log(foo.2);  // SyntaxError: missing ) after argument list
//console.log(foo[a]); // ReferenceError: a is not defined
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two

// 05_RegExp 字面值(RegExp literals)
// 一个正则表达式是字符被斜线（译注：正斜杠“/”）围成的表达式。下面是一个正则表达式文字的一个例子
var regExp = /ab+c/i;

// 06_字符串字面量 (String literals)
// (a)字符串字面量是由双引号（"）对或单引号（'）括起来的零个或多个字符。字符串被限定在同种引号之间；也即，必须是成对单引号或成对双引号。下面的例子都是字符串字面值：
("foo");
("bar");
("1234");
("one line \n another line");
("John's cat");
var str = "this string \
is broken \
across multiple \
lines."; // 换行
console.log(str); // this string is broken across multiple lines.

// (b)模板字符串(Template literals)
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`; // Multiline strings
`In JavaScript this is
 not legal.`;
var poem = `Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.`; // 模板字符串换行
console.log(poem);
var poem2 =
	"Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo."; // 字符串 转义字符换行
console.log(poem2);
console.log(poem === poem2); // true
// 字符串插值${}(String interpolation)
var name = "Bob",
	time = "today";
`Hello ${name}, how are you ${time}?`;

// (c)JavaScript特殊字符 (JavaScript special characters):https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_Types#%E6%95%B0%E5%AD%97%E5%AD%97%E9%9D%A2%E9%87%8F_numeric_literals 见表2.1
// 转义字符(Escaping characters)

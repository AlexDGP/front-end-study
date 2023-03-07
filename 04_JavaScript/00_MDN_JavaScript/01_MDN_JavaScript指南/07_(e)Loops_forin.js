// for...in 语句循环一个指定的变量来循环一个对象所有可枚举的属性。JavaScript 会为每一个不同的属性执行指定的语句。
/* 语法
for (variable in object) statements
*/
// variable 在每次迭代时，variable 会被赋值为不同的属性名。
// object 非 Symbol 类型的可枚举属性被迭代的对象。
var obj = { a: 1, b: 2, c: 3 };
for (var prop in obj) {
	console.log("obj." + prop + " = " + obj[prop]);
}
// obj.a = 1
// obj.b = 2
// obj.c = 3

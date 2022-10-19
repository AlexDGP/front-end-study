// 传统函数声明
// 传统函数声明方法一
let fn1 = function () {
	console.log("fn1");
};
// 传统函数声明方法二
function fn2() {
	console.log("fn2");
}

// 01_箭头函数的声明
// 没有参数时
let fn3 = () => {
	console.log("fn3");
};
// 有参数时
let fn4 = (a, b) => {
	console.log(a + b);
};
fn4(1, 2); // 3

// 02_this指向问题,箭头函数的this是静态的,不同调用方式不改变其this指向
function getName0() {
	console.log(this.name);
}
let getName1 = () => {
	console.log(this.name);
};
// 直接调用
name = "Alex";
getName0(); // Alex
getName1(); // undefined
// call方法调用
let school = {
	name: "itcast",
};
getName0.call(school); // itcast
getName1.call(school); // undefined

// 03_箭头函数不能构造实例化对象
let Person = (name, age) => {
	this.name = name;
	this.age = age;
};
let owen = Person("Micheal Owen", 18);
console.log(owen); // undefined

// 04_箭头函数不能使用arguments
let fn5 = () => {
	console.log(arguments);
};
// fn5(1, 2, 3); // 报错

// 05_箭头函数的简写
// 参数只有一个时
let double = (n) => {
	return n + n;
};
// 函数执行体代码只有一句的时候{}可以省略,return也要删去
let cube = (n) => n * n * n;

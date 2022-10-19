// for...of 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
/* 语法
for (variable of iterable) statements
*/
// variable 在每次迭代中，将不同属性的值分配给变量。
// iterable 被迭代枚举其属性的对象。
// 01_迭代Array(Iterating over an Array)
var iterable = [10, 20, 30];
for (let value of iterable) {
	value += 1;
	console.log(value); // 11 21 31
}

// 02_迭代String
var iterable = "boo";
for (let value of iterable) {
	console.log(value); // b o o
}

// 03_迭代TypedArray
var iterable = new Uint8Array([0x00, 0xff]);
for (let value of iterable) {
	console.log(value); // 0 255
}

// 04_迭代Map
var iterable = new Map([
	["a", 1],
	["b", 2],
	["c", 3],
]);
for (let entry of iterable) {
	console.log(entry); // ["a", 1] ["b", 2] ["c", 3]
}
// 解构赋值
for (let [key, value] of iterable) {
	console.log(key + value); // a1 b2 c3
}

// 05_迭代Set
var iterable = new Set([1, 1, 2, 2, 3, 3]);
for (let value of iterable) {
	console.log(value); // 1 2 3
}

// 06_迭代arguments对象
(function () {
	for (let argument of arguments) {
		console.log(argument); // 1 2 3
	}
})(1, 2, 3);

// 07_迭代 DOM 集合
//注意：这只能在实现了 NodeList.prototype[Symbol.iterator] 的平台上运行
// let articleParagraphs = document.querySelectorAll("article > p");
// for (let paragraph of articleParagraphs) {
// 	paragraph.classList.add("read");
// }

// 08_关闭迭代器
// 对于for...of的循环，可以由 break, throw 或 return 终止。在这些情况下，迭代器关闭。
function* foo() {
	yield 1;
	yield 2;
	yield 3;
}
for (let o of foo()) {
	console.log(o); // 1
	break; // closes iterator, triggers return
}

// 09_迭代生成器
function* fibonacci() {
	// 一个生成器函数
	let [prev, curr] = [0, 1];
	for (;;) {
		// while (true) {
		[prev, curr] = [curr, prev + curr];
		yield curr;
	}
}
for (let n of fibonacci()) {
	console.log(n); // 1 2 3 5 8 13 21 34 55 89 144
	if (n >= 100) break; // 当 n 大于 100 时跳出循环
}

// 10_迭代其他实现可迭代协议的对象
var iterable = {
	[Symbol.iterator]() {
		return {
			i: 0,
			next() {
				if (this.i < 3) {
					return { value: this.i++, done: false };
				}
				return { value: undefined, done: true };
			},
		};
	},
};
for (var value of iterable) {
	console.log(value); // 0 1 2
}

// for...of与for...in的区别
// 无论是for...in还是for...of语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。
// for...in 语句以任意顺序迭代对象的可枚举属性。
// for...of 语句遍历可迭代对象定义要迭代的数据。
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};
var iterable = [3, 5, 7];
iterable.foo = "hello";
for (let i in iterable) {
	console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}
for (let i in iterable) {
	if (iterable.hasOwnProperty(i)) {
		console.log(i); // 0, 1, 2, "foo"
	}
}
for (let i of iterable) {
	console.log(i); // 3, 5, 7
}

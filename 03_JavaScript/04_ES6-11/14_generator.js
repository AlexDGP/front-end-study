// 常用于异步编程
// 声明generator函数sang()
function* sang1() {
	console.log("第一句");
	yield "两只老虎,两只老虎,真奇怪";
	console.log("第二句");
	yield "一只没有耳朵";
	console.log("第三句");
	yield "一只没有尾巴";
	console.log("第四句");
	yield "真奇怪";
}
let iterator1 = sang1();
console.log(iterator1.next()); // 第一句 { value: '两只老虎,两只老虎,真奇怪', done: false }
console.log(iterator1.next()); // 第二句 { value: '一只没有耳朵', done: false }
console.log(iterator1.next()); // 第三句 { value: '一只没有尾巴', done: false }
console.log(iterator1.next()); // 第四句 { value: '真奇怪', done: false }
console.log(iterator1.next()); // { value: undefined, done: true }

// generator函数的参数
function* sang2(args) {
	console.log(args);
	let one = yield "两只老虎,两只老虎,真奇怪";
	console.log(one);
	let two = yield "一只没有耳朵";
	console.log(two);
	let three = yield "一只没有尾巴";
	console.log(three);
	let four = yield "真奇怪";
	console.log(four);
}
// generator(params)方法的实参,将传给generator(args)的形参
// iterator.next(param)方法传入的参数param将作为上一个yield返回的结果
let iterator2 = sang2("params");
console.log(iterator2.next("第一句")); // params { value: '两只老虎,两只老虎,真奇怪', done: false }
console.log(iterator2.next("第二句")); // 第二句 { value: '一只没有耳朵', done: false }
console.log(iterator2.next("第三句")); // 第三句 { value: '一只没有尾巴', done: false }
console.log(iterator2.next("第四句")); // 第四句 { value: '真奇怪', done: false }
console.log(iterator2.next("结束")); // 结束 { value: undefined, done: true }

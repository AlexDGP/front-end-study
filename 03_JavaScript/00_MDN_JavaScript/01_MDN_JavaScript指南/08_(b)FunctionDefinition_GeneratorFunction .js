// Function 函数是 JavaScript 中的基本组件之一。
// 函数定义function definition 定义函数有多种方法：

// 03_函数生成器声明与函数生成器表达式(function*)
// (a)函数生成器声明 function* name([param[, param[, ...param]]]) { statements }
// name 函数名称
// param 传递给函数的参数的名称
// statements 组成函数体的声明语句

// (b)函数生成器表达式 function* [name]([param] [, param] [..., param]) { statements }
// name 函数名称。函数名可以被省略，在这种情况下该函数将变成匿名函数
// param 传递给函数的参数的名称
// statements 组成函数体的声明语句

// (c)描述
// 生成器函数在执行时能暂停，后面又能从暂停处继续执行
// 调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的 迭代器 （ iterator ）对象
// 当这个迭代器的 next() 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现yield的位置为止，yield 后紧跟迭代器要返回的值。
// 如果用的是 yield*（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）
// next()方法返回一个对象，这个对象包含两个属性：value 和 done，value 属性表示本次 yield 表达式的返回值，done 属性为布尔类型，表示生成器后续是否还有 yield 语句，即生成器函数是否已经执行完毕并返回
// 当在生成器函数中显式 return 时，会导致生成器立即变为完成状态，即调用 next() 方法返回的对象的 done 为 true。如果 return 后面跟了一个值，那么这个值会作为当前调用 next() 方法返回的 value 值
function* gen() {
	yield 10;
	x = yield "foo";
	yield x;
}
var gen_obj = gen();
console.log(gen_obj.next()); // { value: 10, done: false } 执行 yield 10，返回 10
console.log(gen_obj.next()); // { value: 'foo', done: false } 执行 yield 'foo'，返回 'foo'
console.log(gen_obj.next(100)); // { value: 100, done: false } 将 100 赋给上一条 yield 'foo' 的左值，即执行 x=100，返回 100
console.log(gen_obj.next()); // { value: undefined, done: true } 执行完毕，value 为 undefined，done 为 true
console.log(gen_obj.next()); // { value: undefined, done: true } 再次调用next()方法

function* idMaker() {
	var index = 0;
	while (index < 3) yield index++;
}
var gen = idMaker();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
console.log(gen.next().value); // undefined

// 调用 next()方法时，如果传入了参数，那么这个参数会传给上一条执行的 yield 语句左边的变量
function* idMaker2() {
	var index = arguments[0] || 0;
	while (true) yield index++;
}
var gen = idMaker2(5);
console.log(gen.next().value); // 5
console.log(gen.next().value); // 6
console.log(gen.next().value); // 7

// 如果用的是 yield*（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）
function* anotherGenerator(i) {
	yield i + 1;
	yield i + 2;
	yield i + 3;
}
function* generator(i) {
	yield i;
	yield* anotherGenerator(i); // 移交执行权
	yield i + 10;
}
var gen = generator(10);
console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20

// 传递参数
function* createIterator() {
	let first = yield 1;
	let second = yield first + 2; // 4 + 2
	// first =4 是 next(4) 将参数赋给上一条的
	yield second + 3; // 5 + 3
}
let iterator = createIterator();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next(4)); // { value: 6, done: false }
console.log(iterator.next(5)); // { value: 8, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 显式返回 Return statement in a generator
// 当在生成器函数中显式 return 时，会导致生成器立即变为完成状态，即调用 next() 方法返回的对象的 done 为 true。如果 return 后面跟了一个值，那么这个值会作为当前调用 next() 方法返回的 value 值
function* yieldAndReturn() {
	yield "Y";
	return "R"; //显式返回处，可以观察到 done 也立即变为了 true
	yield "unreachable"; // 不会被执行了
}
var gen = yieldAndReturn();
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }

// 生成器函数不能当构造器使用
function* f() {}
// var obj = new f(); // TypeError: f is not a constructor

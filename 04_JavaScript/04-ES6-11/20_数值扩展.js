// 01_Number.EPSILON JS最小精度
console.log(Number.EPSILON); // 2.220446049250313e-16
// 经典0.1 + 0.2 !== 0.3 问题
console.log(0.1 + 0.2 === 0.3); // false
// 自定义equal方法
function equal(num1, num2) {
	if (Math.abs(num1 - num2) < Number.EPSILON) {
		return true;
	} else {
		return false;
	}
}
console.log(equal(0.1 + 0.2, 0.3)); // true

// 02_Number.isFinite(num)
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(100 / 0)); // false
console.log(Number.isFinite(Infinity)); // false

// 03_Number.isNaN(num)
console.log(Number.isNaN(100)); // false
console.log(Number.isNaN(-NaN)); // true

// 04_Number.parseInt(str)/Number.parseFloat("str")
console.log(Number.parseInt("1000.545")); // 1000
console.log(Number.parseInt("hello")); // NaN
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("hello")); // NaN

// 05_Number.isInteger(num)
console.log(Number.isInteger(3.14)); // false
console.log(Number.isInteger(3)); // false

// 06_Math.trunc(num) 抹去小数点后数字取整
console.log(Math.trunc(-3.14)); // -3

// 07_Math.sign(num) 判断一个数为 正 负 零
console.log(Math.sign(-3.14)); // -1
console.log(Math.sign(3.14)); // 1
console.log(Math.sign(0)); // 0

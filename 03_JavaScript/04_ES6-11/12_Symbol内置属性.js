//文档:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// Symbol.hasInstance
class Person {
	// 自己控制类型检测
	static [Symbol.hasInstance](param) {
		console.log(param);
		console.log("用来检测类型");
		return true;
	}
}
let obj = { name: "Alex" };
console.log(obj instanceof Person); // false

// Symbol.isConcatSpreadable
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];
let alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); // expected output: Array ["a", "b", "c", 1, 2, 3]

numeric[Symbol.isConcatSpreadable] = false;
alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); // expected output: Array ["a", "b", "c", Array [1, 2, 3]]

// 文档:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
// Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用
// Set对象是值的集合，你可以按照插入的顺序迭代它的元素。Set 中的元素只会出现一次，即 Set 中的元素是唯一的。

// 01_声明一个set
let set = new Set();
let stars = new Set([
	"Ronaldo",
	"Zidane",
	"Beckham",
	"Raul",
	"Figo",
	"Owen",
	"Carlos",
]);
console.log(set); // Set(0) {}
console.log(stars); // Set(7) { 'Ronaldo', 'Zidane', 'Beckham', 'Raul', 'Figo', 'Owen', 'Carlos' }

// 02_Set.prototype.size
console.log(stars.size); // 7

// 03_Set.prototype.add(value)
stars.add("Messi");
console.log(stars); // Set(8) { 'Ronaldo', 'Zidane', 'Beckham', 'Raul', 'Figo', 'Owen', 'Carlos', 'Messi' }

// 04_Set.prototype.delete(value)
stars.delete("Raul");
console.log(stars); // Set(7) { 'Ronaldo', 'Zidane', 'Beckham', 'Figo', 'Owen', 'Carlos', 'Messi' }

// 05_Set.prototype.has(param)
console.log(stars.has("Zidane")); // true
console.log(stars.has("Raul")); // false

// 06_Set.prototype.clear()
stars.clear();
console.log(stars); // Set(0) {}

// 07_for...of...
let team = new Set([
	"Ronaldo",
	"Zidane",
	"Beckham",
	"Raul",
	"Figo",
	"Owen",
	"Carlos",
]);
for (const iterator of team) {
	console.log(iterator);
}

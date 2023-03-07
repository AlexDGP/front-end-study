// 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
// Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。

// 01_声明Map
let map1 = new Map();

// 02_Map.prototype.set(key, value)
map1.set("name", "itcast");
map1.set("change", function () {
	console.log("you are changed");
});
let key = { school: "ATGUIGU" };
let value = ["北京", "上海", "深圳"];
map1.set(key, value);
console.log(map1); // Map(3) { 'name' => 'itcast', 'change' => [Function (anonymous)], { school: 'ATGUIGU' } => [ '北京', '上海', '深圳' ] }

// 03_Map.prototype.size
console.log(map1.size); // 3

// 04_Map.prototype.delete(key)
map1.delete("name");
console.log(map1); // Map(2) { 'change' => [Function (anonymous)], { school: 'ATGUIGU' } => [ '北京', '上海', '深圳' ] }

// 05_Map.prototype.get(key)
console.log(map1.get(key)); // [ '北京', '上海', '深圳' ]

// 06_Map.prototype.clear()
map1.clear();
console.log(map1); // Map(0) {}

// for...of...遍历
let map2 = new Map();
map2.set("name", "itcast");
map2.set("change", function () {
	console.log("you are changed");
});
map2.set(key, value);
for (const iterator of map2) {
	console.log(iterator); // [ 'name', 'itcast' ], [ 'change', [Function (anonymous)] ], [ { school: 'ATGUIGU' }, [ '北京', '上海', '深圳' ] ]
	console.log(iterator instanceof Array); // true, true, true
}

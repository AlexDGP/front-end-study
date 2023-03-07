// Object.fromEntries(value)
// Object.fromEntries(array): Object
let res = Object.fromEntries([
	["name", "尚硅谷"],
	["course", "前端, Java, 大数据"],
]);
console.log(res); // { name: '尚硅谷', course: '前端, Java, 大数据' }

// value为Map
let m = new Map();
m.set("name", "尚硅谷");
console.log(Object.fromEntries(m)); // { name: '尚硅谷' }

// Object.entries(obj) ES8 Object.entries(obj): Array
// Object.entries(obj) 与 Object.fromEntries(array) 互为逆运算
let arr = Object.entries({ name: "尚硅谷" });
console.log(arr); // [ [ 'name', '尚硅谷' ] ]

// 01_Object.is(value0, value1) 判断两个value0与value1是否相等 类似于===(除了NaN以外)
console.log(Object.is("Alex", "Alex")); // true
console.log(Object.is(100, "100")); // false
console.log(Object.is(new Set(), new Set())); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(NaN === NaN)); // false

// 02_Object.assign() 对象合并
let config1 = {
	host: "localhost",
	port: 3306,
	name: "root",
	pass: "root",
	test: "test",
};
let config2 = { host: "127.0.0.1", port: 3307, name: "admin", pass: "admin" };
console.log(Object.assign(config1, config2)); // { host: '127.0.0.1', port: 3307, name: 'admin', pass: 'admin', test: 'test'}

// 03_Object.setPrototypeOf(obj1, obj2) 设置obj1的原型对象为obj2 // Object.getPrototypeOf(obj) 获取obj的原型对象
//
let school = {
	name: "itcast",
};
let cities = {
	campus: ["北京", "上海", "深圳"],
};
Object.setPrototypeOf(school, cities);
console.log(Object.getPrototypeOf(school)); // { campus: [ '北京', '上海', '深圳' ] }
console.log(school); // { name: 'itcast' }

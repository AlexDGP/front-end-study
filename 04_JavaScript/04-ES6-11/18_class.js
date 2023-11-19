// 文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/class
// class 声明创建一个基于原型继承的具有给定名称的新类

// 01_ES5 构造函数 实现
function PhoneES5(brand, model) {
	this.brand = brand;
	this.model = model;
}
PhoneES5.prototype.call = function (tel) {
	console.log("正在给" + tel + "打电话");
};
// 静态属性
PhoneES5.category = "phone";
// 静态方法
PhoneES5.callTel = function (tel) {
	console.log("callTel正在给" + tel + "打电话");
};
let iphoneES5 = new PhoneES5("Apple", "iphone11");
console.log(iphoneES5); // PhoneES5 { brand: 'Apple', model: 'iphone11' }
iphoneES5.call("13333333333"); // 正在给13333333333打电话
console.log(PhoneES5.category); // phone
PhoneES5.callTel("13333333333"); // callTel正在给13333333333打电话

// 02_ES6 class实现
class PhoneES6 {
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}
	call(tel) {
		console.log("正在给" + tel + "打电话");
	}
	// 静态属性
	static category = "phone";
	// 静态方法
	static callTel(tel) {
		console.log("callTel正在给" + tel + "打电话");
	}
}
let iphoneES6 = new PhoneES6("Apple", "iphone11");
console.log(iphoneES6); // PhoneES6 { brand: 'Apple', model: 'iphone11' }
iphoneES6.call("13333333333"); // 正在给13333333333打电话
console.log(PhoneES6.category); // phone
PhoneES6.callTel("13333333333"); // callTel正在给13333333333打电话

// 03_extends (使用ES6)
class AITelphone extends PhoneES6 {
	constructor(brand, model, price) {
		super(brand, model);
		this.price = price;
	}
	// 子类重写父类方法
	call(tel) {
		console.log("正在用AI电话给" + tel + "打电话");
	}
}
let mi = new AITelphone("xiaomi", "mi10", 5999);
console.log(mi); // AITelphone { brand: undefined, model: undefined, price: 5999 }
mi.call("13333333333"); // 正在用AI电话给13333333333打电话

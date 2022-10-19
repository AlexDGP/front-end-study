// 数组的定义
const cars = ["Tesla", "Volvo", "BWM"];

// length:设置或返回数组中元素的数量
console.log(cars.length); //返回数组中元素的数量
cars.length = 100; //设置数组中元素的数量
console.log(cars); //[ 'Tesla', 'Volvo', 'BWM', <97 empty items> ]

// prototype:允许您向数组添加属性和方法
Array.prototype.myUcase = function () {
	for (i = 0; i < this.length; i++) {
		this[i] = this[i].toUpperCase();
	}
	return this;
};
Array.prototype.myParameter = "my name is Alex";
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.myParameter);
console.log(fruits.myUcase());

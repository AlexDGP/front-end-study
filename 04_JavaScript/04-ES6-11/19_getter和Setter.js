class Phone {
	// price = 0; // 不能包含price属性,否则price的getter和setter失效
	get price() {
		console.log("正在获取price");
		return "价格为1000元";
	}
	set price(value) {
		console.log("正在修改price为" + value);
	}
}
let iphone = new Phone();
let iphonePrice = iphone.price; // 正在获取price
console.log(iphonePrice); //价格为1000元
iphone.price = 5000; // 正在修改price为5000

// 文档:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators
// String、Array、TypedArray、Map 和 Set 都是内置可迭代对象，因为它们的原型对象都拥有一个 Symbol.iterator 方法

let stars = ["Ronaldo", "Zidane", "Beckham", "Raul", "Figo", "Owen", "Carlos"];
// for...of...方法
for (const iterator of stars) {
	console.log(iterator);
}
// iterator.next()方法
let iterator = stars[Symbol.iterator]();
for (let index = 0; index < stars.length; index++) {
	const element = iterator.next();
	console.log(element); // {value: "xxx", done: boolean}
}

// footballTeam对象实现iterator接口: [Symbol.iterator](){}
let footballTeam = {
	name: "RealMadrid",
	players: stars,
	// 实现自定义[Symbol.iterator](){}
	[Symbol.iterator]() {
		let index = 0;
		let _this = this;
		return {
			next: function () {
				if (index < _this.players.length) {
					let result = { value: _this.players[index], done: false };
					index++;
					return result;
				} else {
					let result = { value: undefined, done: true };
					return result;
				}
			},
		};
	},
};
// footballTeam对象实现iterator接口后,进行遍历
for (const iterator of footballTeam) {
	console.log(iterator);
}

let game = {
	name: "goodGame",
	up: function () {
		console.log("上");
	},
	down: function () {
		console.log("下");
	},
};
let methods = {
	up: Symbol("up"),
	down: Symbol("down"),
};
game[methods.up] = function () {
	console.log("up");
};
game[methods.down] = function () {
	console.log("down");
};
console.log(game); // {name: 'goodGame', up: [Function: up], down: [Function: down], [Symbol(up)]: [Function (anonymous)], [Symbol(down)]: [Function (anonymous)]}

let game1 = {
	name: "狼人杀",
	[Symbol("sayHi")]: function () {
		console.log("Hello");
	},
	[Symbol("failed")]: function () {
		console.log("Loss");
	},
};
console.log(game1); // {name: '狼人杀', [Symbol(sayHi)]: [Function: [sayHi]], [Symbol(failed)]: [Function: [failed]]}

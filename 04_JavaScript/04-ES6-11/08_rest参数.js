// ES6引入rest参数,用于获取函数的实参,用来代替arguments
// ES5获取实参
function team() {
	console.log(arguments);
}
team("Ronaldo", "Beckham", "Zidane"); // 结果为对象: [Arguments] { '0': 'Ronaldo', '1': 'Beckham', '2': 'Zidane' }

// rest参数
function restTeam(...args) {
	console.log(args);
}
restTeam("Ronaldo", "Beckham", "Zidane"); // 结果为数组: [ 'Ronaldo', 'Beckham', 'Zidane' ]

// rest参数必须要放在参数最后
function fn(a, b, c, ...args) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(args);
}
fn(1, 2, 3, 4, 5, 6, 7); // 1 2 3 [ 4, 5, 6, 7 ]

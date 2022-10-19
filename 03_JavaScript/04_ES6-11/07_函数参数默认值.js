// 01_形参初始值,具有默认值,一般位置要靠后(潜规则)
function add(a, b, c = 5) {
	return a + b + c;
}
console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 8

// 02_与解构赋值结合运用
function connect({ host, username, password, port = 5500 }) {
	console.log(host);
	console.log(username);
	console.log(password);
	console.log(port);
}
connect({
	host: "localhost",
	username: "root",
	password: "root",
	// port: 3306,
});

// 01_rest参数
function connect({ host, port, ...user }) {
	console.log(host);
	console.log(port);
	console.log(user);
}
connect({
	host: "localhost",
	port: "3306",
	userName: "root",
	password: "root",
}); // localhost 3306 { userName: 'root', password: 'root' }

//02_...拓展运算符 用于对象
let team1 = {
	plyer10: "Rolado",
	plyer5: "Zidane",
	plyer23: "Beckham",
};
let team2 = {
	player7: "Raul",
	player10: "Figo",
	player3: "Carlos",
};
team = { ...team1, ...team2 };
console.log(team); // { plyer10: 'Rolado', plyer5: 'Zidane', plyer23: 'Beckham', player7: 'Raul', player10: 'Figo', player3: 'Carlos'}

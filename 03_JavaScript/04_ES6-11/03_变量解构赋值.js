// 01_数组的解构赋值
const TEAM = ["Beckham", "Figo", "Rual", "Owen"];
let [David, Luis, Gonzalez, Micheal] = TEAM;
console.log(David); // Beckham
console.log(Luis); // Figo
console.log(Gonzalez); // Rual
console.log(Micheal); // Owen

// 02_对象的解构赋值
const ZIDANE = {
	firstName: "Zinedine",
	lastName: "Zidane",
	birthday: "06.23",
	goal: function () {
		console.log("1998FIFAWorldCupChampion");
	},
};
let { firstName, lastName, birthday, goal } = ZIDANE;
console.log(firstName); // Zinedine
console.log(lastName); // Zidane
console.log(birthday); // 06.23
console.log(goal); // [Function: goal]
goal(); // 1998FIFAWorldCupChampion

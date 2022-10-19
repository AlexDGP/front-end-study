let fullName = "Jim Green";
let sayHi = () => {
	console.log(`Hello,My name is ${fullName}`);
};
let person = {
	fullName, // 等效于 fullName: fullName
	sayHi, // 等效于 sayHi: sayHi
	sayBye() {
		console.log("GoodBye, everyone");
	},
};
console.log(person);

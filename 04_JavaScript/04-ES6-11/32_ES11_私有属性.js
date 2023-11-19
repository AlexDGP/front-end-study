class Person {
	name;
	#age;
	#weight;
	constructor(name, age, weight) {
		this.name = name;
		this.#age = age;
		this.#weight = weight;
	}
	introduce() {
		console.log(this.name);
		console.log(this.#age);
		console.log(this.#weight);
	}
}
let alex = new Person("alex", 30, "66kg");
console.log(alex.name); // alex
// console.log(alex.#age); // 报错 SyntaxError: Private field '#age' must be declared in an enclosing class
// console.log(alex.#weight); // 报错 SyntaxError: Private field '#age' must be declared in an enclosing class
alex.introduce(); // alex 30 66kg

// create class
class Car {
	// constructor
	constructor(brand) {
		this.carName = brand;
	}
	// method
	present() {
		return "I have a " + this.carName;
	}
	// static method
	static hello(car) {
		return "Hello!!" + car.carName;
	}
	// static parameter
	static myParameter = "my new car";
}
myCar1 = new Car("Ford");
console.log(myCar1);

// extends
class Model extends Car {
	constructor(brand, mod) {
		super(brand);
		this.model = mod;
	}
	show() {
		return this.present() + ", it is a " + this.model;
	}
}
myCar2 = new Model("Ford", "Mustang");
console.log(myCar2.show());

//static
console.log(Car.hello(myCar2));
console.log(Car.myParameter);

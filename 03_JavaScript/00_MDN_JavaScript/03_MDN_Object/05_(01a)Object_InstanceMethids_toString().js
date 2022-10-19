/* Object.prototype.toString() */
// The toString() method returns a string representing the object.
function Dog(name) {
	this.name = name;
}
const dog1 = new Dog("Gabby");
Dog.prototype.toString = function dogToString() {
	return `${this.name}`;
};
console.log(dog1.toString()); // expected output: "Gabby"

/* 
Syntax
  toString()
  Return value
    A string representing the object.
*/

/* Description */
// An object's toString() method is most commonly invoked when that object undergoes...
// explicit type conversion to a string (for example, String(myObject))
// implicit type coercion into a string (for example, myObject + "hello world")

// Note: This assumes the object does not have a custom implementation of Symbol.toPrimitive. If it does, that method will take priority and be called instead of toString().
// While not as common, the method can be invoked directly (for example, myObject.toString()).
// By default toString() returns "[object Type]", where Type is the object type.
const o = new Object().toString(); // o is "[object Object]";

// This method is inherited by every object descended from Object, but can be overridden by either the author or built-in descendant objects (for example, Number.prototype.toString()).

// Parameters
// By default toString() takes no parameters.
// However, objects that inherit from Object may override it with their own implementation that do take parameters.
// For example, the toString() methods implemented by Number and BigInt take an optional radix parameter.

/* Examples */
// Overriding the default toString method
// You can create a function to be called in place of the default toString() method.
// The toString() function you create must return a primitive.
// If it returns an object and the method is called implicitly (i.e. during type conversion or coercion),
// then its result will be ignored and the value of a related method, valueOf(), will be used instead, or a TypeError will be thrown if none of these methods return a primitive.

// The following code defines the Dog object type and creates theDog, an object of type Dog:
function Dog(name, breed, color, sex) {
	this.name = name;
	this.breed = breed;
	this.color = color;
	this.sex = sex;
}
const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

// If you call the toString() method on this custom object, it returns the default value inherited from Object:
theDog.toString(); // returns [object Object]

// The following code creates and assigns dogToString() to override the default toString() method.
// This function generates a string containing the name, breed, color, and sex of the object, in the form "property = value;".
Dog.prototype.toString = function dogToString() {
	return (
		"Dog " +
		this.name +
		" is a " +
		this.sex +
		" " +
		this.color +
		" " +
		this.breed
	);
};
// Or, using template strings:
Dog.prototype.toString = function dogToString() {
	return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
};
// With the preceding code in place, any time toString() is used in a Dog context, JavaScript automatically calls the dogToString() function, which returns the following string:
console.log(theDog.toString()); // Dog Gabby is a female chocolate Lab

// Using toString() to detect object class
// toString() can be used with every object and (by default) allows you to get its class.
// To use the base Object.prototype.toString() with an object that has had it overridden,
// you need to call Function.prototype.call() or Function.prototype.apply() on it,
// passing the object you want to inspect as the first parameter (called thisArg).

const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
toString.call(Math); // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]

// Using toString() in this way is unreliable; objects can change the behavior of Object.prototype.toString() by defining a Symbol.toStringTag property, leading to unexpected results. For example:
const myDate = new Date();
Object.prototype.toString.call(myDate); // [object Date]

myDate[Symbol.toStringTag] = "myDate";
Object.prototype.toString.call(myDate); // [object myDate]

Date.prototype[Symbol.toStringTag] = "prototype polluted";
Object.prototype.toString.call(new Date()); // [object prototype polluted]

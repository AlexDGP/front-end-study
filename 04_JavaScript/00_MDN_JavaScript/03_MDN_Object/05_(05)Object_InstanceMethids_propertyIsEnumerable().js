/* Object.prototype.propertyIsEnumerable() */
// The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable and is the object's own property.
const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;
console.log(object1.propertyIsEnumerable("property1")); // expected output: true
console.log(array1.propertyIsEnumerable(0)); // expected output: true
console.log(array1.propertyIsEnumerable("length")); // expected output: false

/*
Syntax
  propertyIsEnumerable(prop)
  Parameters
    prop
      The name of the property to test.
  Return value
    A true or false value indicating whether the specified property is enumerable and is the object's own property.
*/

/* Description */
// Every object has a propertyIsEnumerable method.
// This method can determine whether the specified property in an object can be enumerated by a for...in loop, with the exception of properties inherited through the prototype chain.
// If the object does not have the specified property, this method returns false.

// Note: Bear in mind that enumerable properties are looped over by for...in loops, with the exception of Symbols.

/* Examples */
// A basic use of propertyIsEnumerable
// The following example shows the use of propertyIsEnumerable on objects and arrays:
const o = {};
const a = [];
o.prop = "is enumerable";
a[0] = "is enumerable";
o.propertyIsEnumerable("prop"); // returns true
a.propertyIsEnumerable(0); // returns true

// User-defined vs. built-in objects
// The following example demonstrates the enumerability of user-defined vs. built-in properties:
const a = ["is enumerable"];
a.propertyIsEnumerable(0); // returns true
a.propertyIsEnumerable("length"); // returns false
Math.propertyIsEnumerable("random"); // returns false
this.propertyIsEnumerable("Math"); // returns false

// Direct vs. inherited properties
const a = [];
a.propertyIsEnumerable("constructor"); // returns false

function firstConstructor() {
	this.property = "is not enumerable";
}
firstConstructor.prototype.firstMethod = function () {};

function secondConstructor() {
	this.method = function () {
		return "is enumerable";
	};
}

secondConstructor.prototype = new firstConstructor();
secondConstructor.prototype.constructor = secondConstructor;

const o = new secondConstructor();
o.arbitraryProperty = "is enumerable";

o.propertyIsEnumerable("arbitraryProperty"); // returns true
o.propertyIsEnumerable("method"); // returns true
o.propertyIsEnumerable("property"); // returns false

o.property = "is enumerable";

o.propertyIsEnumerable("property"); // returns true

// These return false as they are on the prototype which
// propertyIsEnumerable does not consider (even though the last two
// are iterable with for-in)
o.propertyIsEnumerable("prototype"); // returns false (as of JS 1.8.1/FF3.6)
o.propertyIsEnumerable("constructor"); // returns false
o.propertyIsEnumerable("firstMethod"); // returns false

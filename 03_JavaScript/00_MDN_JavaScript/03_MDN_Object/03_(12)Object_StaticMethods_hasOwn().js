/* Object.hasOwn() */
// The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.
// Note: Object.hasOwn() is intended as a replacement for Object.prototype.hasOwnProperty().
const object1 = { prop: "exists" };
console.log(Object.hasOwn(object1, "prop")); // expected output: true
console.log(Object.hasOwn(object1, "toString")); // expected output: false
console.log(Object.hasOwn(object1, "undeclaredPropertyValue")); // expected output: false

/* 
Syntax
  hasOwn(instance, prop)
  Parameters
    instance
      The JavaScript object instance to test.
    prop
      The String name or Symbol of the property to test.
  Return value
    true if the specified object has directly defined the specified property. Otherwise false
*/

/* Description */
// The Object.hasOwn() method returns true if the specified property is a direct property of the object — even if the property value is null or undefined.
// The method returns false if the property is inherited, or has not been declared at all. Unlike the in operator, this method does not check for the specified property in the object's prototype chain.

// It is recommended over Object.hasOwnProperty() because it works for objects created using Object.create(null) and with objects that have overridden the inherited hasOwnProperty() method.
// While it is possible to workaround these problems by calling Object.prototype.hasOwnProperty() on an external object, Object.hasOwn() is more intuitive.

/* Examples */
// Using hasOwn to test for a property's existence
// The following code shows how to determine whether the example object contains a property named prop.
let example = {};
Object.hasOwn(example, "prop"); // false = 'prop' has not been defined

example.prop = "exists";
Object.hasOwn(example, "prop"); // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, "prop"); // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, "prop"); // true - own property exists with value of undefined

// Direct vs. inherited properties
// The following example differentiates between direct properties and properties inherited through the prototype chain:
let example = {};
example.prop = "exists";

// `hasOwn` will only return true for direct properties:
Object.hasOwn(example, "prop"); // returns true
Object.hasOwn(example, "toString"); // returns false
Object.hasOwn(example, "hasOwnProperty"); // returns false

// The `in` operator will return true for direct or inherited properties:
"prop" in example; // returns true
"toString" in example; // returns true
"hasOwnProperty" in example; // returns true

// Iterating over the properties of an object
// To iterate over the enumerable properties of an object, you should use:
let example = { foo: true, bar: true };
for (let name of Object.keys(example)) {
	// ...
}
// But if you need to use for...in, you can use Object.hasOwn() to skip the inherited properties:
let example = { foo: true, bar: true };
for (let name in example) {
	if (Object.hasOwn(example, name)) {
		// ...
	}
}

// Checking if an Array index exists
// The elements of an Array are defined as direct properties, so you can use hasOwn() method to check whether a particular index exists:
let fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined

// Problematic cases for hasOwnProperty
// This section demonstrate that hasOwn() is immune to the problems that affect hasOwnProperty. Firstly, it can be used with objects that have reimplemented hasOwnProperty():
var foo = {
	hasOwnProperty: function () {
		return false;
	},
	bar: "The dragons be out of office",
};

if (Object.hasOwn(foo, "bar")) {
	console.log(foo.bar); //true - reimplementation of hasOwnProperty() does not affect Object
}

// It can also be used to test objects created using Object.create(null). These do not inherit from Object.prototype, and so hasOwnProperty() is inaccessible.
var foo = Object.create(null);
foo.prop = "exists";
if (Object.hasOwn(foo, "prop")) {
	console.log(foo.prop); //true - works irrespective of how the object is created.
}

/* Object.freeze() */
// The Object.freeze() method freezes an object. A frozen object can no longer be changed;
// freezing an object prevents new properties from being added to it, existing properties from being removed,
// prevents changing the enumerability, configurability, or writability of existing properties,
// and prevents the values of existing properties from being changed.
// In addition, freezing an object also prevents its prototype from being changed.
// freeze() returns the same object that was passed in.
var obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // Throws an error in strict mode
console.log(obj.prop); // expected output: 42

/* 
Syntax
  Object.freeze(obj)
  Parameters
    obj
      The object to freeze.
  Return value
    The object that was passed to the function.
*/

/* Description */
// Nothing can be added to or removed from the properties set of a frozen object.
// Any attempt to do so will fail, either silently or by throwing a TypeError exception (most commonly, but not exclusively, when in strict mode).

// For data properties of a frozen object, values cannot be changed, the writable and configurable attributes are set to false.
// Accessor properties (getters and setters) work the same (and still give the illusion that you are changing the value).
// Note that values that are objects can still be modified, unless they are also frozen.
// As an object, an array can be frozen; after doing so, its elements cannot be altered and no elements can be added to or removed from the array.

// freeze() returns the same object that was passed into the function. It does not create a frozen copy.
// In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
//  In ES2015, a non-object argument will be treated as if it were a frozen ordinary object, and be returned.
// Object.freeze(1); // TypeError: 1 is not an object // ES5 code
var a = Object.freeze(1); // returns 1, ES2015 code

/* Examples */
// Freezing objects
var obj = {
	prop() {},
	foo: "bar",
};
obj.foo = "baz"; // Before freezing: new properties may be added,
obj.lumpy = "woof"; // and existing properties may be changed
delete obj.prop; // or removed
var o = Object.freeze(obj); // Freeze.
console.log(o === obj); // true, The return value is just the same object we passed in.
console.log(Object.isFrozen(obj)); // true
// Now any changes will fail
obj.foo = "quux"; // silently does nothing
obj.quaxxor = "the friendly duck"; // silently doesn't add the property

// In strict mode such attempts will throw TypeErrors
function fail() {
	"use strict";
	// obj.foo = "sparky"; // throws a TypeError
	// delete obj.foo; // throws a TypeError
	// delete obj.quaxxor; // returns true since attribute 'quaxxor' was never added
	// obj.sparky = "arf"; // throws a TypeError
}
fail();

// Attempted changes through Object.defineProperty;
// both statements below throw a TypeError.
// Object.defineProperty(obj, "ohai", { value: 17 });
// Object.defineProperty(obj, "foo", { value: "eit" });

// It's also impossible to change the prototype
// both statements below will throw a TypeError.
// Object.setPrototypeOf(obj, { x: 20 });
// obj.__proto__ = { x: 20 };

// The object being frozen is immutable. However, it is not necessarily constant. The following example shows that a frozen object is not constant (freeze is shallow).
const obj1 = {
	internal: {},
};
Object.freeze(obj1);
obj1.internal.a = "aValue";
console.log(obj1.internal.a); // 'aValue'

// To be a constant object, the entire reference graph (direct and indirect references to other objects) must reference only immutable frozen objects.
// The object being frozen is said to be immutable because the entire object state (values and references to other objects) within the whole object is fixed.
// Note that strings, numbers, and booleans are always immutable and that Functions and Arrays are objects.

// What is "shallow freeze"?
// The result of calling Object.freeze(object) only applies to the immediate properties of object itself and will prevent future property addition, removal or value re-assignment operations only on object.
// If the value of those properties are objects themselves, those objects are not frozen and may be the target of property addition, removal or value re-assignment operations.
const employee = {
	name: "Mayank",
	designation: "Developer",
	address: {
		street: "Rohini",
		city: "Delhi",
	},
};
Object.freeze(employee);
employee.name = "Dummy"; // fails silently in non-strict mode
console.log(employee.name); // Mayank
employee.address.city = "Noida"; // attributes of child object can be modified
console.log(employee.address.city); // Noida

// To make an object immutable, recursively freeze each property which is of type object (deep freeze).
// Use the pattern on a case-by-case basis based on your design when you know the object contains no cycles in the reference graph, otherwise an endless loop will be triggered.
// An enhancement to deepFreeze() would be to have an internal function that receives a path (e.g. an Array) argument so you can suppress calling deepFreeze() recursively when an object is in the process of being made immutable.
// You still run a risk of freezing an object that shouldn't be frozen, such as [window].
function deepFreeze(object) {
	const propNames = Object.getOwnPropertyNames(object); // Retrieve the property names defined on object
	// Freeze properties before freezing self
	for (const name of propNames) {
		const value = object[name];
		if (value && typeof value === "object") {
			deepFreeze(value);
		}
	}
	return Object.freeze(object);
}
const obj2 = {
	internal: {
		a: null,
	},
};
deepFreeze(obj2);
obj2.internal.a = "anotherValue"; // fails silently in non-strict mode
console.log(obj2.internal.a); // null

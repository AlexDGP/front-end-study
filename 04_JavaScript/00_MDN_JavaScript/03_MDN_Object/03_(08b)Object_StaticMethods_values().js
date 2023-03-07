/* Object.values() */
// The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
//  (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
const object1 = { a: "somestring", b: 42, c: false };
console.log(Object.values(object1)); // expected output: Array ["somestring", 42, false]

/*
Syntax
  Object.values(obj)
  Parameters
    obj
      The object whose enumerable own property values are to be returned.
  Return value
    An array containing the given object's own enumerable property values.
*/

/* Description */
// Object.values() returns an array whose elements are the enumerable property values found on the object.
// The ordering of the properties is the same as that given by looping over the property values of the object manually.

/* Examples */
// Using Object.values
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" }; // Array-like object
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
const my_obj = Object.create(
	{},
	{
		getFoo: {
			value: function () {
				return this.foo;
			},
		},
	}
);
my_obj.foo = "bar";
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values("foo")); // ['f', 'o', 'o']

/* Polyfill */
// To add compatible Object.values support in older environments that do not natively support it, you can find a Polyfill in the tc39/proposal-object-values-entries or in the es-shims/Object.values repositories.
if (!Object.values)
	Object.values = function (obj) {
		if (obj !== Object(obj))
			throw new TypeError("Object.values called on a non-object");
		var val = [],
			key;
		for (key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				val.push(obj[key]);
			}
		}
		return val;
	};

/* Object.fromEntries() */
// The Object.fromEntries() method transforms a list of key-value pairs into an object.
var entries = new Map([
	["foo", "bar"],
	["baz", 42],
]);
var obj = Object.fromEntries(entries);
console.log(obj); // expected output: Object { foo: "bar", baz: 42 }
/*
Syntax
  Object.fromEntries(iterable);
  Parameters
    iterable
      An iterable such as Array or Map or other objects implementing the iterable protocol.
  Return value
    A new object whose properties are given by the entries of the iterable.
*/

/* Description */
// The Object.fromEntries() method takes a list of key-value pairs and returns a new object whose properties are given by those entries.
// The iterable argument is expected to be an object that implements an @@iterator method, that returns an iterator object,
// that produces a two element array-like object, whose first element is a value that will be used as a property key,
// and whose second element is the value to associate with that property key.
// Object.fromEntries() performs the reverse of Object.entries().

/* Examples */
// Converting a Map to an Object
var map = new Map([
	["foo", "bar"],
	["baz", 42],
]);
var obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

// Converting an Array to an Object
var arr = [
	["0", "a"],
	["1", "b"],
	["2", "c"],
];
var obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }

// Object transformations
// With Object.fromEntries, its reverse method Object.entries(), and array manipulation methods, you are able to transform objects like this:
const object1 = { a: 1, b: 2, c: 3 };
const object2 = Object.fromEntries(
	Object.entries(object1).map(([key, val]) => [key, val * 2])
);
console.log(object2); // { a: 2, b: 4, c: 6 }

/* Object */
// The Object class represents one of JavaScript's data types.
// It is used to store various keyed collections and more complex entities.
// Objects can be created using the Object() constructor or the object initializer / literal syntax.
var obj = new Object({ a: 1, b: 2 }); // obj is created using the Object() constructor.
var obj = { a: 1, b: 2 }; // obj is created by the object initializer / literal syntax.

/* Description */
// Nearly all objects in JavaScript are instances of Object;
// a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden).
// However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).

// Changes to the Object prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain.
// This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.

// The Object constructor creates an object wrapper for the given value.
// If the value is null or undefined, it will create and return an empty object.
var obj = new Object(null);
var obj = new Object(undefined);
// If the value is an object already, it will return the value.
var obj1 = { a: 0, b: 1 };
var obj2 = new Object(obj1);
console.log(obj2 === obj1); // true
// Otherwise, it will return an object of a Type that corresponds to the given value.
var obj = new Object(1);
console.log(obj, obj instanceof Object); // [Number: 1] true
var obj = new Object("str");
console.log(obj, obj instanceof Object); // [String: 'str'] true

// When called in a non-constructor context, Object behaves identically to new Object().
var obj = { a: 0, b: 1 };
var obj1 = Object(obj); // a non-constructor context
var obj2 = new Object(obj); // new Object()
console.log(obj1 === obj2); // true

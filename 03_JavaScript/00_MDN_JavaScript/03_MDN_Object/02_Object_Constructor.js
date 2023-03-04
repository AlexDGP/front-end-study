/* Object() constructor */
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

/*
Syntax
  new Object()
  new Object(value)
Parameters
  value
    Any value.
*/

/* Examples */
// Creating a new Object
var o = new Object();
o.foo = 42;
console.log(o); // Object { foo: 42 }

// Using Object given undefined and null types
// The following examples store an empty Object object in o:
var o = new Object(); // {}
var o = new Object(undefined); // {}
var o = new Object(null); // {}

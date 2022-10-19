/* Object.prototype.isPrototypeOf() */
// The isPrototypeOf() method checks if an object exists in another object's prototype chain.
function Foo() {}
function Bar() {}
Bar.prototype = Object.create(Foo.prototype);
var bar = new Bar();
console.log(Foo.prototype.isPrototypeOf(bar)); // expected output: true
console.log(Bar.prototype.isPrototypeOf(bar)); // expected output: true

// Note: isPrototypeOf() differs from the instanceof operator.
// In the expression "object instanceof AFunction", the object prototype chain is checked against AFunction.prototype, not against AFunction itself.

/* 
Syntax
  isPrototypeOf(object)
  Parameters
    object
      The object whose prototype chain will be searched.
  Return value
    A Boolean indicating whether the calling object lies in the prototype chain of the specified object.
  Errors thrown
    TypeError
      A TypeError is thrown if prototypeObj is undefined or null.
*/

/* Description */
// The isPrototypeOf() method allows you to check whether or not an object exists within another object's prototype chain.

/* Examples */
// Using isPrototypeOf
// This example demonstrates that Baz.prototype, Bar.prototype, Foo.prototype and Object.prototype exist in the prototype chain for object baz:
function Foo() {}
function Bar() {}
function Baz() {}
Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var foo = new Foo();
var bar = new Bar();
var baz = new Baz();

// prototype chains:
// foo: Foo <- Object
// bar: Bar <- Foo <- Object
// baz: Baz <- Bar <- Foo <- Object
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Baz.prototype.isPrototypeOf(bar)); // false
console.log(Baz.prototype.isPrototypeOf(foo)); // false
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(foo)); // false
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(bar)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true

// The isPrototypeOf() method — along with the instanceof operator — comes in particularly handy if you have code that can only function when dealing with objects descended from a specific prototype chain;
// e.g., to guarantee that certain methods or properties will be present on that object.
if (Foo.prototype.isPrototypeOf(baz)) {
	// do something safe
}

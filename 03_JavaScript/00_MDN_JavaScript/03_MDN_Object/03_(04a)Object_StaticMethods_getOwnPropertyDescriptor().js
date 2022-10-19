/* Object.getOwnPropertyDescriptor() */
// The Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain).
// The object returned is mutable but mutating it has no effect on the original property's configuration.
const object1 = { property1: 42 };
const descriptor1 = Object.getOwnPropertyDescriptor(object1, "property1");
console.log(descriptor1); // { value: 42, writable: true, enumerable: true, configurable: true }
console.log(descriptor1.configurable); // true
console.log(descriptor1.value); // 42

/* 
Syntax
  Object.getOwnPropertyDescriptor(obj, prop)
  Parameters
    obj
      The object in which to look for the property.
    prop
      The name or Symbol of the property whose description is to be retrieved.
  Return value
    A property descriptor of the given property if it exists on the object, undefined otherwise.
*/

/* Examples */
// Using Object.getOwnPropertyDescriptor
let o;
o = {
	get foo() {
		return 17;
	},
};
console.log(Object.getOwnPropertyDescriptor(o, "foo")); // { get: [Function: get foo], set: undefined, enumerable: true, configurable: true }
o = { bar: 42 };
console.log(Object.getOwnPropertyDescriptor(o, "bar")); // { value: 42, writable: true, enumerable: true, configurable: true }
o = { [Symbol.for("baz")]: 73 };
console.log(Object.getOwnPropertyDescriptor(o, Symbol.for("baz"))); // { value: 73, writable: true, enumerable: true, configurable: true }
o = {};
Object.defineProperty(o, "qux", {
	value: 8675309,
	writable: false,
	enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(o, "qux")); // { value: 8675309, writable: false, enumerable: false, configurable: false }

// Non-object coercion
// In ES5, if the first argument to this method is not an object (a primitive), then it will cause a TypeError. In ES2015, a non-object first argument will be coerced to an object at first.
Object.getOwnPropertyDescriptor("foo", 0); // TypeError: "foo" is not an object  // ES5 code
console.log(Object.getOwnPropertyDescriptor("foo", 0)); // { value: 'f', writable: false, enumerable: true, configurable: false }, by ES2015 code:

/* Object.isFrozen() */
// The Object.isFrozen() determines if an object is frozen.
const object1 = {
	property1: 42,
};
console.log(Object.isFrozen(object1)); // expected output: false
Object.freeze(object1);
console.log(Object.isFrozen(object1)); // expected output: true

/*
Syntax
  Object.isFrozen(obj)
  Parameters
    obj
      The object which should be checked.
  Return value
    A Boolean indicating whether or not the given object is frozen.
*/

/* Description */
// An object is frozen if and only if it is not extensible, all its properties are non-configurable, and all its data properties (that is, properties which are not accessor properties with getter or setter components) are non-writable.

/* Examples */
// Using Object.isFrozen
console.log(Object.isFrozen({})); // false, A new object is extensible, so it is not frozen.
const vacuouslyFrozen = Object.preventExtensions({}); // An empty object which is not extensible is vacuously frozen.
console.log(Object.isFrozen(vacuouslyFrozen)); // true

const oneProp = { p: 42 }; // A new object with one property is also extensible, ergo not frozen.
console.log(Object.isFrozen(oneProp)); // false
Object.preventExtensions(oneProp); // Preventing extensions to the object still doesn't make it frozen, because the property is still configurable (and writable).
console.log(Object.isFrozen(oneProp)); // false
delete oneProp.p; // but then deleting that property makes the object vacuously frozen.
console.log(Object.isFrozen(oneProp)); // true

const nonWritable = { e: "plep" }; // A non-extensible object with a non-writable but still configurable property is not frozen.
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", {
	writable: false,
}); // make non-writable
console.log(Object.getOwnPropertyDescriptor(nonWritable, "e")); // { value: 'plep', writable: false, enumerable: true, configurable: true }
console.log(Object.isFrozen(nonWritable)); // false

Object.defineProperty(nonWritable, "e", {
	configurable: false,
}); // Changing that property to non-configurable, then makes the object frozen.
console.log(Object.getOwnPropertyDescriptor(nonWritable, "e")); // { value: 'plep', writable: false, enumerable: true, configurable: false }
console.log(Object.isFrozen(nonWritable)); // true

const nonConfigurable = { release: "the kraken!" }; // A non-extensible object with a non-configurable  but still writable property also isn't frozen.
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", {
	configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(nonConfigurable, "release")); // { value: 'the kraken!', writable: true, enumerable: true, configurable: false }
console.log(Object.isFrozen(nonConfigurable)); // false
Object.defineProperty(nonConfigurable, "release", {
	writable: false,
}); // Changing that property to non-writable then makes the object frozen.
console.log(Object.getOwnPropertyDescriptor(nonConfigurable, "release")); // { value: 'the kraken!', writable: false, enumerable: true, configurable: false }
console.log(Object.isFrozen(nonConfigurable)); // false

const accessor = {
	get food() {
		return "yum";
	},
}; // A non-extensible object with a configurable accessor property isn't frozen.
Object.preventExtensions(accessor);
console.log(Object.isFrozen(accessor)); // false
Object.defineProperty(accessor, "food", {
	configurable: false,
}); // ...but make that property non-configurable, and it becomes frozen.
console.log(Object.getOwnPropertyDescriptor(accessor, "food")); // { get: [Function: get food], set: undefined, enumerable: true, configurable: false }
console.log(Object.isFrozen(accessor)); // true

// But the easiest way for an object to be frozen is if Object.freeze has been called on it.
const frozen = { 1: 81 };
Object.isFrozen(frozen); // === false
Object.freeze(frozen);
Object.isFrozen(frozen); // === true
// By definition, a frozen object is non-extensible.
Object.isExtensible(frozen); // === false
// Also by definition, a frozen object is sealed.
Object.isSealed(frozen); // === true

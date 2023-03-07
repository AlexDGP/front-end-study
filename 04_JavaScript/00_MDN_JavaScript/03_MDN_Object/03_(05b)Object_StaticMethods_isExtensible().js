/* Object.isExtensible() */
// The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).
const object1 = {};
console.log(Object.isExtensible(object1)); // expected output: true
Object.preventExtensions(object1);
console.log(Object.isExtensible(object1)); // expected output: false

/*
Syntax
    Object.isExtensible(obj)
  Parameters
    obj
      The object which should be checked.
  Return value
    A Boolean indicating whether or not the given object is extensible.
*/

/* Description */
// Objects are extensible by default: they can have new properties added to them, and (in engines that support __proto__) their __proto__ property can be modified.
// An object can be marked as non-extensible using Object.preventExtensions(), Object.seal(), or Object.freeze().

/* Examples */
// Using Object.isExtensible
const empty = {}; // New objects are extensible.
Object.isExtensible(empty); // === true

// ...but that can be changed.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Sealed objects are by definition non-extensible.
const sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({});
Object.isExtensible(frozen); // === false

// Non-object coercion
// In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
// In ES2015, a non-object argument will be treated as if it was a non-extensible ordinary object, return false.
Object.isExtensible(1); // TypeError: 1 is not an object (ES5 code)
Object.isExtensible(1); // false                         (ES2015 code)

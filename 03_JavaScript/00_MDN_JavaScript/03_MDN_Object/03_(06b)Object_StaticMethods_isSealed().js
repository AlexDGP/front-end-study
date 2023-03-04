/* Object.isSealed() */
// The Object.isSealed() method determines if an object is sealed.
const object1 = { property1: 42 };
console.log(Object.isSealed(object1)); // expected output: false
Object.seal(object1);
console.log(Object.isSealed(object1)); // expected output: true

/*
Syntax
  Object.isSealed(obj)
  Parameters
    obj
      The object which should be checked.
  Return value
    A Boolean indicating whether or not the given object is sealed.
*/

/* Description */
// Returns true if the object is sealed, otherwise false.
// An object is sealed if it is not extensible and if all its properties are non-configurable and therefore not removable (but not necessarily non-writable).

/* Examples */
// Using Object.isSealed
// Objects aren't sealed by default.
const empty = {};
Object.isSealed(empty); // === false
Object.preventExtensions(empty); // If you make an empty object non-extensible, it is vacuously sealed.
Object.isSealed(empty); // === true

const hasProp = { fee: "fie foe fum" }; // The same is not true of a non-empty object, unless its properties are all non-configurable.
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

Object.defineProperty(hasProp, "fee", {
	configurable: false,
}); // But make them all non-configurable and the object becomes sealed.
Object.isSealed(hasProp); // === true

// The easiest way to seal an object, of course, is Object.seal.
const sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// A sealed object is, by definition, non-extensible.
Object.isExtensible(sealed); // === false

// A sealed object might be frozen, but it doesn't have to be.
Object.isFrozen(sealed); // === true (all properties also non-writable)

const s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false ('p' is still writable)

const s3 = Object.seal({
	get p() {
		return 0;
	},
});
Object.isFrozen(s3); // === true
// (only configurability matters for accessor properties)

// Non-object coercion
// In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
// In ES2015, a non-object argument will be treated as if it was a sealed ordinary object, return true.
Object.isSealed(1); // TypeError: 1 is not an object (ES5 code)
Object.isSealed(1); // true                          (ES2015 code)

/* Object.getOwnPropertyDescriptors() */
// The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.
const object1 = { property1: 42, property2: "str" };
const descriptors1 = Object.getOwnPropertyDescriptors(object1);
console.log(descriptors1); // { property1: { value: 42, writable: true, enumerable: true, configurable: true }, property2: { value: 'str', writable: true, enumerable: true, configurable: true } }

/* 
Syntax
  Object.getOwnPropertyDescriptors(obj)
  Parameters
    obj
      The object for which to get all own property descriptors.
  Return value
    An object containing all own property descriptors of an object. Might be an empty object, if there are no properties.
*/

/* Description */
// This method permits examination of the precise description of all own properties of an object.
// A property in JavaScript consists of either a string-valued name or a Symbol and a property descriptor.
// Further information about property descriptor types and their attributes can be found in Object.defineProperty().

/* Examples */
// Creating a shallow copy
// Whereas the Object.assign() method will only copy enumerable and own properties from a source object to a target object,
// you are able to use this method and Object.create() for a shallow copy between two unknown objects:
Object.create(
	Object.getPrototypeOf(obj),
	Object.getOwnPropertyDescriptors(obj)
);

// Creating a subclass
// A typical way of creating a subclass is to define the subclass,
// set its prototype to an instance of the superclass,
// and then define properties on that instance. This can get awkward especially for getters and setters.
// Instead, you can use this code to set the prototype:
function superclass() {}
superclass.prototype = {
	// Define the superclass constructor, methods, and properties here
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
	// Define the subclass constructor, methods, and properties here
});

/* Object.defineProperty() */
// The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
var object1 = {};
Object.defineProperty(object1, "property1", {
	value: 42,
	writable: false,
});
object1.property1 = 77; // throws an error in strict mode
console.log(object1.property1); // expected output: 42

/* 
Syntax
  Object.defineProperty(obj, prop, descriptor)
  Parameters
    obj
      The object on which to define the property.
    prop
      The name or Symbol of the property to be defined or modified.
    descriptor
      The descriptor for the property being defined or modified.
  Return value
    The object that was passed to the function.
*/

/* Description */
// This method allows a precise addition to or modification of a property on an object.
// Normal property addition through assignment creates properties which show up during property enumeration (for...in loop or Object.keys method), whose values may be changed, and which may be deleted.
// This method allows these extra details to be changed from their defaults. By default, values added using Object.defineProperty() are immutable and not enumerable.

// Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors.
// A data descriptor is a property that has a value, which may or may not be writable.
// An accessor descriptor is a property described by a getter-setter pair of functions.
// A descriptor must be one of these two flavors; it cannot be both.

// Both data and accessor descriptors are objects.
// They share the following optional keys (please note: the defaults mentioned here are in the case of defining properties using Object.defineProperty()):

// configurable
// when this is set to false,
// the type of this property cannot be changed between data property and accessor property, and
// the property may not be deleted, and
// other attributes of its descriptor cannot be changed (however, if it's a data descriptor with writable: true, the value can be changed, and writable can be changed to false).
// Defaults to false.

// enumerable
// true if and only if this property shows up during enumeration of the properties on the corresponding object.
// Defaults to false.

// A data descriptor also has the following optional keys:
// value
// The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).
// Defaults to undefined.

// writable
// true if the value associated with the property may be changed with an assignment operator. Defaults to false.

// An accessor descriptor also has the following optional keys:
// get
// A function which serves as a getter for the property, or undefined if there is no getter.
// When the property is accessed, this function is called without arguments and with this set to the object through which the property is accessed (this may not be the object on which the property is defined due to inheritance).
// The return value will be used as the value of the property.
// Defaults to undefined.

// set
// A function which serves as a setter for the property, or undefined if there is no setter.
// When the property is assigned, this function is called with one argument (the value being assigned to the property) and with this set to the object through which the property is assigned.
// Defaults to undefined.

// If a descriptor has neither of value, writable, get and set keys, it is treated as a data descriptor.
// If a descriptor has both [value or writable] and [get or set] keys, an exception is thrown.

// Bear in mind that these attributes are not necessarily the descriptor's own properties.
// Inherited properties will be considered as well.
// In order to ensure these defaults are preserved, you might freeze the Object upfront, specify all options explicitly, or point to null with Object.create(null).
var obj = {};
// 1. Using a null prototype: no inherited properties
var descriptor = Object.create(null);
descriptor.value = "static";
// not enumerable, not configurable, not writable as defaults
Object.defineProperty(obj, "key", descriptor);

// 2. Being explicit by using a throw-away object literal with all attributes present
Object.defineProperty(obj, "key2", {
	enumerable: false,
	configurable: false,
	writable: false,
	value: "static",
});

// 3. Recycling same object
function withValue(value) {
	const d =
		withValue.d ||
		(withValue.d = {
			enumerable: false,
			writable: false,
			configurable: false,
			value: value,
		});
	if (d.value !== value) d.value = value; // avoiding duplicate operation for assigning value
	return d;
}
// ... and ...
Object.defineProperty(obj, "key", withValue("static"));

// if freeze is available, prevents adding or
// removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);

// If the old descriptor had its configurable attribute set to false, the property is said to be non-configurable.
// It is not possible to change any attribute of a non-configurable accessor property, and it is not possible to switch between data and accessor property types.
// For data properties with writable: true, it is possible to modify the value and change the writable attribute from true to false.
// A TypeError is thrown when attempts are made to change non-configurable property attributes (except value and writable, if permitted), except when defining a value same as the original value on a data property.

// When the current property is configurable, defining an attribute to undefined effectively deletes it.
// For example, if o.k is an accessor property, Object.defineProperty(o, "k", { set: undefined }) will remove the setter, making k only have a getter and become readonly.
// If an attribute is absent from the new descriptor, the old descriptor attribute's value is kept (it won't be implicitly re-defined to undefined).
// It is possible to toggle between data and accessor property by giving a descriptor of a different "flavor".
// For example, if the new descriptor is a data descriptor (with value or writable), the original descriptor's get and set attributes will both be dropped.

/* Examples */
// Creating a property
// When the property specified doesn't exist in the object, Object.defineProperty() creates a new property as described.
// Fields may be omitted from the descriptor, and default values for those fields are inputted.
var o = {}; // Creates a new object
Object.defineProperty(o, "a", {
	value: 37,
	writable: true,
	enumerable: true,
	configurable: true,
}); // Example of an object property added with defineProperty with a data property descriptor
// 'a' property exists in the o object and its value is 37

// Example of an object property added with defineProperty with an accessor property descriptor
var bValue = 38;
Object.defineProperty(o, "b", {
	// Using shorthand method names (ES2015 feature).
	// This is equivalent to:
	// get: function() { return bValue; },
	// set: function(newValue) { bValue = newValue; },
	get() {
		return bValue;
	},
	set(newValue) {
		bValue = newValue;
	},
	enumerable: true,
	configurable: true,
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue,
// unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, "conflict", {
	value: 0x9f91102,
	get() {
		return 0xdeadbeef;
	},
}); // TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>

// Modifying a property
// When modifying an existing property, the current property configuration determines if the operator succeeds, does nothing, or throws a TypeError.
// Writable attribute
// When the writable property attribute is set to false, the property is said to be "non-writable". It cannot be reassigned.

var o = {}; // Creates a new object
Object.defineProperty(o, "a", {
	value: 37,
	writable: false,
});
console.log(o.a); // logs 37
o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.

// strict mode
(function () {
	"use strict";
	var o = {};
	Object.defineProperty(o, "b", {
		value: 2,
		writable: false,
	});
	// o.b = 3; // TypeError: Cannot assign to read only property 'b' of object '#<Object>'
	console.log(o.b); // 2
})();
// As seen in the example, trying to write into the non-writable property doesn't change it but doesn't throw an error either.

// Enumerable attribute
// The enumerable property attribute defines whether the property is picked by Object.assign() or spread operator.
// For non-Symbol properties it also defines whether it shows up in a for...in loop and Object.keys() or not.
var o = {};
Object.defineProperty(o, "a", {
	value: 1,
	enumerable: true,
});
Object.defineProperty(o, "b", {
	value: 2,
	enumerable: false,
});
Object.defineProperty(o, "c", {
	value: 3,
}); // enumerable defaults to false
o.d = 4; // enumerable defaults to true when creating a property by setting it
Object.defineProperty(o, Symbol.for("e"), {
	value: 5,
	enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
	value: 6,
	enumerable: false,
});

for (const i in o) {
	console.log(i);
} // logs 'a' and 'd' (in undefined order)

console.log(Object.keys(o)); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

var p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined

// Configurable attribute
// The configurable attribute controls at the same time whether the property can be deleted from the object and whether its attributes (other than value and writable) can be changed.
// When it is false, but writable is true, value can still be changed, and writable can still be toggled from true to false;
// when it is true, but writable is false, value may still be replaced with defineProperty (but not with assignment operators), and writable may be toggled.
var o = {};
Object.defineProperty(o, "a", {
	get() {
		return 1;
	},
	configurable: false,
});
// Object.defineProperty(o, "a", {
// 	configurable: true,
// }); // TypeError: Cannot redefine property: a
// Object.defineProperty(o, "a", {
// 	enumerable: true,
// }); // TypeError: Cannot redefine property: a
// Object.defineProperty(o, "a", {
// 	set() {},
// }); // TypeError: Cannot redefine property: a (set was undefined previously)
// Object.defineProperty(o, "a", {
// 	get() {
// 		return 1;
// 	},
// }); // TypeError: Cannot redefine property: a (even though the new get does exactly the same thing)
// Object.defineProperty(o, "a", {
// 	value: 12,
// }); // TypeError: Cannot redefine property: a ('value' can be changed when 'configurable' is false but not in this case due to 'get' accessor)
console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
// If the configurable attribute of o.a had been true, none of the errors would be thrown and the property would be deleted at the end.

// Adding properties and default values
// It is important to consider the way default values of attributes are applied.
// There is often a difference between using dot notation to assign a value and using Object.defineProperty(), as shown in the example below.
var o = {};
o.a = 1;
// is equivalent to:
Object.defineProperty(o, "a", {
	value: 1,
	writable: true,
	configurable: true,
	enumerable: true,
});

// On the other hand,
Object.defineProperty(o, "a", { value: 1 });
// is equivalent to:
Object.defineProperty(o, "a", {
	value: 1,
	writable: false,
	configurable: false,
	enumerable: false,
});

// Custom Setters and Getters
// The example below shows how to implement a self-archiving object. When temperature property is set, the archive array gets a log entry.
function Archiver() {
	const temperature = null;
	const archive = [];
	Object.defineProperty(this, "temperature", {
		get() {
			console.log("get!");
			return temperature;
		},
		set(value) {
			temperature = value;
			archive.push({ val: temperature });
		},
	});
	this.getArchive = function () {
		return archive;
	};
}
const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]

// In this example, a getter always returns the same value.
const pattern = {
	get() {
		return "I always return this string, " + "whatever you have assigned";
	},
	set() {
		this.myname = "this is my name string";
	},
};

function TestDefineSetAndGet() {
	Object.defineProperty(this, "myproperty", pattern);
}

const instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty); // I always return this string, whatever you have assigned
console.log(instance.myname); // this is my name string

// Inheritance of properties
// If an accessor property is inherited, its get and set methods will be called when the property is accessed and modified on descendant objects.
// If these methods use a variable to store the value, this value will be shared by all objects.
function myclass() {}
var value;
Object.defineProperty(myclass.prototype, "x", {
	get() {
		return value;
	},
	set(x) {
		value = x;
	},
});
var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // 1

// This can be fixed by storing the value in another property. In get and set methods, this points to the object which is used to access or modify the property.
function myclass() {}
Object.defineProperty(myclass.prototype, "x", {
	get() {
		return this.stored_x;
	},
	set(x) {
		this.stored_x = x;
	},
});
const a = new myclass();
const b = new myclass();
a.x = 1;
console.log(b.x); // undefined

// Unlike accessor properties, value properties are always set on the object itself, not on a prototype.
// However, if a non-writable value property is inherited, it still prevents from modifying the property on the object.
function myclass() {}
myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, "y", {
	writable: false,
	value: 1,
});
var a = new myclass();
a.x = 2;
console.log(a.x); // 2
console.log(myclass.prototype.x); // 1
a.y = 2; // Ignored, throws in strict mode
console.log(a.y); // 1
console.log(myclass.prototype.y); // 1

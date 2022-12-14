/* Object.defineProperties() */
// The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
var object1 = {};
Object.defineProperties(object1, {
	property1: {
		value: 42,
		writable: true,
	},
	property2: {},
});
console.log(object1.property1); // expected output: 42
/* 
Syntax
  Object.defineProperties(obj, props)
  Parameters
    obj
      The object on which to define or modify properties.
    props
      An object whose keys represent the names of properties to be defined or modified and whose values are objects describing those properties. 
      Each value in props must be either a data descriptor or an accessor descriptor; it cannot be both (see Object.defineProperty() for more details).
  Return value
    The object that was passed to the function.
*/

// Polyfill
// Assuming a pristine execution environment with all names and properties referring to their initial values,
// Object.defineProperties is almost completely equivalent (note the comment in isCallable) to the following reimplementation in JavaScript:
function defineProperties(obj, properties) {
	function convertToDescriptor(desc) {
		function hasProperty(obj, prop) {
			return Object.prototype.hasOwnProperty.call(obj, prop);
		}
		function isCallable(v) {
			// NB: modify as necessary if other values than functions are callable.
			return typeof v === "function";
		}
		if (typeof desc !== "object" || desc === null)
			throw new TypeError("bad desc");
		var d = {};
		if (hasProperty(desc, "enumerable")) d.enumerable = !!desc.enumerable;
		if (hasProperty(desc, "configurable")) d.configurable = !!desc.configurable;
		if (hasProperty(desc, "value")) d.value = desc.value;
		if (hasProperty(desc, "writable")) d.writable = !!desc.writable;
		if (hasProperty(desc, "get")) {
			var g = desc.get;
			if (!isCallable(g) && typeof g !== "undefined")
				throw new TypeError("bad get");
			d.get = g;
		}
		if (hasProperty(desc, "set")) {
			var s = desc.set;
			if (!isCallable(s) && typeof s !== "undefined")
				throw new TypeError("bad set");
			d.set = s;
		}
		if (("get" in d || "set" in d) && ("value" in d || "writable" in d))
			throw new TypeError("identity-confused descriptor");
		return d;
	}
	if (typeof obj !== "object" || obj === null) throw new TypeError("bad obj");
	properties = Object(properties);
	var keys = Object.keys(properties);
	var descs = [];
	for (var i = 0; i < keys.length; i++)
		descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
	for (var i = 0; i < descs.length; i++)
		Object.defineProperty(obj, descs[i][0], descs[i][1]);
	return obj;
}

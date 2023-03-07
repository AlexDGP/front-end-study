// undefined
// The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.
// Property attributes of undefined
// Writable	no
// Enumerable	no
// Configurable	no

// Syntax
// undefined

// Description
// undefined is a property of the global object. That is, it is a variable in global scope. The initial value of undefined is the primitive value undefined.
// In modern browsers (JavaScript 1.8.5 / Firefox 4+), undefined is a non-configurable, non-writable property, per the ECMAScript 5 specification. (Even when this is not the case, avoid overriding it.)
// A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.
// Note: While you can use undefined as an identifier (variable name) in any scope other than the global scope (because undefined is not a reserved word), doing so is a very bad idea that will make your code difficult to maintain and debug.
//  DON'T DO THIS
(function () {
	const undefined = "foo";
	console.log(undefined, typeof undefined);
})(); //  logs "foo string"
(function (undefined) {
	console.log(undefined, typeof undefined);
})("foo"); //  logs "foo string"

// Examples
// Strict equality and undefined
// You can use undefined and the strict equality and inequality operators to determine whether a variable has a value. In the following code, the variable x is not initialized, and the if statement evaluates to true.
let x;
if (x === undefined) {
	console.log("these statements execute");
} else {
	console.log("these statements do not execute");
} // these statements do not execute

// typeof operator and undefined
// Alternatively, typeof can be used:
let x2;
if (typeof x2 === "undefined") {
	console.log("these statements execute");
} // these statements do not execute

// One reason to use typeof is that it does not throw an error if the variable has not been declared.
// x3 has not been declared before
if (typeof x3 === "undefined") {
	//  evaluates to true without errors
	//  these statements execute
}
if (x3 === undefined) {
	//  ReferenceError: x3 is not defined
}

// void operator and undefined
// The void operator is a third alternative.
let x4;
if (x4 === void 0) {
	console.log("these statements execute");
} //  these statements execute
// y has not been declared before
if (y === void 0) {
	// ReferenceError: y is not defined
}

// NaN
// The global NaN property is a value representing Not-A-Number.
// Property attributes of NaN
// Writable	no
// Enumerable	no
// Configurable	no

// Description
// NaN is a property of the global object. In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it. It is rather rare to use NaN in a program.
// There are five different types of operations that return NaN:
// Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
// Math operation where the result is not a real number (e.g. Math.sqrt(-1))
// Operand of an argument is NaN (e.g. 7 ** NaN)
// Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
// Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)

// Examples
// Testing against NaN
// NaN compares unequal (via ==, !=, ===, and !==) to any other value -- including to another NaN value. Use Number.isNaN() or isNaN() to most clearly determine whether a value is NaN. Or perform a self-comparison: NaN, and only NaN, will compare unequal to itself.
NaN === NaN; // false(Only NaN, will compare unequal to itself.)
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true
function valueIsNaN(v) {
	return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true

// However, do note the difference between isNaN() and Number.isNaN(): the former will return true if the value is currently NaN, or if it is going to be NaN after it is coerced to a number, while the latter will return true only if the value is currently NaN.
console.log(isNaN("hello world")); // true (isNaN(): the former will return true if the value is currently NaN, or if it is going to be NaN after it is coerced to a number)
console.log(Number.isNaN("hello world")); // false (will return true only if the value is currently NaN)

// For the same reason, using a bigint value will throw an error with isNaN() and not with `Number.isNaN():
// isNaN(1n); // TypeError: Cannot convert a BigInt value to a number
console.log(Number.isNaN(1n)); // false

//Additionally, some array methods cannot find NaN, while others can.
let arr = [2, 4, NaN, 12];
console.log(arr.indexOf(NaN)); // -1 (false) indexOf() can't find NaN.
console.log(arr.includes(NaN)); // true includes() can find NaN.
console.log(arr.findIndex((n) => Number.isNaN(n))); // 2 findIndex() can find NaN.

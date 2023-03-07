console.log(Boolean(10 > 9)); // 返回 true
// constructor
let bool = false;
console.log(bool.constructor); // 返回 function Boolean() { [native code] }

// constructor的使用(&&&)
var test = new Boolean();
if (test.constructor == Array) {
	console.log("This is an Array");
}
if (test.constructor == Boolean) {
	console.log("This is a Boolean");
}
if (test.constructor == Date) {
	console.log("This is a Date");
}
if (test.constructor == String) {
	console.log("This is a String");
}

// Boolean.toString()
console.log(bool.toString() === "false"); //返回 true

// Boolean.valueOf()
console.log(bool.valueOf()); // 返回 false

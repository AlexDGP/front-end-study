// eval()
// Warning: Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use eval(). See Never use eval()!, below.
// The eval() function evaluates JavaScript code represented as a string.

// Syntax
// eval(string)

// Parameters
// string
// A string representing a JavaScript expression, statement, or sequence of statements. The expression can include variables and properties of existing objects.
// Return value
// The completion value of evaluating the given code. If the completion value is empty, undefined is returned.

// Description
// eval() is a function property of the global object.
// The argument of the eval() function is a string. If the string represents an expression, eval() evaluates the expression. If the argument represents one or more JavaScript statements, eval() evaluates the statements. Do not call eval() to evaluate an arithmetic expression; JavaScript evaluates arithmetic expressions automatically.
// If you construct an arithmetic expression as a string, you can use eval() to evaluate it at a later time. For example, suppose you have a variable x. You can postpone evaluation of an expression involving x by assigning the string value of the expression, say "3 * x + 2", to a variable, and then calling eval() at a later point in your script.
// If the argument of eval() is not a string, eval() returns the argument unchanged. In the following example, the String constructor is specified and eval() returns a String object rather than evaluating the string.
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
// You can work around this limitation in a generic fashion by using toString().
const expression = new String("2 + 2");
eval(expression.toString()); // returns 4
// If you use the eval function indirectly, by invoking it via a reference other than eval, as of ECMAScript 5 it works in the global scope rather than the local scope. This means, for instance, that function declarations create global functions, and that the code being evaluated doesn't have access to local variables within the scope where it's being called.
(function test() {
	const x = 2,
		y = 4;
	// Direct call, uses local scope
	console.log(eval("x + y")); // Result is 6
	// Indirect call using the comma operator to return eval
	// console.log((0, eval)("x + y")); // Uses global scope, throws because x is undefined
	// Indirect call using a variable to store and return eval
	// const geval = eval;
	// console.log(geval("x + y")); // Uses global scope, throws because x is undefined
})();

// Never use eval()!&&&

// Examples
// Using eval
// In the following code, both of the statements containing eval() return 42. The first evaluates the string "x + y + 1"; the second evaluates the string "42".
var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // returns 42
eval(z); // returns 42
// Using eval to evaluate a string of JavaScript statements
// The following example uses eval() to evaluate the string str. This string consists of JavaScript statements that assigns z a value of 42 if x is five, and assigns 0 to z otherwise. When the second statement is executed, eval() will cause these statements to be performed, and it will also evaluate the set of statements and return the value that is assigned to z.
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0;";
console.log("z is ", eval(str));
// If you define multiple values then the last value is returned.
var x = 5;
const str =
	"if (x == 5) {console.log('z is 42'); z = 42; x = 420; } else z = 0;";
console.log("x is ", eval(str)); // z is 42  x is 420
// Last expression is evaluated
// eval() returns the value of the last expression evaluated.
var str = "if ( a ) { 1 + 1; } else { 1 + 2; }";
var a = true;
var b = eval(str); // returns 2
console.log("b is : " + b);
a = false;
b = eval(str); // returns 3
console.log("b is : " + b);
// eval as a string defining function requires "(" and ")" as prefix and suffix
const fctStr1 = "function a() {}";
const fctStr2 = "(function a() {})";
const fct1 = eval(fctStr1); // return undefined
const fct2 = eval(fctStr2); // return a function

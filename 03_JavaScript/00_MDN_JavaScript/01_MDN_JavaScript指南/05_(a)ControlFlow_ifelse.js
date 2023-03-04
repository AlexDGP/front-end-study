// 流程控制(Control flow) if...else...
/* 01_方式一
 if (condition) {
	statement_1;
} else {
	statement_2;
}
*/
function judgePositiveNumber(x) {
	if (x > 0) {
		console.log(x + " is a positive number");
	} else {
		console.log(x + " is not a positive number");
	}
}
judgePositiveNumber(3.14); // 3.14 is a positive number

/* 02_方式二
if (condition_1) {
  statement_1;
}else if (condition_2) {
  statement_2;
}else if (condition_n_1) {
  statement_n;
}else {
  statement_last;
}
 */
function judgeNumber(x) {
	if (x > 0) {
		console.log(x + " is a positive number");
	} else if (x === 0) {
		console.log(x + " is zero");
	} else {
		console.log(x + " is not a positive number");
	}
}
judgeNumber(0); // 0 is zero

// 03_错误的值(Falsy values)
// false
// undefined
// null
// 0
// NaN
// the empty string ("")
function judgeFalsyValue(value) {
	if (value) {
		console.log(value + " is not falsy value");
	} else {
		console.log(value + " is falsy value");
	}
}
judgeFalsyValue(NaN); // NaN is falsy value
judgeFalsyValue("MyValue"); // MyValue is not falsy value

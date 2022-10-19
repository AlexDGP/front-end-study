// 01_throw throw语句后的语句不再执行
// 语法: throw expression;
// throw "Error2";   // String type
// throw 42;         // Number type
// throw true;       // Boolean type
// throw {toString: function() { return "I'm an object!"; } };

/* 
// Create an object type UserException
function UserException(message) {
	this.message = message;
	this.name = "UserException";
}
// Make the exception convert to a pretty string when used as
// a string (e.g. by the error console)
UserException.prototype.toString = function () {
	return this.name + ': "' + this.message + '"';
};
// Create an instance of the object type and throw it
throw new UserException("Value too high");
console.log("不执行"); // 不会被执行 
*/

// 02_try...[catch...][finally...]
function getMonthName(mo) {
	mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
	var months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	if (months[mo]) {
		return months[mo];
	} else {
		throw "InvalidMonthNo"; //throw keyword is used here
	}
}

try {
	monthName = getMonthName(-10); // -10 => throw "InvalidMonthNo"
} catch (e) {
	monthName = "unknown";
	console.log(e); // e === "InvalidMonthNo"
} finally {
	// 不论怎样都会执行finally语句
	console.log("process end"); // process end
}

// 03_使用Error对象
function doSomethingErrorProne() {
	function ourCodeMakesAMistake() {
		return true;
	}
	function doSomethingToGetAJavascriptError() {}
	if (ourCodeMakesAMistake()) {
		throw new Error("The message");
	} else {
		doSomethingToGetAJavascriptError();
	}
}
try {
	doSomethingErrorProne();
} catch (e) {
	console.log(e);
	/* 	
	Error: The message
			at doSomethingErrorProne (c:\Users\AlexHome\Desktop\StudyProjects\03_javascript\MDN_JavaScript\JavaScript指南\06_ExceptionHandling.js:65:9)
			at Object.<anonymous> (c:\Users\AlexHome\Desktop\StudyProjects\03_javascript\MDN_JavaScript\JavaScript指南\06_ExceptionHandling.js:71:2)
			at Module._compile (node:internal/modules/cjs/loader:1105:14)
			at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
			at Module.load (node:internal/modules/cjs/loader:981:32)
			at Function.Module._load (node:internal/modules/cjs/loader:822:12)
			at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
			at node:internal/main/run_main_module:17:47 
		*/
	console.log(e.name); // Error
	console.log(e.message); // message
}

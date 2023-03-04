// for
/* 语法
for ([initialExpression]; [condition]; [incrementExpression])
	statement;
*/
let array = [0, 1, 2, 3];
for (let index = 0; index < array.length; index++) {
	const element = array[index];
	console.log(element); // 0 1 2 3
}
// without [initialExpression]
var i = 0;
for (; i < 9; i++) {
	console.log(i); // 0 1 2 3 4 5 6 7 8
}

// without [condition]
for (var i = 0; ; i++) {
	console.log(i); // 0 1 2 3 4
	if (i > 3) break;
}

// without [initialExpression]; [condition]; [incrementExpression]
var i = 0;
for (;;) {
	if (i > 3) break;
	console.log(i); // 0 1 2 3
	i++;
}

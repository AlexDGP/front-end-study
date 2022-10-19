// label 一个 label 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 label 标识一个循环， 然后使用 break 或者 continue 来指出程序是否该停止循环还是继续循环。
/* 
label :
   statement
*/

// break 使用 break 语句来终止循环，switch， 或者是链接到 label 语句。
//  当你使用不带 label 的 break 时， 它会立即终止当前所在的 while，do-while，for，或者 switch 并把控制权交回这些结构后面的语句。
//  当你使用带 label 的 break 时，它会终止指定的带标记（label）的语句。
/* 语法
break [label];
*/

// continue 语句可以用来继续执行（跳过代码块的剩余部分并进入下一循环）一个 while、do-while、for，或者 label 语句。
// 	当你使用不带 label 的 continue 时， 它终止当前 while，do-while，或者 for 语句到结尾的这次的循环并且继续执行下一次循环。
// 	当你使用带 label 的 continue 时， 它会应用被 label 标识的循环语句。
/* 语法
continue [label];
*/

// break without label
var num = 0;
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i == 5 && j == 5) {
			break; // i = 5，j = 5 时，会跳出 j 循环
		} // 但 i 循环会继续执行，等于跳出之后又继续执行更多次 j 循环
		num++;
	}
}
console.log(num); // 95

// break with label
var num = 0;
outPoint: for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i == 5 && j == 5) {
			break outPoint; // 在 i = 5，j = 5 时，跳出所有循环，
			// 返回到整个 outPoint 下方，继续执行
		}
		num++;
	}
}
console.log(num); // 55

// continue with label
var num = 0;
outPoint: for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i == 5 && j == 5) {
			continue outPoint;
		}
		num++;
	}
}
console.log(num); // 95

// continue without label
var num = 0;
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i == 5 && j == 5) {
			continue;
		}
		num++;
	}
}
console.log(num); // 99

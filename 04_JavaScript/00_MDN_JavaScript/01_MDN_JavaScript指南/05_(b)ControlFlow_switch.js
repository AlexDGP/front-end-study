// 流程控制(Control flow) switch
/* 01_语法
switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   ...
   default:
      statements_def
      [break;]
}
*/
function judgePhoneBrand(x) {
	switch (x) {
		case "Apple":
			console.log("This phone's brand is Apple");
			break;
		case "Huawei":
			console.log("This phone's brand is Huawei");
			break;
		case "Xiaomi":
			console.log("This phone's brand is Xiaomi");
			break;
		default:
			console.log("This phone's brand is unkown");
			break;
	}
}
judgePhoneBrand("Apple"); // This phone's brand is Apple

// 02_case穿透
function judgePhoneBrand2(x) {
	switch (x) {
		case "Apple":
			console.log("This phone's brand is Apple");
		case "Huawei":
			console.log("This phone's brand is Huawei");
			break;
		case "Xiaomi":
			console.log("This phone's brand is Xiaomi");
			break;
		default:
			console.log("This phone's brand is unkown");
			break;
	}
}
judgePhoneBrand2("Apple");
// This phone's brand is Apple
// This phone's brand is Huawei

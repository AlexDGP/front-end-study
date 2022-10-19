const fs = require("fs");
const util = require("util");
var myReadFile = util.promisify(fs.readFile);

// 方法一
// fs.readFile("./resource/1.txt", (error, data1) => {
// 	if (error) throw error;
// 	fs.readFile("./resource/2.txt", (error, data2) => {
// 		if (error) throw error;
// 		fs.readFile("./resource/3.txt", (error, data3) => {
// 			if (error) throw error;
// 			console.log(data1 + data2 + data3);
// 		});
// 	});
// });

// 方法二
async function main() {
	try {
		let data1 = await myReadFile("./resource/1.txt");
		let data2 = await myReadFile("./resource/2.txt");
		let data3 = await myReadFile("./resource/3.txt");
		console.log(data1 + data2 + data3);
	} catch (error) {
		console.log(error);
	}
}
main();

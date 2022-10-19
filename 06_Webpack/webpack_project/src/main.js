import count from "./js/count";
import sum from "./js/sum";
// import { add } from "./js/math";
import "./css/index.css";
import "./scss/index.scss";
import "./css/iconfont.css";

// var result = 0;
// console.log(result);
console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
console.log(add(5, 5));

document.getElementById("btn").onClick = function () {
	// eslint会对动态导入语法报错，需要修改eslint配置文件
	// webpackChunkName: "math"：这是webpack动态导入模块命名的方式
	// "math"将来就会作为[name]的值显示。
	import(/* webpackChunkName: "math" */ "./js/math.js").then(({ add }) => {
		console.log(count(2, 1));
	});
};

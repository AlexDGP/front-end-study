// 01_分别暴露
// export let school = "itcast";
// export function call(tel) {
// 	console.log("call:" + tel);
// }

// 02_统一暴露
let school = "itcast";
function call(tel) {
	console.log("call:" + tel);
}
export { school, call };

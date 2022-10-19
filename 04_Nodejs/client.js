// console.log("a");
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "http://127.0.0.1:8000/login");
// xhr.send();
const http = require("http");
const req = new http.request("http://127.0.0.1:8000", (res) => {
	console.log(res);
});

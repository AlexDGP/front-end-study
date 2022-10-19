const http = require("http");
const url = require("url");

// Create a local server by new a http.Server instance
const server = new http.Server();

const server1 = http.createServer(new http.re());
// Listen to the request event
server.on("request", (req, res) => {
	console.log("request");
	res.end("asdasdasd");
});

server.listen(8000, () => {
	console.log("server is listen on port:8080");
});

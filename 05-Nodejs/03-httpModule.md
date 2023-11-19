# http Module

## 01 What is http?

## 02 Create a web server by using http module.

`http.createServer()`returns a new instance of [`http.Server`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#class-httpserver).

```js
const http = require("http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(8000, () => {
	console.log("server is running at port:8080");
});
```

```js
const http = require("http");

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(8000, () => {
	console.log("server is listen on port:8080");
});
```

```js
const http = require("http");

// Create a local server by new a http.Server instance
const server = new http.Server();

// Listen to the request event
server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(8000, () => {
	console.log("server is listen on port:8080");
});
```

`http.createServer((req, res) => {})`

`req`:  `http.ClientRequest` includes the information of client request sending to server, such as url, request method, request header

`res`: `http.ServerResponse` includes the information of response sending to client from server

## 03 `server.listen()` method

`server.listen([port[, host[, backlog]]][, callback])`

- `port` <number>
- `host` <string>
- `backlog` <backlog>
- `callback` <Function>
- Returns: <`net.Server`>

## 04 `http.ClientRequest` class

This object is created internally and returned from [`http.request()`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#httprequestoptions-callback). It represents an *in-progress* request whose header has already been queued. The header is still mutable using the [`setHeader(name, value)`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#requestsetheadername-value), [`getHeader(name)`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#requestgetheadername), [`removeHeader(name)`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#requestremoveheadername) API. The actual header will be sent along with the first data chunk or when calling [`request.end()`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#requestenddata-encoding-callback).

To get the response, add a listener for [`'response'`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#event-response) to the request object. [`'response'`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#event-response) will be emitted from the request object when the response headers have been received. The [`'response'`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#event-response) event is executed with one argument which is an instance of [`http.IncomingMessage`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#class-httpincomingmessage).

During the [`'response'`](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#event-response) event, one can add listeners to the response object; particularly to listen for the `'data'` event.

`req.url`

`req.method`

`req.headers`

## 05 Dealing with URL

```js
const http = require("http");

// Create a local server by new a http.Server instance
const server = new http.Server();

// Listen to the request event
server.on("request", (req, res) => {
    // Dealing with URL
	if (req.url === "/login") {
		res.end("Login page");
	} else if (req.url === "/users") {
		res.end("User list page");
	} else {
		res.end("Error");
	}
});

server.listen(8000, () => {
	console.log("server is listen on port:8080");
});
```


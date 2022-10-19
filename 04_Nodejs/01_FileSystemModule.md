# File System Module

## What is File System module?

File System module enables interacting with the file system in a way modeled on standard POSIX functions.

All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS(CJS) syntax and ES6 Modules (ESM).

To use the callback and sync APIs:

```js
const fs = require("fs"); // CJS
import * as fs from "fs"; // ESM
```

To use the promise-based APIs:

```js
const fs = require('fs/promises'); // CJS
import * as fs from 'fs/promises'; // ESM
```

## File System methods

### `readFile()`

- Synchronous

```js
const fs = require("fs");
try {
	const content = fs.readFileSync("./test.txt");
	console.log(content.toString());
} catch (error) {
	console.log(`there was an error: ${error.message}`);
}
```

- Callback

```js
const fs = require("fs");
fs.readFile("./test.txt", (error, data) => {
 if (error) throw error;
 console.log(`File content is: ${content.toString()}`);
});
```

- Promise

  Using asynchronous function

```js
const fs = require("fs/promises");
(async function (path) {
	try {
		const content = await fs.readFile(path);
		console.log(`File content is: ${content.toString()}`);
	} catch (error) {
		console.error(`there was an error: ${error.message}`);
	}
})("./test.txt");
```

​	Using Promise.prototype.then() method
```js
const fs = require("fs/promises");
const promise = fs.readFile("./test.txt");
promise.then(
	(value) => {
		console.log(value.toString());
	},
	(reason) => {
		console.log(`there was an error: ${reason.message}`);
	}
);
```

### `writeFile()`

- Synchronous

```js
const fs = require("fs");
try {
	fs.writeFileSync("./newFile.txt", "newFile content");
} catch (error) {
	console.log(`there was an error: ${error.message}`);
}
```

- Callback

```js
const fs = require("fs");
fs.writeFile("./newFile.txt", "newFile content", (error) => {
	console.log(`there was an error: ${error.message}`);
});
```

- Promise

  Using asynchronous function

```js
const fs = require("fs/promises");
(async function (path) {
	try {
		await fs.writeFile(path, "newFile content");
	} catch (error) {
		console.log(`there was an error: ${error.message}`);
	}
})("./test.txt");
```

​	Using Promise.prototype.then() method

```js
const fs = require("fs/promises");
const promise = fs.writeFile("./newFile.txt", "newFile content");
promise.then(
	(value) => {
		console.log("writeFile method completed");
	},
	(reason) => {
		console.log(`there was an error: ${reason.message}`);
	}
);
```

We use callback API to write other methods examples as follows.

### `appendFile()`

- Callback

 ```js
  const fs = require("fs");
  fs.appendFile("./test.txt", " append context,", (error) => {
  	if (error) throw error;
  });
 ```

###   `rename()`

- Callback

```js
const fs = require("fs");
fs.rename("./test.txt", "test2.txt", (error) => {
if (error) throw error;
console.log("Rename complete!");
});
```

### `unlink()`

  - Callback

```js
const fs = require("fs");
fs.rename("./test.txt", "test2.txt", (error) => {
if (error) throw error;
console.log("Rename complete!");
});
```

### `mkdir()`

- callback

```js
const fs = require("fs");
fs.mkdir("./profileA", (error) => {
	if (error) throw error;
});
```

### `readdir()`

- Callback

```js
const fs = require("fs");
fs.mkdir("./profileA", (error) => {
	if (error) throw error;
});
```

### `rmdir()`

- Callback

```js
const fs = require("fs");
fs.rmdir("./profileA", (error) => {
	if (error) throw error;
});
```

### `stat()`

- Callback

```js
const fs = require("fs");
fs.stat("./test.txt", (error, stats) => {
	if (error) throw err;
	console.log(`This is a file? Result: ${stats.isFile()}`);
});
```


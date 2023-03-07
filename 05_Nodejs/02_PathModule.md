# Path

## What is Path?

The path module provides utilities for working with file and directory paths.

It can be accessed using:

```js
const path = require('path');
```

## Path Module methods and properties

### `join([...paths])`

```js
path.join("/foo", "bar", "baz/asdf", "quux"); // Returns: '/foo/bar/baz/asdf/quxx'
path.join("/foo", "bar", "baz/asdf", "quux", ".."); // Returns: '/foo/bar/baz/asdf'
path.join("/foo", "bar", "baz/asdf", "quux", "..", ".."); // Returns: '/foo/bar/baz'
```

### `path.basename(path[, ext])`

```js
path.basename('/foo/bar/baz/asdf/quux.html'); // Returns: 'quux.html'
path.basename('/foo/bar/baz/asdf/quux.html', '.html'); // Returns: 'quux'
```

### `path.extname(path)`

```js
path.extname("index.html"); // Returns: '.html'
path.extname("index.coffee.md"); // Returns: '.md'
path.extname("index."); // Returns: '.'
path.extname("index"); // Returns: ''
path.extname(".index"); // Returns: ''
path.extname(".index.md"); // Returns: '.md'
```

### `path.sep`

```js
'foo\\bar\\baz'.split(path.sep); // Returns: ['foo', 'bar', 'baz']
```

### `path.normalize(path)`

```js
path.normalize('C:\\temp\\\\foo\\bar\\..\\'); // Returns: 'C:\\temp\\foo\\'
```

### `path.resolve([...paths])`

```js
path.resolve('/foo/bar', './baz'); // Returns: '/foo/bar/baz'
path.resolve('/foo/bar', '/tmp/file/'); // Returns: '/tmp/file'
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// If the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

### `path.isAbsolute(path)`

```js
path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false
path.isAbsolute('bar/baz');     // false
path.isAbsolute('.');           // false
```

### `path.parse(path)`

```js
path.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
```

### `path.relative(from, to)`

```js
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'); // Returns: '..\\..\\impl\\bbb'
```

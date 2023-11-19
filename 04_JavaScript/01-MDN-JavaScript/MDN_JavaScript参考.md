# JavaScript reference

The JavaScript reference serves as a repository of facts about the JavaScript language. The entire language is described here in detail. As you write JavaScript code, you'll refer to these pages often (thus the title "JavaScript reference").

The JavaScript language is intended to be used within some larger environment, be it a browser, server-side scripts, or similar. For the most part, this reference attempts to be environment-agnostic and does not target a web browser environment.

If you are new to JavaScript, start with the [guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide). Once you have a firm grasp of the fundamentals, you can use the reference to get more details on individual objects and language constructs.

## [Built-ins](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#built-ins)

[JavaScript standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects), along with their methods and properties.

### [Value properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#value_properties)

- [x] [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)
- [x] [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
- [x] [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- [x] [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### [Function properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#function_properties)

- [x] [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [x] [`isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)
- [x] [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
- [x] [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [x] [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [x] [`decodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)
- [x] [`decodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
- [x] [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
- [x] [`encodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [ ] [`escape()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape) Deprecated
- [ ] [`unescape()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/unescape) Deprecated

### [Fundamental objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#fundamental_objects)(TODO)

- [x] [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - [`Object.assign()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)(√)
  - [`Object.create()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)(√)
  - [`Object.defineProperties()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)(√)
  - [`Object.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)(√)
  - [`Object.entries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)(√)
  - [`Object.freeze()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)(√)
  - [`Object.fromEntries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)(√)
  - [`Object.getOwnPropertyDescriptor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)(√)
  - [`Object.getOwnPropertyDescriptors()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)(√)
  - [`Object.getOwnPropertyNames()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)(√)
  - [`Object.getOwnPropertySymbols()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)(√)
  - [`Object.getPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)(√)
  - [`Object.hasOwn()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)(√)
  - [`Object.prototype.hasOwnProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)(√)
  - [`Object.is()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)(√)
  - [`Object.isExtensible()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)(√)
  - [`Object.isFrozen()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)(√)
  - [`Object.prototype.isPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)(√)
  - [`Object.isSealed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)(√)
  - [`Object.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)(√)
  - [`Object.preventExtensions()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)(√)
  - [`Object.prototype.propertyIsEnumerable()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)(√)
  - [`Object.seal()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)(√)
  - [`Object.setPrototypeOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)(√)
  - [`Object.prototype.toLocaleString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)(√)
  - [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)(√)
  - [`Object.prototype.valueOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)(√)
  - [`Object.values()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values)(√)
- [x] [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [x] [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [ ] [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

### [Error objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#error_objects)

- [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
- [`EvalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
- [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
- [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
- [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
- [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
- [`URIError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError)
- [`InternalError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError) Non-standard

### [Numbers and dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#numbers_and_dates)

- [x] [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [x] [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [x] [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [x] [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

### [Text processing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#text_processing)(TODO)

- [x] [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  - [`String.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)
  - at from
  - [`String.prototype.at()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/at)(2023.10.22)
  - [`String.prototype.charAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)(2023.10.22)
  - [`String.prototype.charCodeAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)(2023.10.22)
  - [`String.prototype.codePointAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)(2023.10.22)
  - [`String.fromCharCode()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)(2023.10.22)
  - [`String.fromCodePoint()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)(2023.10.22)
  - 判断在某位置上是否以什么开始或结束 start/end With 
  - [`String.prototype.startsWith()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)(2023.10.22)
  - [`String.prototype.endsWith()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)(2023.10.22)
  - 找位置 indexOf
  - [`String.prototype.indexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)(2023.10.22)
  - [`String.prototype.lastIndexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)(2023.10.22)
  - 拆封,把String对象类型转换成基本类型 valueOf
  - [`String.prototype.valueOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf)(2023.10.22)
  - [`String.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toString) // 重写了Object.prototype.toString的方法,与String.prototype.valueOf()完全相同(2023.10.22)
  - WellFormed 判断字符串是否是被编码
  - [`String.prototype.isWellFormed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed)(2023.10.22)
  - [`String.prototype.toWellFormed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toWellFormed)(2023.10.22)
  - 不常用
  - [`String.prototype.normalize()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) // 字符串标准化,不理解
  - [`String.prototype.localeCompare()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) // 在特定语言里比较前后(2023.10.22)
  - [`String.raw()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/raw)// 模板字符串(2023.10.22)
  - [`String.prototype.repeat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) // 字符串重复(2023.10.22)
  - 补齐字符串到对应长度 pad
  - [`String.prototype.padStart()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)(2023.10.22)
  - [`String.prototype.padEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)(2023.10.22)
  - 正则匹配(也可以传入字符串) match replace search
  - [`String.prototype.match()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)(2023.10.22)
  - [`String.prototype.matchAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)(2023.10.22)
  - [`String.prototype.replace()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)(2023.10.22)
  - [`String.prototype.replaceAll()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)(2023.10.22)
  - [`String.prototype.search()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search)(2023.10.22)
  - 类似于数组操作
  - [`String.prototype.substring()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)(2023.10.22)
  - [`String.prototype.slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)(2023.10.22)
  - [`String.prototype.split()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)(2023.10.22)
  - [`String.prototype.concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat)(2023.10.22)
  - 字符串变大写小写
  - [`String.prototype.toLowerCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)(2023.10.22)
  - [`String.prototype.toUpperCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)(2023.10.22)
  - [`String.prototype.toLocaleLowerCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)(2023.10.22)
  - [`String.prototype.toLocaleUpperCase()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)(2023.10.22)
  - 去除空白字符 trim
  - [`String.prototype.trim()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trim)(2023.10.22)
  - [`String.prototype.trimEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)(2023.10.22)
  - [`String.prototype.trimStart()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)(2023.10.22)
  - 已弃用
  - [`String.prototype.anchor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/anchor)已弃用
  - [`String.prototype.big()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/big)已弃用
  - [`String.prototype.blink()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/blink)已弃用
  - [`String.prototype.bold()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/bold)已弃用
  - [`String.prototype.italics()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/italics)已弃用
  - [`String.prototype.link()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/link)已弃用
  - [`String.prototype.small()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/small)已弃用
  - [`String.prototype.strike()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/strike)已弃用
  - [`String.prototype.sub()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sub)已弃用
  - [`String.prototype.substr()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)已弃用
  - [`String.prototype.sup()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/sup)已弃用
- [x] [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
  - @@xxx为String里的对应方法相同,这里调用用`reg[Symbol.xxx`](str)
  - *[`RegExp.prototype[@@match]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)*(2023.10.22)
  - [`RegExp.prototype[@@matchAll]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)(2023.10.22)
  - [`RegExp.prototype[@@replace]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)(2023.10.22)
  - [`RegExp.prototype[@@search]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)(2023.10.22)
  - [`RegExp.prototype[@@split]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split)(2023.10.22)
  - [`RegExp.prototype.compile()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/compile)已弃用
  - [`RegExp.prototype.exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)(2023.10.22)
  - [`RegExp.prototype.test()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)(2023.10.22)
  - [`RegExp.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString)(2023.10.22)

### [Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#indexed_collections)

- [x] [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)(
  
  - [`Array.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)(√)(2023.10.22)
  - 常用方法 forEach map filter jion fill concat at
  - [`Array.prototype.forEach()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)(√)(2023.10.22)
  - [`Array.prototype.map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)(√)(2023.10.22)
  - [`Array.prototype.filter()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)(√)(2023.10.22)
  - [`Array.prototype.join()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)(√)(2023.10.22)
  - [`Array.prototype.fill()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)(√)(2023.10.22)
  - [`Array.prototype.concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)(√)(2023.10.22)
  - [`Array.prototype.at()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at)(√)(2023.10.22)
  - [`Array.prototype.copyWithin()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)(√)(2023.10.22)
  - 检查数组 every some
  - [`Array.prototype.every()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)(√)(2023.10.22)
  - [`Array.prototype.some()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)(√)(2023.10.22)
  - 查找元素 find includes indexOf
  - [`Array.prototype.find()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)(√)(2023.10.22)
  - [`Array.prototype.findLast()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)(√)(2023.10.22)
  - [`Array.prototype.findIndex()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)(√)(2023.10.22)
  - [`Array.prototype.findLastIndex()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)(√)(2023.10.22)
  - [`Array.prototype.includes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)(√)(2023.10.22)
  - [`Array.prototype.indexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)(√)(2023.10.22)
  - [`Array.prototype.lastIndexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)(√)(2023.10.22)
  - 压平数组 flat
  - [`Array.prototype.flat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)(√)(2023.10.22)
  - [`Array.prototype.flatMap()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)(2023.10.22)
  - from of isArray
  - [`Array.from()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)(√)(2023.10.22)
  - [`Array.of()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of)(√)(2023.10.22)
  - [`Array.fromAsync()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync)
  - [`Array.isArray()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)(√)(2023.10.22)
  - 数组键值对 keys,values,entries
  - [`Array.prototype.entries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)(√)(2023.10.22)
  - [`Array.prototype.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)(√)(2023.10.22)
  - [`Array.prototype.values()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values)(√)(2023.10.22)
  - 操作数组 push pop
  - [`Array.prototype.push()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)在数组尾部加入一个元素 (√)(2023.10.22) 
  - [`Array.prototype.pop()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)删除最后一个元素 (√)(2023.10.22) 
  - [`Array.prototype.shift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)删除第一个元素(√)(2023.10.22) 
  - [`Array.prototype.unshift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)在数组第一个元素前插入元素(√)(2023.10.22) 
  - [`Array.prototype.slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)截取元素,从start到end,原始数组不会被改变 (√) (2023.10.22) 
  - [`Array.prototype.splice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)移除或者替换已存在的元素和/或添加新元素改变一个数组的内容(√)(2023.10.22)
  - [`Array.prototype.toSpliced()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)不改变元素组(√)(2023.10.22) 
  - [`Array.prototype.with()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with) 改变数组元素,返回一个新素组,不改变原数组(√)(2023.10.22) 
  - 数组排序 sort reverse
  - [`Array.prototype.sort()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)(√)(2023.10.22) 
  - [`Array.prototype.toSorted()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)(√)(2023.10.22) 
  - [`Array.prototype.reverse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)(√)(2023.10.22) 
  - [`Array.prototype.toReversed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)(√)(2023.10.22) 
  
  - 数组迭代 reduce
  
  - [`Array.prototype.reduce()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)(√)(2023.10.22) 
  - [`Array.prototype.reduceRight()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)(√)(2023.10.22) 
  
  - toString
  - [`Array.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)(√)(2023.10.22) 
  - [`Array.prototype.toLocaleString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)(√)(2023.10.22) 
  
- [ ] [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)

- [ ] [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

- [ ] [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)

- [ ] [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)

- [ ] [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)

- [ ] [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)

- [ ] [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)

- [ ] [`BigInt64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)

- [ ] [`BigUint64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)

- [ ] [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)

- [ ] [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)

### [Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#keyed_collections)

- [x] [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [x] [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [x] [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [x] [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

### [Structured data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#structured_data)

- [ ] [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [ ] [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
- [ ] [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- [ ] [`Atomics`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
- [x] [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

### [Managing memory](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#managing_memory)

- [`WeakRef`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
- [`FinalizationRegistry`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)

### [Control abstraction objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#control_abstraction_objects)

- [x] [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [x] [`GeneratorFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction)
- [x] [`AsyncGeneratorFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction)
- [x] [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [x] [`AsyncGenerator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)
- [x] [`AsyncFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)

### [Reflection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#reflection)(

- [x] [`Reflect`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [x] [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

### [Internationalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#internationalization)

- [`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [`Intl.Collator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
- [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [`Intl.DisplayNames`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)
- [`Intl.ListFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)
- [`Intl.Locale`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)
- [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [`Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)
- [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)
- [`Intl.Segmenter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)

## [Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#statements)

[JavaScript statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

### [Control flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#control_flow)

- [x] [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [x] [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
- [x] [`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
- [x] [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [x] [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [x] [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [x] [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### [Declaring variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#declaring_variables)

- [x] [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [x] [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [x] [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

### [Functions and classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#functions_and_classes)

- [x] [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [x] [`function*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [x] [`async function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [x] [`async function*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function*)
- [x] [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)

### [Iterations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#iterations)

- [x] [`do...while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [x] [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [x] [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [x] [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [x] [`for await...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [x] [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

### [Others](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#others)

- [x] [Empty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty)
- [x] [Block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
- [x] [Expression statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [x] [`debugger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
- [x] [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [x] [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [x] [label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)
- [ ] [`with`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) Deprecated

## [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#expressions_and_operators)

[JavaScript expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

### [Primary expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#primary_expressions)(TODO)

- [x] [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [x] [Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
- [x] [`[\]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [x] [`{}`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [x] [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
- [x] [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)
- [x] [`function*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function*)
- [x] [`async function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)
- [x] [`async function*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function*)
- [ ] [`/ab+c/i`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)(TODO)
- [x] [``string``](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [x] [`( )`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping)

### [Left-hand-side expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#left-hand-side_expressions)

- [x] [Property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [x] [`?.`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [x] [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [x] [`new.target`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
- [x] [`import.meta`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)
- [x] [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
- [x] [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)

### [Increment and decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#increment_and_decrement)

- [x] [`A++`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [x] [`A--`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [x] [`++A`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [x] [`--A`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)

### [Unary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#unary_operators)

- [x] [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
- [x] [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)
- [x] [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [x] [`+`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [x] [`-`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [x] [`~`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)
- [x] [`!`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
- [x] [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

### [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#arithmetic_operators)

- [x] [`**`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [x] [`*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [x] [`/`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [x] [`%`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [x] [`+`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition) (Plus)
- [x] [`-`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)

### [Relational operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#relational_operators)

- [x] [`<`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than) (Less than)
- [x] [`>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than) (Greater than)
- [x] [`<=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
- [x] [`>=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [x] [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
- [x] [`in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)

### [Equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#equality_operators)

- [x] [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [x] [`!=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
- [x] [`===`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [x] [`!==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)

### [Bitwise shift operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#bitwise_shift_operators)

- [x] [`<<`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift)
- [x] [`>>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)
- [x] [`>>>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)

### [Binary bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#binary_bitwise_operators)

- [x] [`&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
- [x] [`|`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
- [x] [`^`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)

### [Binary logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#binary_logical_operators)

- [x] [`&&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [x] [`||`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [x] [`??`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

### [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#conditional_ternary_operator)

- [x] [`(condition ? ifTrue : ifFalse)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#assignment_operators)

- [x] [`=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)
- [x] [`*=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)
- [x] [`/=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment)
- [x] [`%=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)
- [x] [`+=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)
- [x] [`-=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)
- [x] [`<<=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
- [x] [`>>=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
- [x] [`>>>=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
- [x] [`&=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- [x] [`^=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)
- [x] [`|=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- [x] [`**=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)
- [x] [`&&=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
- [x] [`||=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- [x] [`??=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [ ] [`[a, b\] = arr`, `{ a, b } = obj`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### [Yield operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#yield_operators)

- [x] [`yield`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)
- [x] [`yield*`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*)

### [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#spread_syntax)

- [x] [`...obj`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### [Comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#comma_operator)

- [x] [`,`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator)

## [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#functions)(TODO)

[JavaScript functions.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

- [x] [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [x] [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [x] [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [x] [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
- [x] [Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [x] [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [x] [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

## [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#classes)(

[JavaScript classes.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- [x] [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- [x] [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [x] [Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [x] [Public class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [x] [`static`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [x] [Static initialization blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## [Additional reference pages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#additional_reference_pages)

- [x] [Lexical grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
- [x] [Data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [x] [Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [x] [Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)
- [x] [Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
- [x] [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [x] [Deprecated features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)

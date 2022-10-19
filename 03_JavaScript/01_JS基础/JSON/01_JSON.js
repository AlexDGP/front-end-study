// JSON（JavaScript Object Notation，JavaScript 对象表示法）
var myObj = { name: "Bill", age: 19, city: "Seattle" };

// JSON.stringify()
var myJSON = JSON.stringify(myObj);
console.log(myJSON);
console.log(typeof myJSON);

// JSON.parse()
var obj = JSON.parse('{"firstName":"Bill", "lastName":"Gates"}');
console.log(obj);
console.log(typeof obj);

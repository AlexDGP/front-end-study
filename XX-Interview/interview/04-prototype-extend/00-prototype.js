// let arr = new Array(1, 2, 3);
let arr = [1, 2, 3];

console.log(arr);
console.log(
  "arr.__proto__ === Array.prototype",
  arr.__proto__ === Array.prototype,
);
console.log(
  "Array.__proto__ === Function.prototype",
  Array.__proto__ === Function.prototype,
);
console.log(
  "Function.prototype.__proto__ === Object.prototype",
  Function.prototype.__proto__ === Object.prototype,
);
console.log(
  "Object.prototype.__proto__ === null",
  Object.prototype.__proto__ === null,
);

arr.a = 1;
console.log(arr.a);
Array.prototype.a = 2;
console.log(arr.a);
Object.prototype.a = 3;
console.log(arr.a);

var x = 0.1;
var y = 0.2;
var result;
// 浮点数要注意精度问题,例如0.1+0.2的问题(&&&)
result = x + y;
console.log("x + y = " + result);
result = x - y;
console.log("x - y = " + result);
result = x * y;
console.log("x * y = " + result);
result = x / y;
console.log("x / y = " + result);
result = x % y;
console.log("x % y = " + result);
// 自增,自减要注意顺序,先赋值还是先运算(&&&)
result = x++;
result = ++x;
result = x--;
result = --x;

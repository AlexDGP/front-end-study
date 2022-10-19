// typeof 运算符
// typeof 运算符返回变量、对象、函数或表达式的类型：
typeof "Bill"; // 返回 string
typeof 3.14; // 返回 number
typeof NaN; // 返回 number
typeof false; // 返回 boolean
typeof [1, 2, 3, 4]; // 返回 object
typeof { name: "Bill", age: 19 }; // 返回 object
typeof new Date(); // 返回 object
typeof function () {}; // 返回 function
typeof myCar; // 返回 undefined（如果未声明 myCar）
typeof null; // 返回 object

// delete 运算符
// delete 运算符从对象中删除属性：
var person = {
	firstName: "Bill",
	lastName: "Gates",
	age: 19,
	eyeColor: "blue",
};
delete person.age; // 删除 person["age"];
console.log(person);

// in 运算符(&&&)
// 如果指定的属性在指定的对象中，则 in 运算符将返回 true，否则返回 false：
// 数组
var cars = ["Saab", "Volvo", "BMW"];
"Saab" in cars; // 返回 false（指定索引号而不是值）
0 in cars; // 返回 true
1 in cars; // 返回 true
4 in cars; // 返回 false（不存在）
"length" in cars; // 返回 true（length 是数组属性）

// 对象
var person = { firstName: "Bill", lastName: "Gates", age: 19 };
"firstName" in person; // 返回 true
"age" in person; // 返回 true

// 预定义对象
"PI" in Math; // 返回 true
"NaN" in Number; // 返回 true
"length" in String; // 返回 true

// instanceof 运算符
// 如果指定对象是指定对象的实例，则 instanceof 运算符返回 true：
var cars = ["Saab", "Volvo", "BMW"];
cars instanceof Array; // 返回 true
cars instanceof Object; // 返回 true
cars instanceof String; // 返回 false
cars instanceof Number; // 返回 false

// void 运算符
// void 运算符计算一个表达式并返回 undefined。该运算符通常用于使用 "void(0)" 来获取未定义的原始值（在计算表达式而不使用返回值时很有用）。
/* <a href="javascript:void(0);">
  无用的链接
</a>

<a href="javascript:void(document.body.style.backgroundColor='red');">
  单击我将 body 的背景色更改为红色
</a> */

function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}

Foo.getName = function () {
  console.log(2);
};

Foo.prototype.getName = function () {
  console.log(3);
};

// 表达式,直接把提升的函数编程下列形式
var getName = function () {
  console.log(4);
};

// 函数提升,预编译时候,直接提上去了
function getName() {
  console.log(5);
}

// node和v8环境下都一样
// Foo.getName(); // 2
// getName(); // 4
// new Foo().getName(); // 3 Foo()重写了getName方法,生成的Foo实例,实例本身没有getName方法,在原型链上找getName方法,找到Foo.04-prototype-extend.getName
// getName(); // 1

/*
// node和v8环境下不一样
Foo.getName(); // 2
getName(); // 4
// console.log(globalThis === Foo());
// node环境下,普通函数的this指向globalThis,globalThis下没有getName方法,所以报错
// v8环境下,this指向的是window,window下有getName方法,且被重写,所以答案是1
Foo().getName(); // 1
getName(); // 1
*/

// new Foo.getName(); // 2
// new Foo().getName(); // 3
// new new Foo().getName(); // 3

// node环境下
// console.log(this); // {}
// console.log(globalThis); // Object [global]

let that = this;
console.log(this === globalThis); // false
let ordinaryFunction = function () {
  // console.log(this); // Object [global]
  console.log(this === globalThis); // true
  console.log(this === that); // false
};
let arrowFunction = () => {
  console.log(this); // {}
  console.log(this === that); // true
};

ordinaryFunction();
arrowFunction();

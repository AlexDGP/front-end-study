this.name = "this";
globalThis.name = "globalThis";
var name = "name"; // node环境下,不挂载在this和globalThis上; v8环境下var name = "name"相当与在this.name = "name";
console.log(this === globalThis); // node环境下false, v8环境下true

var obj1 = {
  name: "1",
  fn1: function () {
    console.log(this.name);
  },
  fn2: () => console.log(this.name),
  fn3: function () {
    return function () {
      console.log(this.name);
    };
  },
  fn4: function () {
    return () => console.log(this.name);
  },
};
var obj2 = {
  name: "2",
};

// 括号为node环境下的答案
obj1.fn1(); // 1
obj1.fn1.call(obj2); // 2

// node环境下,箭头函数指向this
obj1.fn2(); // window(this)
obj1.fn2.call(obj2); // window(this)

// node环境下,普通函数指向globalThis
obj1.fn3()(); // window(globalThis)
obj1.fn3().call(obj2); // 2
obj1.fn3.call(obj2)(); // window(globalThis)

obj1.fn4()(); // 1
obj1.fn4().call(obj2); // 1 箭头函数call没卵用,箭头函数自己本来就不维护this,其this是根据上下文来的
obj1.fn4.call(obj2)(); // 2 这个普通函数的call才有用,然后不同函数把this指向到obj2,然后这个箭头函数根据上下文,得到this是obj2,所以为2

let a = function () {
  this.b = 1;
  this.obj = { name: 1 };
};
let c = new a();
a.obj = { name: 2 };
a.b = 2;
console.log(c);
let d = new a();
console.log(d);
console.log(a);

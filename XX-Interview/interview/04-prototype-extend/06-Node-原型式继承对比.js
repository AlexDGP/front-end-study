// function Parent(name, age) {
//   this.name = name;
//   this.age = age;
//   this.setName = function (value) {
//     this.name = value;
//   };
// }
// function Child(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }
// Child.prototype = new Parent("Zidane", 35);
// let child = new Child("Messi", 20, "male");
// console.log(child); // Parent 此处node和v8,结果不同
// child.setName("C.Ronaldo");

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.country = {
      name: "China",
    }; // 引用类型
  }
  setName(value) {
    this.name = value;
  }
}
class Child extends Parent {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }
}
let child1 = new Child("Messi", 20, "male");
child1.country.name = "Argentina";
let child2 = new Child("Beckham", 33, "male");
child2.country.name = "England";
console.log(child1.country === child2.country); // false 这里改变country值,就不会相互影响
console.log(child1.country.name, child2.country.name); // Argentina England
console.log(child1);
child1.setName("C.Ronaldo");

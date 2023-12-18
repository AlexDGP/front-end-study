import { observe } from "./Observer.js";
import Watcher from "./Watcher.js";

let person = {
  name: "alex",
  age: 32,
  dog: {
    name: "will",
    age: 2,
  },
};
let arr = [1, 2, 3];
observe(person);
new Watcher(person, "dog.age", (val) => {
  console.log("-----", val);
});
person.dog.age = 5;
observe(arr);

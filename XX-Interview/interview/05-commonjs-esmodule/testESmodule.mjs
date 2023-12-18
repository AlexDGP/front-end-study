import * as a from "./esmodule.mjs";
// a.count = 101; // readonly 报错
console.log(a.count); // 1
a.add();
a.add();
a.add();
console.log(a.count); // 4
console.log(a.get()); // 4

import * as b from "./esmodule.mjs";
console.log(b.count); // 4
b.add();
b.add();
b.add();

console.log(a === b);
console.log(a.get() === b.count);


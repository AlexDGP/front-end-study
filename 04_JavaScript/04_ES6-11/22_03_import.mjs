// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// 01_统一用导入方式
import * as m1 from "./22_01_export.mjs";
console.log(m1); // [Module: null prototype] { call: [Function: call], school: 'itcast' }

import * as m2 from "./22_02_default_export.mjs";
console.log(m2.default); // { school: 'itcast', call: [Function: call] }

// 02_解构赋值导入方式
import { school, call } from "./22_01_export.mjs";
console.log(school); // itcast
console.log(call); // [Function: call]

import { default as m3 } from "./22_02_default_export.mjs";
console.log(m3); // { school: 'atguigu', call: [Function: call] }

// 简便形式 只能用于默认暴露
import m4 from "./22_02_default_export.mjs";
console.log(m4); // { school: 'atguigu', call: [Function: call] }

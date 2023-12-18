// 对比两个参数(可能是数组、对象、数字、字符串)，如果完全相同，则返回true。如果不相同，则返回false
//
// function deepEqual(a, b) {
//   // TODO: 实现对比方案
// }
//
//

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    return false;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual(null, null));
console.log(deepEqual(1, 1)); // => true
console.log(deepEqual(1, 2)); // => false
console.log(deepEqual(1, "1")); // => false
console.log(deepEqual([1, 2], [1, 2])); // => true
console.log(deepEqual([1, { a: 1, b: 2 }], [1, { a: 1, b: 2 }])); // => true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // => true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })); // => false
console.log(deepEqual({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2] })); // => true

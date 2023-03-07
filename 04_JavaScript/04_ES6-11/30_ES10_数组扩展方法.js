// Array.prototype.flat() 把高维数组转换为低维数组
let arr1 = [1, 2, 3, [4, 5, 6]];
let arr2 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(arr1.flat()); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr2.flat()); // [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]
console.log(arr2.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Array.prototype.flat()
let arr3 = [1, 2, 3, 4];
console.log(arr3.map((item) => [item * 10])); // [ [ 10 ], [ 20 ], [ 30 ], [ 40 ] ]
console.log(arr3.flatMap((item) => [item * 10])); // [ 10, 20, 30, 40 ]

// BigInt用于大数值运算
let bigInt = 199n;
console.log(bigInt); // 199n

let num = 123;
console.log(BigInt(num)); // 123n

let max = Number.MAX_SAFE_INTEGER;
console.log(max); // 9007199254740991
console.log(max + 1); // 9007199254740992
console.log(max + 2); // 9007199254740992

console.log(BigInt(max) + BigInt(2));

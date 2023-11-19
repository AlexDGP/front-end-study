// 检测字符串是否包含u

let hd, reg, res, variable;
// 不利用变量
hd = "hoUdunren.com";
reg = /u/g;
res = hd.match(reg);
console.log(res);

// 利用变量
variable = "u";
reg = eval(`/${variable}/g`);
res = hd.match(reg);
console.log(res);

// 不利用变量
reg = new RegExp("u", "g");
res = hd.match(reg);
console.log(res);

// 不利用变量
variable = "u";
reg = new RegExp(variable, "gi");
res = hd.match(reg);
console.log(res);

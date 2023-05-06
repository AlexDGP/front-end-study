let str, reg;
str = "superman12345,超人一二三四五!";
reg = /\w/g;
console.log(str.match(reg)); // 具体属性丢失

while ((res = reg.exec(str))) {
  console.log(res, reg.lastIndex);
}

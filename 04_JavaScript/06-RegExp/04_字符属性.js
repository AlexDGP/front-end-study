let str, reg, res;

// \p{字符属性} => 字符属性匹配

// 只匹配字符
str = "superman12345,超人一二三四五!";
reg = /\p{L}+/gu;
res = str.match(reg);
console.log(res); // [ 'superman', '超人一二三四五' ]

// 只匹配标点符号
str = "superman12345,超人一二三四五!";
reg = /\p{P}+/gu;
res = str.match(reg);
console.log(res); // [ ',', '!' ]

// 只匹配标点符号
str = "superman12345,超人一二三四五!";
reg = /\p{sc=Han}+/gu;
res = str.match(reg);
console.log(res); // [ '超人一二三四五' ]

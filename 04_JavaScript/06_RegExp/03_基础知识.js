let str, reg, res;

// ? => 前面的元素可有可无
str = "123,456,789";
reg = /\d+,?/g;
res = str.match(reg);
console.log(res); // [ '123,', '456,', '789' ]

// ? => 静止贪婪
str = "hddddddd";
reg = /hd+?/g;
res = str.match(reg);
console.log(res); // [ 'hd' ]
reg = /hd+/g;
res = str.match(reg);
console.log(res); // [ 'hddddddd' ]

// + => 一个或者多个
str = "superman12345";
reg = /\d+/g;
res = str.match(reg);
console.log(res); // [ '12345' ]

// * => 零个或者多个
str = "123,aaa,456,789a";
reg = /\d+,?a*/g;
res = str.match(reg);
console.log(res); // [ '123,aaa', '456,', '789a' ]

// | => 或者
str = "superman12345";
reg = /a|2|h/g;
res = str.match(reg);
console.log(res); // [ 'a', '2' ]

// [] => 原子表
str = "superman12345";
reg = /[a2h]/g;
res = str.match(reg);
console.log(res); // [ 'a', '2' ]

// [1-9] => 区间,只能升序,不能降序
str = "superman12345";
reg = /[a-z]+/g;
res = str.match(reg);
console.log(res); // [ 'superman' ]

str = "superman12345";
reg = /[1-9]+/g;
res = str.match(reg);
console.log(res); // [ '12345' ]

// [^] => 排除
str = "superman12345";
reg = /[^1-9]+/g;
res = str.match(reg);
console.log(res); // [ 'superman' ]

// () => 原子组
str = "superman12345";
reg = /(woman|dog)/g;
res = str.match(reg);
console.log(res); // null

reg = /\d{4}([-\/])\d{2}\1\d{2}/g;
res = "2022-03-01".match(reg);
console.log(res); // [ '2022-03-01' ]
res = "2022/03/01".match(reg);
console.log(res); // [ '2022/03/01' ]
res = "2022/03-01".match(reg);
console.log(res); // null
reg = /\d{4}([-\/])\d{2}\1\d{2}/;
res = "2022-03-01".match(reg);
console.log(res); // [ '2022-03-01', '-', index: 0, input: '2022-03-01', groups: undefined ]
/* [ '2022-03-01', '-', index: 0, input: '2022-03-01', groups: undefined ] 的解释
 * '2022-03-01':匹配结果
 * '-':原子组中第一个元素
 * */

reg = /\d{4}(?:[-\/])\d{2}([-\/])\d{2}/;
res = "2022-03/01".match(reg);
console.log(res); // [ '2022-03/01', '/', index: 0, input: '2022-03/01', groups: undefined ]
/*
 * ?:不计入组中,所一原子组的第一项没有"-"
 * $符在replace方法中使用
 * $1代表第一个原子组匹配的结果,这里就是"-"
 * $&代表匹配的字符串
 * $`代表匹配结果前面的字符
 * $'代表匹配结果后面的字符
 * ?<xxx>给原子组取别名,别名会在结果的groups里面
 * (?=xxx)断言匹配
 * (?!xxx)否定断言匹配
 * (?<=xxx)前置断言匹配
 * (?<!xxx)前置否定断言匹配
 * */

// {num} => 约定数量为num个
str = "superman12345";
reg = /\d{2}/g;
res = str.match(reg);
console.log(res); // [ '12', '34' ]

// {num1,num2} => 约定数量为num1个到num2个
str = "superman12345";
reg = /\d{2,3}/g;
res = str.match(reg);
console.log(res); // [ '123', '45' ]

// \ => 转义字符
str = "https://www.houdunren.com";
reg = /https?:\/\/\w+.\w+.\w+/g;
res = str.match(reg);
console.log(res); // [ 'https://www.houdunren.com' ]

// ^ => 起始边界
// $ => 结束边界
str = "four years";
reg = /^f.+s$/g;
res = str.match(reg);
console.log(res); // [ 'four years' ]

// \小写 => 匹配xxx
// \大写 => 除了xxx

// \d => 匹配数字
// \D => 除了数字
str = "superman12345";
reg = /\d/g;
res = str.match(reg);
console.log(res); // [ '1', '2', '3', '4', '5' ]

// \s 小写 => 匹配空白(换行符,空格等)
// \S 大写 => 除了空白(换行符,空格等)
str = `
    张三:010-12345678, 李四:020-88888888
`;
reg = /\s+/g;
res = str.match(reg);
console.log(res); // [ '\n    ', ' ', '\n' ]

// \w => 匹配字母,数字,下划线
// \W => 除了字母,数字,下划线
str = "super$$$man$$$loves$$$dollar";
reg = /\w+/g;
res = str.match(reg);
console.log(res); // [ 'super', 'man', 'loves', 'dollar' ]

// .=> 除了换行外的所有字符
str = `super...man
    loves$$$dollar`;
reg = /.+/g;
res = str.match(reg);
console.log(res); // [ 'super...man', '    loves$$$dollar' ]

// 匹配模式
// 默认只匹配第一个
str = "superman12345";
reg = /\d/;
res = str.match(reg);
console.log(res); // [ '1', index: 8, input: 'superman12345', groups: undefined ]

// g => 全局匹配
str = "superman12345";
reg = /\d/g;
res = str.match(reg);
console.log(res); // [ '1', '2', '3', '4', '5' ]

// i => 忽略大小写
str = "supermanSUPERMAN";
reg = /a/gi;
res = str.match(reg);
console.log(res); // [ 'a', 'A' ]

// s => dotAll匹配模式,开启则"."可以匹配上换行符
reg = /./g;
res = str.match(reg);
console.log(res); // [ 'a', 'b' ]

str = `a\nb`;
reg = /./gs;
res = str.match(reg);
console.log(res); // [ 'a', '\n', 'b' ]

// m => 多行模式
str = `
    #1 js,200元 #
    #2 php,600元 #
    #9 hdr,200元 # 后盾人
    #4 node,300元 #
`;
reg = /^\s*#\d+\s.+\s+#$/gm;
res = str.match(reg);
res = res.map((v) => {
  v = v.replace(/\s*#\d+\s*/, "").replace(/\s#/, "");
  [book, price] = v.split(",");
  return { book, price };
});
console.log(res);
/*
[
  { book: 'js', price: '200元' },
  { book: 'php', price: '600元' },
  { book: 'node', price: '300元' }
]
*/

// y => 连续匹配模式,从lastIndex初连续匹配,直到匹配不成功
str = "qq:1234567,6513543,53314562,2355433找出这些qq";
reg = /(\d+),?/y;
let qqs = [];
reg.lastIndex = 3;
while ((res = reg.exec(str))) {
  qqs.push(res[1]);
}
console.log(qqs); // ["1234567", "6513543", "53314562", "2355433"];

// 写一个正则,匹配所有字符(除了数字,大小写字幕,空格,和换行)
/[/S xxxxxxx]/.test("目标字符asdasdasd \n 13123 ASDASD")

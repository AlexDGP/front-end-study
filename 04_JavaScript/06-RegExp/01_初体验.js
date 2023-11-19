// 找出字符串中的数字

// 不用正则
let hd = "houdunren2200hdcms9988";
let nums = [...hd].filter((a) => !Number.isNaN(parseInt(a)));
let res = nums.join("");
console.log(res);
// 利用正则
console.log(hd.match(/\d/g).join(""));

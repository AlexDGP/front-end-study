// 01_模板字符串的声明
let str = `My name is Jim Green`;
console.log(str); // My name is Jim Green

// 02_模板字符串中可以出现换行
let team = `<ul>
              <li>Ronaldo</li>
              <li>Zidane</li>
              <li>Beckham</li>
              <li>Owen</li>
            </ul>`;
console.log(team);

// 03_变量拼接${}
let fullName = "Jim Green";
let sayHi = `Hello,My name is ${fullName}`;
console.log(sayHi); // Hello,My name is Jim Green

// 事件循环
// 同步代码先执行=>异步代码后执行(setTimeout,setInterval,ajax/Fetch,事件绑定)
// 同步代码 立即放入JS引擎(JS主线程)执行,并原地等待结果
// 异步代码 先放入宿主环境(浏览器/Node),不必原地等待结果,也不会阻塞主线程继续往下执行,异步结果在将来执行
// 异步代码又分为宏任务和微任务,
// 宏任务由宿主环境发起,例如script,时间,网络请求,定时器
// 微任务有Promise(Promise本身是同步的,但是其回调函数then/catch是异步的),async await,Object.observe等
// 宏任务有script代码块,setTimeout,setInterval,setImmediate

setTimeout(() => {
  console.log(7);
  let p1 = new Promise((resolve, reject) => {
    console.log(2);
    reject(3);
    console.log(4);
    resolve(5);
  });
  p1.then((value) => {
    console.log(value);
  }).catch((reason) => {
    console.log(reason);
  });
});
console.log(1);
let p = new Promise((resolve, reject) => {
  console.log(2);
  reject(3);
  console.log(4);
  resolve(5);
});
p.then((value) => {
  console.log(value);
}).catch((reason) => {
  console.log(reason);
});
console.log(6);

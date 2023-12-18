// // 计算公式为，男性每天基础代谢量是66+(13.7×体重(kg))+(5×身高(cm))-(6.8×年龄(岁))，女性是655+(9.6×体重(kg))+(1.8×身高(cm))-(4.7×年龄(岁))。
// function getBasicMetabolism(weight, height, age, gender) {
//   if (gender === "male") {
//     return (
//       parseInt(66 + 13.7 * weight + 5 * height - 6.8 * age).toString() + "大卡"
//     );
//   }
//   if (gender === "female") {
//     return (
//       parseInt(655 + 9.6 * weight + 1.8 * height - 4.7 * age).toString() +
//       "大卡"
//     );
//   }
// }
//
// console.log(getBasicMetabolism(74.35, 174.5, 32, "male"));

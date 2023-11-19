// 01_Object.values(obj)
let school = {
	name: "尚硅谷",
	cities: ["北京", "上海", "深圳"],
	course: ["前端", "Java", "大数据", "运维"],
};
console.log(Object.keys(school)); // [ 'name', 'cities', 'course' ]
console.log(Object.values(school)); // [ '尚硅谷', [ '北京', '上海', '深圳' ], [ '前端', 'Java', '大数据', '运维' ] ]
// 02_Object.entries(obj)
console.log(Object.entries(school)); // 输出如下
// [
// 	["name", "尚硅谷"],
// 	["cities", ["北京", "上海", "深圳"]],
// 	["course", ["前端", "Java", "大数据", "运维"]],
// ];
let m = new Map(Object.entries(school));
console.log(m.get("cities")); // [ '北京', '上海', '深圳' ]
// 03_Object.getOwnPropertyDescriptors(obj)
console.log(Object.getOwnPropertyDescriptors(school)); // 返回对象的属性描述对象,输出如下
// {
//   name: {
//     value: '尚硅谷',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   cities: {
//     value: [ '北京', '上海', '深圳' ],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   course: {
//     value: [ '前端', 'Java', '大数据', '运维' ],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

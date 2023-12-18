// 算法题：
// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
// 你需要按照以下要求，给这些孩子分发糖果：
// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
// 示例 1：
// 输入：ratings = [1,0,2]
// 输出：5
// 解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
// 示例 2：
// 输入：ratings = [1,2,2]
// 输出：4
// 解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
// 第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。

function candy(ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1);

  // 从左到右遍历，确保右边评分高的孩子糖果数更多
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // 从右到左遍历，确保左边评分高的孩子糖果数更多
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // 计算总糖果数
  return candies.reduce((sum, val) => sum + val, 0);
}

// 示例
const ratings1 = [1, 0, 2, 9, 8, 78, 6];
const ratings2 = [1, 2, 2];

const result1 = candy(ratings1);
const result2 = candy(ratings2);

console.log(result1); // 输出：5
console.log(result2); // 输出：4

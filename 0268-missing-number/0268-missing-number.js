/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
    const n = nums.length;
    const targetSum = (n * (n + 1)) / 2; // 1 to n sum
    const numbersSum = nums.reduce((total, num) => {
      return total + num
    }, 0);

    return targetSum - numbersSum;
};
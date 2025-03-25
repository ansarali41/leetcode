/**
 * @param {number[]} nums
 * @return {number}
 */


var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);

    // The maximum product can be either:
    // 1. Product of three largest numbers (last three elements)
    // 2. Product of two smallest numbers (which could be negative) and the largest number
    const n = nums.length;
    return Math.max(
        nums[n - 1] * nums[n - 2] * nums[n - 3], // Case 1: three largest
        nums[0] * nums[1] * nums[n - 1], // Case 2: two smallest and largest
    );
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let lastMaxCount = 0;
    let currentMaxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentMaxCount += 1;
        } else {
            lastMaxCount = currentMaxCount > lastMaxCount ? currentMaxCount : lastMaxCount;
            currentMaxCount = 0;
        }
    }
    return Math.max(lastMaxCount, currentMaxCount);
};
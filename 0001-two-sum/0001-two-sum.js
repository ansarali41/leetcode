/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const myHasMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const subtract = target - nums[i];
        if (myHasMap.has(subtract)) {

            return [myHasMap.get(subtract), i]
        }
        myHasMap.set(nums[i], i);
    }
};
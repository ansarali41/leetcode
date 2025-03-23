/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    //[1,3,4,2,2]
    //[0,1,2,3,4]
    nums.sort();

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
};
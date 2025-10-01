/**
 Do not return anything, modify nums in-place instead.
 */

/**
Using fast and slow pointer
Here lastNoneZeroIndex is slow pointer and i is fast pointer
*/
function moveZeroes(nums: number[]): void {
    let lastNoneZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            //swap
            [nums[i], nums[lastNoneZeroIndex]] = [nums[lastNoneZeroIndex], nums[i]]
            lastNoneZeroIndex++;
        }
    }

};
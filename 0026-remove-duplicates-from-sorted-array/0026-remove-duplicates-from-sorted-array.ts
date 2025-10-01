function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let lastNoneZeroIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[lastNoneZeroIndex]) {
            lastNoneZeroIndex++;
            nums[lastNoneZeroIndex] = nums[i];
        }
    }
    return lastNoneZeroIndex + 1;
}
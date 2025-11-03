function majorityElement(nums: number[]): number {
    const sortedNums: number[] = nums.sort((a, b) => a - b);

    if (nums.length === 1) return nums[0]

    return nums[Math.floor(nums.length / 2)];

};
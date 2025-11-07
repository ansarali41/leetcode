function numIdenticalPairs(nums: number[]): number {
    const map: Map<number, number> = new Map();
    let pairs: number = 0;
    for (const num of nums) {
        if (map.has(num)) {
            pairs += map.get(num)!;
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    return pairs;
};
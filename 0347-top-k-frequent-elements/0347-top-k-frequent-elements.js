/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const freqMap = new Map();

    for (const n of nums) {
        freqMap.set(n, (freqMap.get(n) || 0) + 1);
    }

    const sortedFreq = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

    return sortedFreq.slice(0, k).map(n => n[0]);
};
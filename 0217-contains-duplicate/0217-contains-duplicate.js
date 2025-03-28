/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const myMap = new Map();

    for (num of nums) {
        if (myMap.has(num)) return true;

        myMap.set(num, 1);
    }

    return false;
};
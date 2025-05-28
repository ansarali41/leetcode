/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const sorted = [];
    const result = [];

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        sorted.push(sortedStr);
    }
    //sortedStr [ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ]
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== '-') {
            const groupAnagram = [];
            groupAnagram.push(strs[i]);
            for (let j = i + 1; j < sorted.length; j++) {
                if (sorted[i] === sorted[j]) {
                    groupAnagram.push(strs[j]);
                    sorted[j] = '-';
                }
            }
            sorted[i] = '-';
            result.push(groupAnagram);
        }
    }
    return result;
};

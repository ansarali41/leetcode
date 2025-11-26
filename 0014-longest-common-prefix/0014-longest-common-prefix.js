/**
 * @param {string[]} strs
 * @return {string}
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 */
function commonPrefix(str1, str2) {
    let result = '';
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[i] !== str2[i]) break;
        result += str1[i];
    }
    return result;
}
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    let common = commonPrefix(strs[0], strs[1]);
    for (let i = 2; i < strs.length; i++) {
        common = commonPrefix(common, strs[i]);
    }
    return common || '';
};

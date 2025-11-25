/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const str = s.match(/[a-zA-Z0-9]/g);
    if (!str) return true;

    let i = 0;
    let j = str.length - 1;

    while (i < j) {//used < instead of <= , in palindrom middle one is always valid, so useless to check it
        if (str[i].toLowerCase() !== str[j].toLowerCase()) return false;
        i++;
        j--;
    }
    return true;
};
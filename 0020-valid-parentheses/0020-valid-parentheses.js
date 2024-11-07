/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    if (s.length === 0 || s.length % 2 !== 0) {
        return false;
    }
    const stack = [];
    for (let el of s) {
        if (el === '(' || el === '{' || el === '[') {
            stack.push(el);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if ((el === ')' && top !== '(') || (el === '}' && top !== '{') || (el === ']' && top !== '[')) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
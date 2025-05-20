/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length === 0) return true;
    const magazineArr = magazine.split('');
    let count = 0;
    for (let i = 0; i < ransomNote.length; i++) {
        for (let j = 0; j < magazineArr.length; j++) {
            if (ransomNote[i] === magazineArr[j]) {
                magazineArr[j] = '-';
                count++;
                break;
            }
        }
    }

    return count === ransomNote.length;
};
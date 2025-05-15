function maxFreqSum(s: string): number {
    const vowelsMap = new Map;
    const consonantsMap = new Map;

    for (let i = 0; i < s.length; i++) {
        // vowelsMap
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            if (vowelsMap.has(s[i])) {
                vowelsMap.set(s[i], vowelsMap.get(s[i]) + 1);
            } else {
                vowelsMap.set(s[i], 1);
            }

        } else {
            // consonantsMap
            if (consonantsMap.has(s[i])) {
                consonantsMap.set(s[i], consonantsMap.get(s[i]) + 1);
            } else {
                consonantsMap.set(s[i], 1);
            }
        }
    }

    let vMax = 0;
    for (const [key, value] of vowelsMap) {
        vMax = Math.max(value, vMax);
    }


    let cMax = 0;
    for (const [key, value] of consonantsMap) {
        cMax = Math.max(value, cMax);
    }

    return vMax + cMax;
};
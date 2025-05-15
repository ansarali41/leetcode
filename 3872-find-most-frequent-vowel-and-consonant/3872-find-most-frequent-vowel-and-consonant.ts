function maxFreqSum(s: string): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const vowelsFreq = new Map<string, number>();
    const consonantsFreq = new Map<string, number>();

    for (const ch of s) {
        if (vowels.has(ch)) {
            vowelsFreq.set(ch, (vowelsFreq.get(ch) || 0) + 1);
        } else {
            consonantsFreq.set(ch, (consonantsFreq.get(ch) || 0) + 1)
        }
    }
    let maxVowel = 0;
    for (const value of vowelsFreq.values()) {
        maxVowel = Math.max(maxVowel, value)
    }

    let maxConsonant = 0;
    for (const value of consonantsFreq.values()) {
        maxConsonant = Math.max(maxConsonant, value)
    }

    return maxConsonant + maxVowel;

}
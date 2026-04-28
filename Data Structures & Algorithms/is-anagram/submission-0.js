class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let freqMap = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            let sIdx = s.charCodeAt(i) - 'a'.charCodeAt(0);
            let tIdx = t.charCodeAt(i) - 'a'.charCodeAt(0);
            freqMap[sIdx]++;
            freqMap[tIdx]--;
        }

        return freqMap.every(val => val === 0);
    }
}   

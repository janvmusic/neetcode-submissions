class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sIdx = 0;
        let eIdx = s.length - 1;
        const isAlphanumeric = c => /[a-zA-Z0-9]/.test(c);

        while(sIdx < eIdx) {
            let left = s[sIdx];
            let right = s[eIdx];

            if (!isAlphanumeric(left)) {
                sIdx++;
                continue;
            }

            if (!isAlphanumeric(right)) {
                eIdx--;
                continue;
            }

            if (left.toLowerCase() !== right.toLowerCase()) {
                return false;
            }

            sIdx++;
            eIdx--;
        }

        return true;
    }
}

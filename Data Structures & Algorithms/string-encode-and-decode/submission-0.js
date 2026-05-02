class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = [];
        for (let str of strs) {
            let size = str.length;
            let enc = `${size}#${str}`;

            encoded.push(enc);
        }

        return encoded.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) {
            return [];
        }

        let decoded = [];
        let start = 0;

        while (start < str.length) {
            let end = start;
            while (str[end] !== '#') {
                end++;
            }

            let sLength = Number(str.substring(start, end));

            start = end + 1;
            let dec = str.substring(start, start + sLength);
            decoded.push(dec);

            start = start + sLength;
        }

        return decoded;
    }
}

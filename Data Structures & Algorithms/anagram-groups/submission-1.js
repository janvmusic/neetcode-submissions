class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for (let str of strs) {
            let count = new Array(26).fill(0);
            for (let s of str) {
                count[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            let key = count.join(',');
            if (key in map) {
                map[key] = [...map[key], str];
            } else {
                map[key] = [str]
            }
        }

        return Object.values(map)
    }


}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for (let str of strs) {
            let w = str.split('').sort().join('');

            if (w in map) {
                map[w] = [...map[w], str];
            } else {
                map[w] = [str];
            }
        }

        return Object.values(map)
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let uniq = new Set(nums);
        let cLong = 0;
        let longest = 0;

        for (let num of nums) {
            let hasLeft = uniq.has(num - 1);
            if (hasLeft) {
                continue;
            }

            cLong = 1;
            while(uniq.has(num + cLong)) {
                cLong++;
            }

            longest = Math.max(longest, cLong);
        }

        return longest;
    }
}

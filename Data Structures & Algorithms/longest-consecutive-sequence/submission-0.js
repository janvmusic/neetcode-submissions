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

            let curr = num;
            cLong = 1;

            while(true) {
                curr = curr + 1;
                let hasNext = uniq.has(curr);

                if (hasNext) {
                    cLong++;
                } else {
                    break;
                }
            }

            if (cLong > longest) {
                longest = cLong;
            }
        }

        return longest;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seenItems = new Set();

        for (let i of nums) {
            if (seenItems.has(i)) {
                return true;
            } else {
                seenItems.add(i);
            }
        }

        return false;
    }
}

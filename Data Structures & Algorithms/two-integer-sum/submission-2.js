class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            let pair = target - nums[i]; //7 - 4 = 3

            if (pair in map) {
                return [nums.indexOf(pair), i];
            } else {
                let key = nums[i];
                map[key] = pair;
            }
        }
    }
}

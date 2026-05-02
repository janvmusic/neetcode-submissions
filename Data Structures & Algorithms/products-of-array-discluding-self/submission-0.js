class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = new Array(nums.length).fill(1);

        // right
        let prefix = 1;
        for (let i = 1; i < nums.length; i++) {
            prefix = nums[i - 1] * prefix;
            result[i] = prefix;

        }

        // left
        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {            
            result[i] = result[i] * suffix;
            suffix = suffix * nums[i];
        }

        return result;
    }
}

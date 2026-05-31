class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];
        nums.sort((a,b) => a - b);
        
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            let sIdx = i + 1;
            let eIdx = nums.length - 1;

            if (nums[i] === nums[i - 1]) {
                continue;
            }

            while (sIdx < eIdx) {
                let left = nums[sIdx];
                let right = nums[eIdx];

                let val = curr + left + right;
                if (val === 0) {
                    res.push([curr, left, right]);
                    sIdx++;
                    eIdx--;

                    while(nums[sIdx] === nums[sIdx - 1]) {
                        sIdx++
                    }

                    while(nums[eIdx] === nums[eIdx + 1]) {
                        eIdx--;
                    }
                } else if (val > 0) {
                    eIdx--;
                    continue;
                } else if (val < 0) {
                    sIdx++;
                    continue;
                }
            }
        }

        return res;
    }
}

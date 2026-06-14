class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxWater = 0;
        let lIdx = 0;
        let rIdx = height.length - 1;

        let maxLeft = height[lIdx];
        let maxRight = height[rIdx];

        while (lIdx < rIdx) {
            if (maxLeft < maxRight) {
                lIdx++; // why we move this before?
                maxLeft = Math.max(maxLeft, height[lIdx]);
                maxWater += maxLeft - height[lIdx];
            } else {
                rIdx--;
                maxRight = Math.max(maxRight, height[rIdx]);
                maxWater += maxRight - height[rIdx];
            }
        }

        return maxWater;
    }
}

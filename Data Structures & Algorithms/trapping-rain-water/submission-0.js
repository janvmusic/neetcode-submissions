class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let lefts = [];
        let rights = [];

        let maxLeft = -Infinity;
        for (let i = 0; i < height.length; i++) {
            let left = height[i - 1] || 0;
            maxLeft = Math.max(left, maxLeft);
            lefts[i] = maxLeft;
        }

        let maxRight = -Infinity;
        for (let i = height.length - 1; i >= 0; i--) {
            let right = height[i + 1] || 0;
            maxRight = Math.max(right, maxRight);
            rights[i] = maxRight;
        }

        let water = 0;
        for (let i = 0; i < height.length; i++) {
            let curr = Math.min(lefts[i], rights[i]) - height[i];
            if (curr <= 0) {
                continue;
            }

            water += curr;
        }

        return water;
    }
}

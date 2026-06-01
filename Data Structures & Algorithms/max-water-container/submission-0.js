class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = -Infinity;
        let sIdx = 0;
        let eIdx = heights.length - 1;

        while (sIdx < eIdx) {
            let start = heights[sIdx];
            let end = heights[eIdx];

            let minHeight = Math.min(start, end);
            let currWater = minHeight * (eIdx - sIdx);

            maxWater = Math.max(currWater, maxWater);

            if (start < end) {
                sIdx++;
            } else {
                eIdx--;
            }
        }

        return maxWater;
    }
}

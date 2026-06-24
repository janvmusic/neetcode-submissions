class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rLength = matrix.length;
        let cLength = matrix[0].length;

        let low = 0;
        let high = (cLength * rLength) - 1;

        while (low <= high) {
            let mid = Math.trunc((low + high) / 2);
            let rIdx = Math.trunc(mid / cLength); 
            let cIdx = mid % cLength; 
            let val = matrix[rIdx][cIdx];

            if (val > target) {
                high = mid - 1;
            } else if (val < target) {
                low = mid + 1;
            } else {
                return true;
            }
        }
        
        return false;
    }
}

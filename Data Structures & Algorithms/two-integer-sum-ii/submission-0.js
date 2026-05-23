class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let sIdx = 0
        let eIdx = numbers.length - 1;

        while (sIdx < eIdx) {
            let left = numbers[sIdx];
            let right = numbers[eIdx];

            if (left + right === target) {
                return [sIdx + 1, eIdx + 1];
            }

            if (left + right > target) {
                eIdx--;
                continue;
            }

            if (left + right < target) {
                sIdx++;
                continue;
            }
        }

        return [];
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = this.buildFreqMap(nums);
        let minHeap = new MinPriorityQueue((x) => x[1]);

        for (let [key, freq] of Object.entries(freqMap)) {
            minHeap.enqueue([key, freq]);
            
            if (minHeap.size() > k) {
                minHeap.dequeue();
            }
        }

        let res = [];
        for (let i = 0; i < k; i++) {
            let [key, _] = minHeap.dequeue();
            res.push(key)
        }

        return res;
    }

    buildFreqMap(nums) {
        let freqMap = {};
        for (let i of nums) {
            freqMap[i] = (freqMap[i] || 0) + 1;
        }

        return freqMap;
    }
}

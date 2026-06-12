class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let results = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let dayIdx = stack.pop();
                results[dayIdx] = i - dayIdx;
            }

            stack.push(i)
        }

        return results;
    }
}


// [30,38,30,36,35,40,28]
//      x

// results = [0,0,0,0,0,0,0]
// stack = [0]
// i = 1
// # pop
// 1 - 0 => 1
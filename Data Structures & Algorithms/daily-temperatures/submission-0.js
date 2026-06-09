class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            let temperature = temperatures[i];

            while (stack.length > 0 && temperature > temperatures[stack[stack.length - 1]]) {
                let idx = stack.pop()
                result[idx] = i - idx;
            }

            stack.push(i);
        }

        return result;
    }
}
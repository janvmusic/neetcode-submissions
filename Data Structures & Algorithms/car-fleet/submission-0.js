class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = []
        let cars = position.map((pos, idx) => [pos, speed[idx]]);
        cars.sort((a,b) => b[0] - a[0]);

        for (let car of cars) {
            let carTime = (target - car[0]) / car[1];

            if (stack.length === 0 || stack[stack.length - 1] < carTime) {
                stack.push(carTime);
            }
        }

        return stack.length;
    }
}

// [7,1], [4,2], [1,2], [0,1]
// stack = []
// time = (10 - 7) / 1 = 3
// stack = [3] # push
// time = (10 - 4) / 2 = 3
// stack = [3] # dont push
// time = (10 - 1) / 2 = 4.5
// stack = [3, 4.5] # push
// time = (10 - 0) / 1 = 10
// stack = [3, 4.5, 10]
// fleets = 3




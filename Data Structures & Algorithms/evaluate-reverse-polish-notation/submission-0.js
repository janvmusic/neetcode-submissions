class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operands = ['+','-','/','*']

        for (let token of tokens) {
            if (operands.includes(token)) {
                let secondNumber = stack.pop();
                let firstNumber = stack.pop();

                let val = this.calculate(firstNumber, secondNumber, token);
                stack.push(val);
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }

    calculate(firstNumber, secondNumber, operand) {
        switch(operand) {
            case "+":
                return firstNumber + secondNumber;
            case "-":
                return firstNumber - secondNumber;
            case "*":
                return firstNumber * secondNumber;
            case "/":
                return Math.trunc(firstNumber / secondNumber);
            default:
                return new Error("Invalid operand");
        } 
    }
} 

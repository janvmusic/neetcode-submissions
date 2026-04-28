class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let closingChars = ["]", "}", ")"];
        let openingChars = ["[", "{", "("];

        for (let char of s) {
            if (openingChars.includes(char)) {
                stack.push(char);
            } else if (closingChars.includes(char)) {
                let val = stack[stack.length - 1];
                let symbol = this.mapper(val);

                if (symbol !== char) {
                    return false;
                } else {
                    stack.pop();    
                }
            }
        }

        return stack.length === 0;
    }

    mapper(char) {
        switch(char) {
            case "[":
                return "]";
            case "(":
                return ")"
            case "{":
                return "}"
        }
    }
}

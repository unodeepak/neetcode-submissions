class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const hasMap = {
            "(": ")",
            "{": "}",
            "[": "]",
        };
        for (let sChar of s) {
            if (hasMap[sChar]) {
                stack.push(sChar);
            } else {
                const lastChar = stack.pop();
                if (sChar !== hasMap[lastChar]) {
                    return false;
                }
            }
        }
        return !stack.length;
    }
}

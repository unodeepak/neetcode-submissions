class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const arr = [];
        for (let sChar of s) {
            if (sChar === "(" || sChar === "{" || sChar === "[") {
                arr.push(sChar);
            } else {
                const lastChar = arr.pop();
                if (
                    !((lastChar === "(" && sChar === ")") ||
                    (lastChar === "{" && sChar === "}") ||
                    (lastChar === "[" && sChar === "]"))
                ) {
                    return false;
                }
            }
        }
        return !arr.length;
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const arr = [];
        let k = 0;
        for (let i = 0; i < strs.length; i++) {
            if (strs[i] === null) {
                continue;
            }
            const sortedStr = strs[i].split("").sort().join("");
            const newArr = [strs[i]];
            for (let j = i + 1; j < strs.length; j++) {
                if (strs[j] === null) {
                    continue;
                }
                const newStr = strs[j].split("").sort().join("");
                if (sortedStr === newStr) {
                    newArr.push(strs[j]);
                    strs[j] = null;
                }
            }
            strs[i] = null;
            arr.push(newArr);
        }
        return arr;
    }
}

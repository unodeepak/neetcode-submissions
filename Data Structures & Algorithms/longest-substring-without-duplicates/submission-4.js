class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longStr = '';
        let str = '';
        let j = 0;
        let i = 0;
        while (i < s.length) {
            if (!str.includes(s[i])) {
                str += s[i];
            } 
            else {
                longStr = longStr?.length < str.length ? str : longStr;
                i = j;
                j++;
                str = s[i];
            }
            i++;
        }

        longStr = longStr?.length < str.length ? str : longStr;
        return s ? longStr.length : 0;
    }
}

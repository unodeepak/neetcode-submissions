class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sLength = s.length;
        const tLength = t.length;

        s = s.split('').sort().join('');
        t = t.split('').sort().join('');
        return s === t;

        if (sLength !== tLength) {
            return false;
        }
        for (let i = 0; i < sLength; i++) {
            let check = true;
            for (let j = 0; j < tLength; j++) {
                if (s.charAt(i) === t.charAt(j)) {
                    check = false;
                    break;
                }
            }
            if (check) {
                return false;
            }
        }
        return true;
    }
}

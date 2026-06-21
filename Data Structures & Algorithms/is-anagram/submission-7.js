class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        s = s.split('').sort().join('');
        t = t.split('').sort().join('');
        return s === t;
        // function sort(arr, i, j) {
        //     if (arr[i] > arr[j]) {
        //         [arr[i], arr[j]] = [arr[j], arr[i]];
        //     }
        // }

        // const sLength = s.length;
        // const tLength = t.length;

        // if (sLength !== tLength) {
        //     return false;
        // }
        // s = s.split("");
        // t = t.split("");

        // for (let i = 0; i < sLength; i++) {
        //     for (let j = i + 1; j < tLength; j++) {
        //         sort(s, i, j);
        //         sort(t, i, j);
        //     }
        // }
        // return s.toString() === t.toString();
    }
}

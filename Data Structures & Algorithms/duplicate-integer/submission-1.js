class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const num = {};
        for (let item of nums) {
            if (num[item]) {
                return true;
            }
            num[item] = 1;
        }

        return false;
    }
}

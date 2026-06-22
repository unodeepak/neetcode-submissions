class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const newNums = [];
        for (let i = 0; i < nums.length; i++) {
            let total = 1;
            for (let j = 0; j < nums.length; j++) {
                total = total * (j !== i ? nums[j] : 1)
            }
            newNums[i] = total;
        }
        return newNums;
    }
}

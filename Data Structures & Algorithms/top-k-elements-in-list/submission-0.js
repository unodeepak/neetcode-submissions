class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsObj = {};
        for (let i = 0; i < nums.length; i++) {
            if (numsObj[nums[i]]) {
                numsObj[nums[i]] += 1;
            } else {
                numsObj[nums[i]] = 1;
            }
        }
        const newArr = Object.entries(numsObj).sort((a, b) => b[1]-a[1]);
        const arr = [];
        for (let i = 0; i < k; i++) {
            arr[i] = newArr[i][0];
        }
        return arr;
    }
}

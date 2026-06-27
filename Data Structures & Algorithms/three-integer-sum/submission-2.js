class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const arr = [];
        nums = nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[k] === null) {
                        continue;
                    }
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const newArr = [nums[i], nums[j], nums[k]];
                        let match = false;
                        for (let item of arr) {
                            if (item.toString() === newArr.toString()) {
                                match = true;
                                break;
                            }
                        }
                        if (!match) {
                            arr.push(newArr);
                        }
                    }
                }
            }
        }
        return arr;
    }
}

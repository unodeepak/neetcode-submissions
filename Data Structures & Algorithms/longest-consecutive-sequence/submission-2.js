class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums = nums.sort((a, b) => a - b);
        let first = nums[0];
        let currentStep = 1;
        let max = 1;
        for (let i = 1; i < nums.length; i++) {
            if (first + 1 === nums[i]) {
                currentStep++;
                if (currentStep > max) {
                    max = currentStep;
                }
            } else if (first !== nums[i]){
                currentStep = 1;
            }
            first = nums[i];
        }
        return nums.length ? max : 0;
    }
}

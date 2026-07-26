class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let right = nums.length - 1;
        let left = 0;

        while (right >= left) {
            const mid = Math.floor((left+right)/2);

            if (nums[mid] === target) {
                return mid;
            }
            
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            }
        }
        return -1
    }
}

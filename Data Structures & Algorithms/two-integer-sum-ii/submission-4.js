class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // for (let i = 0; i < numbers.length; i++) {
        //     for (let j = i + 1; j < numbers.length; j++) {
        //         if (numbers[i]+numbers[j] === target) {
        //             return [i+1, j+1];
        //         }
        //     }
        // }
        // return [];
        let left = 0;
        let right = Math.floor(numbers.length) - 1;
        while (right >= left) {
            const total = numbers[left] + numbers[right];
            if (total === target) {
                return [left + 1, right + 1];
            } else if (total > target) {
                right--;
            } else {
                left++;
            }
        }
        return [];
    }
}

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i]+numbers[j] === target) {
                    return [i+1, j+1];
                }
            }
        }
        return [];
        // let first = numbers[0];
        // let len = Math.floor(numbers.length / 2);
        // let i = 0;
        // let j = len - 1;
        // while (i <= len) {
        //     if (numbers[i] + numbers[j] === target) {
        //         return [i+1, j + 1]
        //     }
        //     i--;
        //     j = j + i;
        // }
        // for (let i = 1; i < numbers.length; i++) {
        //     if (first + numbers[i] === target) {
        //         return [1, i+1]
        //     }
        // }
    }
}

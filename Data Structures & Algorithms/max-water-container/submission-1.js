class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxStore = 0;
        for (let i = 0 ; i < heights.length; i++) {
            let k = 1;
            for (let j = i + 1; j < heights.length; j++) {
                const min = heights[i] > heights[j] ? heights[j] : heights[i];
                maxStore = min * k > maxStore ? min * k : maxStore;
                k++;
            }
        }
        return maxStore;
    }
}

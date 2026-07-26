class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxH = heights[0];
        for (let i = 0; i < heights.length; i++) {
            let min = heights[i];
            let w = 1;
            for (let j = i; j < heights.length; j++) {
                min = Math.min(min, heights[j]);
                maxH = Math.max(maxH, min * w);
                w++;
            }
        }
        return maxH;
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxH = heights[0];
        for (let i = 0; i < heights.length; i++) {
            let w = 0;
            // let h = heights[i];
            let min = heights[i];
            for (let j = i; j < heights.length; j++) {
                // if (heights[j] >= h) {
                //     w++;
                // } else {
                //     w = 1;
                // }
                w++;
                min = Math.min(min, heights[j]);
                maxH = Math.max(maxH, min * w)
            }
        }
        return maxH;
    }
}

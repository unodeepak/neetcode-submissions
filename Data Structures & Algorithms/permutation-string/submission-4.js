class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const lengthS1 = s1.length;
        const lengthS2 = s2.length;
        const sortS1 = s1
            .split("")
            .sort()
            .join("");

        for (let i = 0; i < lengthS2; i++) {
            const sortS2 = s2
                .slice(i, lengthS1 + i)
                .split("")
                .sort()
                .join("");

            if (sortS2 === sortS1) {
                return true;
            }
        }
        return false;
    }
}

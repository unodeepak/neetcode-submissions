class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        const nextDTemp = [];
        for (let i = 0; i < temps.length; i++) {
            let step = 0;
            for (let j = i + 1; j < temps.length; j++) {
                ++step;
                if (temps[j] > temps[i]) {
                    break;
                }
                if (j + 1 === temps.length) {
                    step = 0;
                }
            }

            nextDTemp.push(step);
        }
        return nextDTemp;
    }
}

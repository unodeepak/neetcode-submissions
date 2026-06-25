class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isValid(charCode) {
            return (charCode >= 65 && charCode <=90 || charCode >= 97 && charCode <= 122 || charCode >= 47 && charCode <= 56) 
        }

        let lenght = s.length;
        let j = lenght - 1;
        let forword = '';
        let backword = '';
        for (let i = 0; i < lenght; i++) {
            if (isValid(s.charCodeAt(i))) {
                forword += s[i].toLowerCase();
            }
            if (isValid(s.charCodeAt(j - i))) {
                backword += s[j - i].toLowerCase();
            }
        }
        return forword === backword;
    }
}

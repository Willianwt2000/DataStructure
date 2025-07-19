function detectCapitalUse(word) {
    var onlyUppercase = /^[A-Z]+$/;
    var onlyLowercase = /^[a-z]+$/;
    var firstUppercaseRestLowercase = /^[A-Z][a-z]+$/;
    for (var i = 0; i < word.length; i++) {
        if (onlyLowercase.test(word)) {
            return true;
        }
        if (onlyUppercase.test(word)) {
            return true;
        }
        if (firstUppercaseRestLowercase.test(word)) {
            return true;
        }
    }
    return false;
}
;
console.log(detectCapitalUse("Hello"));
console.log(detectCapitalUse("HELLO"));
console.log(detectCapitalUse("hello"));
console.log(detectCapitalUse("hEllo"));

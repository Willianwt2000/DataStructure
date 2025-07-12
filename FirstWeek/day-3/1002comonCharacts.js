function commonChars(words) {
    if (words.length === 0)
        return [];
    var letterCounts = [];
    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var count = {};
        for (var j = 0; j < currentWord.length; j++) {
            var letter = currentWord[j];
            count[letter] = (count[letter] || 0) + 1;
        }
        letterCounts.push(count);
    }
    var result = [];
    var firstWordLetters = words[0];
    for (var i = 0; i < firstWordLetters.length; i++) {
        var letter = firstWordLetters[i];
        var minCount = Infinity;
        var existsInAll = true;
        for (var j = 0; j < letterCounts.length; j++) {
            if (!letterCounts[j][letter]) {
                existsInAll = false;
                break;
            }
            if (letterCounts[j][letter] < minCount) {
                minCount = letterCounts[j][letter];
            }
        }
        if (existsInAll && minCount > 0) {
            for (var k = 0; k < minCount; k++) {
                result.push(letter);
            }
            for (var j = 0; j < letterCounts.length; j++) {
                letterCounts[j][letter] -= minCount;
            }
        }
    }
    return result;
}
// Ejemplo:
var words = ["bella", "label", "roller"];
console.log(commonChars(words));

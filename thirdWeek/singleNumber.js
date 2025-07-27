function singleNumber(nums) {
    var frecuensy = new Map();
    var uniqueNumber = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var element = nums_1[_i];
        frecuensy.set(element, (frecuensy.get(element) || 0) + 1);
    }
    for (var _a = 0, frecuensy_1 = frecuensy; _a < frecuensy_1.length; _a++) {
        var _b = frecuensy_1[_a], key = _b[0], value = _b[1];
        if (value === 1) {
            uniqueNumber = key;
        }
    }
    return uniqueNumber;
}
;
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));

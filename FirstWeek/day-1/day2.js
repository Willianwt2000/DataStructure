var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function heightChecker(heights) {
    var expected = __spreadArray([], heights, true).sort(function (a, b) { return a - b; });
    var j = 0;
    var count = 0;
    for (var i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            count++;
        }
        j++;
    }
    console.log("count: " + count);
    return count;
}
;
console.log(heightChecker([1, 1, 4, 2, 1, 3])); //3
console.log(heightChecker([5, 1, 2, 3, 4])); //5
console.log(heightChecker([1, 2, 3, 4, 5])); //0

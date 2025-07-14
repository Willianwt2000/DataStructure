function findDifference(nums1, nums2) {
    var uniqNums1 = new Set(nums1);
    var uniqNums2 = new Set(nums2);
    var answer1 = [];
    var answer2 = [];
    for (var _i = 0, uniqNums1_1 = uniqNums1; _i < uniqNums1_1.length; _i++) {
        var num = uniqNums1_1[_i];
        if (!uniqNums2.has(num)) {
            answer1.push(num);
        }
    }
    for (var _a = 0, uniqNums2_1 = uniqNums2; _a < uniqNums2_1.length; _a++) {
        var num = uniqNums2_1[_a];
        if (!uniqNums1.has(num)) {
            answer2.push(num);
        }
    }
    return [answer1, answer2];
}
;
console.log(findDifference([1, 2, 3], [2, 4, 6]));

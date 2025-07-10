function intersection(nums1, nums2) {
    var uniqueNum = [];
    for (var _i = 0, nums1_1 = nums1; _i < nums1_1.length; _i++) {
        var num = nums1_1[_i];
        if (nums2.includes(num) && !uniqueNum.includes(num)) {
            uniqueNum.push(num);
        }
    }
    return uniqueNum;
}
;
var nums1 = [1, 2, 2, 1], nums2 = [2, 2];
intersection(nums1, nums2);

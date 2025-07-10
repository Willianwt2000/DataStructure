function findDuplicates(nums) {
    var duplicateNums = [];
    var nLength = nums.length;
    for (var i = 0; i < nLength; i++) {
        //original position and look for minus 1
        var position = (nums[i] - 1) % nLength;
        console.log(position);
        nums[position] += nLength;
        if (nums[position] > 2 * nLength) {
            duplicateNums.push(position);
        }
        //
    }
    return duplicateNums;
}
;
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); //[2,3]
// console.log(findDuplicates([1,1,2])); // v
// console.log(findDuplicates([1])); //[]

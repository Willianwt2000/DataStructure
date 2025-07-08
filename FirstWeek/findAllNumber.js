function findDisappearedNumbers(nums) {
    var n = nums.length;
    for (var i = 0; i < n; i++) {
        var value = nums[i];
        if (value < 0) {
            value = -value;
        }
        var index = value - 1;
        console.log(index);
        if (nums[index] > 0) {
            nums[index] = -nums[index];
            console.log(nums[index]);
        }
    }
    var missingNumbers = [];
    for (var i = 0; i < n; i++) {
        if (nums[i] > 0) {
            missingNumbers.push(i + 1);
        }
    }
    return missingNumbers;
}
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); //[5,6]
// console.log(findDisappearedNumbers([1,1])); //[2]

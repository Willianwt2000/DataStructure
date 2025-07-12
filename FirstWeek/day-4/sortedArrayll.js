function sortArrayByParityII(nums) {
    var numsPair = [];
    var numsNoPair = [];
    var resultByParity = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            numsPair.push(nums[i]);
        }
        else {
            numsNoPair.push(nums[i]);
        }
    }
    var countLength = nums.length / 2;
    console.log("CountLengt: " + countLength);
    for (var i = 0; i <= countLength - 1; i++) {
        resultByParity.push(numsPair[i]);
        console.log(numsPair[0]);
        // console.log(numsNoPair[0])
        resultByParity.push(numsNoPair[i]);
    }
    return resultByParity;
}
;
var nums = [4, 2, 5, 7];
console.log(sortArrayByParityII(nums)); //[4,5,2,7]

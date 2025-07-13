function thirdMax(nums) {
    var aux = 0;
    // if (nums.length == 2) {
    //   aux = nums[1]
    // }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            aux = nums[i];
        }
    }
    return aux;
}
var input = [3, 2, 1];
// console.log(thirdMax(input)); //1
console.log(thirdMax([2, 1])); //2

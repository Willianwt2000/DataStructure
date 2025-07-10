function findMaxConsecutiveOnes(nums) {
    var count = 0;
    // let maxCounters: number[] = [0];
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            count++;
            // maxCounters.push(count);
        }
        max = count;
        console.log(max);
        if (nums[i] === 0) {
            count = 0;
        }
    }
    // const max = Math.max(...maxCounters);
    var current = 0;
    if (max > current) {
        current = max;
        console.log("Current: " + current);
    }
    else {
        current = 0;
    }
    return current;
}
// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); //2

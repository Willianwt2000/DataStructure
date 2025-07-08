function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0;
  let maxCounters: number[] = [0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      count++;
      maxCounters.push(count);
    }

    if (nums[i] === 0) {
      count = 0;
    }
  }
  const max = Math.max(...maxCounters);
  return max;
}

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); //2

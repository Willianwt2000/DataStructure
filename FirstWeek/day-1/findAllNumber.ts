function findDisappearedNumbers(nums: number[]): number[] {
  let n: number = nums.length;

  for (let i = 0; i < n; i++) {
    let value = nums[i];
    if (value < 0) {
      value = -value;
    }

    const index = value - 1;
    console.log(index)

    if (nums[index] > 0) {
      nums[index] = -nums[index]
      console.log(nums[index])
    }
  }

  let missingNumbers: number[] = [];
  for (let i = 0; i < n; i++) {
   if (nums[i] > 0) {
      missingNumbers.push(i + 1)
   }
    
  }

  return missingNumbers;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); //[5,6]
// console.log(findDisappearedNumbers([1,1])); //[2]

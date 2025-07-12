function sortArrayByParityII(nums: number[]): number[] {
  let numsPair: number[] = [];
  let numsNoPair: number[] = [];
  let resultByParity: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      numsPair.push(nums[i])
    } else {
      numsNoPair.push(nums[i])
    }
  }
  let countLength: number = nums.length / 2;
  console.log("CountLengt: "+ countLength)
  for (let i = 0; i <= countLength-1; i++) {
      resultByParity.push(numsPair[i]);
      resultByParity.push(numsNoPair[i])
  }
  
  return resultByParity;
};






let nums = [4,2,5,7]



console.log(sortArrayByParityII(nums)); //[4,5,2,7]
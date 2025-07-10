function findDuplicates(nums: number[]): number[] {
    const duplicateNums: number [] = [];
    const nLength: number = nums.length;

    for (let i = 0; i < nLength; i++) {
      //original position and look for minus 1
      let position = (nums[i] - 1) % nLength; //Evitar que se pase de limite

      nums[position] += nLength;
      console.log(nums["nums[position] "+position])


      if (nums[position] > 2 * nLength) {
        console.log("poition: "+ position)
        console.log("verifique "+ position + 1)
        duplicateNums.push(position +1)
      }

      //
      
    }

  return duplicateNums;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1])); //[2,3]
// console.log(findDuplicates([1,1,2])); // v
// console.log(findDuplicates([1])); //[]
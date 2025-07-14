function findDifference(nums1: number[], nums2: number[]): number[][] {
    
  const uniqNums1  = new Set(nums1);
  const uniqNums2  = new Set(nums2);


  const answer1: number[] = [];
  const answer2: number[] = [];
  
  for (const num of uniqNums1) {
    
    if (!uniqNums2.has(num)) {
      answer1.push(num);
    }
  }

  for (const num of uniqNums2) {
    
    if (!uniqNums1.has(num)) {
      answer2.push(num);
    }
  }

  return [answer1, answer2]

};



console.log(findDifference([1,2,3],[2,4,6]))
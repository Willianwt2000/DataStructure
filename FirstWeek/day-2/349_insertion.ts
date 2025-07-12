function intersection(nums1: number[], nums2: number[]): number[] {

  let uniqueNum:number [] = [];

  for (const num of nums1) {
    if (nums2.includes(num) && !uniqueNum.includes(num)) {
      uniqueNum.push(num)
    }
  }

  return uniqueNum;
};


let nums1 = [1,2,2,1], nums2 = [2,2];

intersection(nums1, nums2);
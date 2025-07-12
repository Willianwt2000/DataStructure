function numPair(a: number, b: number): number {
  const a_prima = a % 2;
  const b_prima = b % 2;

  if (a_prima === 0 && b_prima === 0) {
    return 0;
  } else if (a_prima === 0) {
    return -1;
  } else if (b_prima === 0) {
    return 1;
  } else {
    return 0;
  }
}

function sortArrayByParity(nums: number[]): number[] {
  return nums.sort(numPair);
}

const nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums)); // [2, 4, 3, 1]





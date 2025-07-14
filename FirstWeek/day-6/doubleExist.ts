function checkIfExist(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {

      const numberOne = arr[i];
      
      for (let j = 0; j < arr.length; j++) {
        const numberTwo = arr[j];
        


        if (i !== j && numberOne === 2 * numberTwo) {
          return true;
        }

      }
      
    }

  return false;
};





let input: number[] = [10,2,5,3];
console.log(checkIfExist(input)); //true
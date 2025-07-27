function singleNumber(nums :number[]) : number{
    let frecuensy = new Map<number, number>()
    let uniqueNumber: number = 0;

    for (const element of nums) {
     frecuensy.set(element, (frecuensy.get(element) || 0) + 1);
    }

    for (const [key, value] of frecuensy) {
      if (value === 1) {
        uniqueNumber = key;
      }
    }

    return uniqueNumber;
};


console.log(singleNumber([0,1,0,1,0,1,99]));
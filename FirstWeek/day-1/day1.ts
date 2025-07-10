//*Insert Push manual
let numbers: number[] = [ 6,2,0,4,5]
let num: number = 10 , pos: number = 3;

for (let i = 0; i < numbers.length; i++) {
  if (i === pos) {
    console.log(numbers[numbers.length])
    numbers[numbers.length] = numbers[pos -1]
    numbers[pos - 1] = num
  
    
  }

  
  
}

 console.log(numbers)


 //? Manual splice Metod
// const { performance } = require('perf_hooks');

// // Array grande para notar la diferencia
// let numbers1 = Array(1_000_000).fill().map((_, i) => i);
// let numbers2 = [...numbers1];
// let pos = 500_000;

// // Método 1: splice()
// const startSplice = performance.now();
// numbers1.splice(pos - 1, 1);
// const endSplice = performance.now();

// // Método 2: for manual
// const startFor = performance.now();
// for (let i = pos - 1; i < numbers2.length - 1; i++) {
//     numbers2[i] = numbers2[i + 1];
// }
// numbers2.length--;
// const endFor = performance.now();

// console.log(`splice(): ${endSplice - startSplice} ms`);
// console.log(`for loop: ${endFor - startFor} ms`);
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


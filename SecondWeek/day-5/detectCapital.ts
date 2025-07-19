function detectCapitalUse(word: string): boolean {
  const onlyUppercase = /^[A-Z]+$/;
  const onlyLowercase = /^[a-z]+$/;
  const firstUppercaseRestLowercase = /^[A-Z][a-z]+$/;
  
  for (let i = 0; i < word.length; i++) {
    if (onlyLowercase.test(word)) {
      return true;
    }
    if (onlyUppercase.test(word)) {
      return true;
    }
    if (firstUppercaseRestLowercase.test(word)) {
      return true;
    }

  }


  return false;    
};

console.log(detectCapitalUse("Hello"))
console.log(detectCapitalUse("HELLO"))
console.log(detectCapitalUse("hello"))
console.log(detectCapitalUse("hEllo"))
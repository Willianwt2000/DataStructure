function commonChars(words: string[]): string[] {
  if (words.length === 0) return [];

  const letterCounts: Array<Record<string, number>> = [];
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const count: Record<string, number> = {};
    for (let j = 0; j < currentWord.length; j++) {
      const letter = currentWord[j];
      count[letter] = (count[letter] || 0) + 1;
    }
    letterCounts.push(count);
  }


  const result: string[] = [];
  const firstWordLetters = words[0];

  for (let i = 0; i < firstWordLetters.length; i++) {
    const letter = firstWordLetters[i];
    let minCount = Infinity;
    let existsInAll = true;


    for (let j = 0; j < letterCounts.length; j++) {
      if (!letterCounts[j][letter]) {
        existsInAll = false;
        break;
      }
      if (letterCounts[j][letter] < minCount) {
        minCount = letterCounts[j][letter];
      }
    }

    if (existsInAll && minCount > 0) {
      for (let k = 0; k < minCount; k++) {
        result.push(letter);
      }

      for (let j = 0; j < letterCounts.length; j++) {
        letterCounts[j][letter] -= minCount;
      }
    }
  }

  return result;
}


// Ejemplo:
const words = ["bella", "label", "roller"];
console.log(commonChars(words));

//highest-scoring-word   https://www.codewars.com/kata/highest-scoring-word/train/javascript

//description: Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.



function high(x) {
  const wordList = x.split(' ');

  const getScore = (word) => {
    return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
  }

  const scoreList = wordList.map(word => getScore(word));

  let highestIndex = 0;
  let highestScore = 0;
  scoreList.forEach((score, i) => {
    if (score > highestScore) {
      highestIndex = i;
      highestScore = score;
    }
  });

  return wordList[highestIndex];
}



// console.log(high('man i need a taxi up to ubud'), 'taxi');
// console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');  
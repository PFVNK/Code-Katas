//Sentence Smash   https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

//description: Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. 



function smash(words) {
  return words.join(' ')
};

let smash = words => words.join(' ')


console.log(smash(["hello"]), "hello");
console.log(smash(["hello", "world"]), "hello world");
//find-the-capitals-1   https://www.codewars.com/kata/find-the-capitals-1/train/javascript

//description: Write a function that takes a single string(word) as argument.The function must return an ordered list containing the indexes of all capital letters in the string.



let capitals = function (word) {
  return word.split('').map((letter, index) => letter === letter.toUpperCase() ? index : letter).filter(x => !isNaN(x))
};

let capitals = word => word.split('')
  .map((letter, index) => letter === letter.toUpperCase() ? index : letter)
  .filter(x => !isNaN(x))



console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
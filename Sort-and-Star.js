//Sort and Star



function twoSort(s) {
  return s.sort()[0].split('').map(letter => letter + '***').join('').slice(0, -3)
}



console.log(
  twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n');
console.log(
  twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');

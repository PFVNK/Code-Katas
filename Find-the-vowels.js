//Find the vowels



function vowelIndices(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']
  let index = []

  for (let i = 0; i < word.length; i++) {
    let letter = word[i]

    if (vowels.includes(letter)) {
      index.push(i + 1)
    }
  }

  return index
}




console.log(
  vowelIndices("mmm"), []);
console.log(
  vowelIndices("apple"), [1, 5]);
console.log(
  vowelIndices("super"), [2, 4]);
console.log(
  vowelIndices("orange"), [1, 3, 6]);
console.log(
  vowelIndices("supercalifragilisticexpialidocious"), [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]);

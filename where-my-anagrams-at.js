//where-my-anagrams-at   https://www.codewars.com/kata/where-my-anagrams-at/train/javascript

//description: Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.


function anagrams(word, words) {
  let splitWord = word.split('').sort()
  let wordCount = {}
  let wordsCount = {}
  let anagram = []

  for (i = 0; i < splitWord.length; i++) {
    let inWord = splitWord[i]
    if (wordCount[inWord]) {
      wordCount[inWord]++
    } else {
      wordCount[inWord] = 1
    }
  }

  for (i = 0; i < words.length; i++) {
    let arrWord = words[i].split('').sort()

    for (j = 0; j < arrWord.length; j++) {
      let letter = arrWord[j]
      if (wordsCount[letter]) {
        wordsCount[letter]++
      } else {
        wordsCount[letter] = 1
      }
    }

    if (JSON.stringify(wordCount) === JSON.stringify(wordsCount)) {
      anagram.push(words[i])
    }

    wordsCount = {}
  }

  return anagram
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'])
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']), [])
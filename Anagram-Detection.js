//Anagram Detection    https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

//description: Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

let sortWord = (word) => word
  .toLowerCase()
  .split('')
  .sort()
  .join()

let isAnagram = (test, original) => sortWord(test) === sortWord(original) ? true : false




console.log(isAnagram("foefet", "toffee"), true)
console.log(isAnagram("Buckethead", "DeathCubeK"), true)
console.log(isAnagram("Twoo", "WooT"), true)

console.log(isAnagram("dumble", "bumble"), false)
console.log(isAnagram("ound", "round"), false)
console.log(isAnagram("apple", "pale"), false)
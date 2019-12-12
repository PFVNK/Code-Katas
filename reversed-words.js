//reversed-words   https://www.codewars.com/kata/reversed-words/train/javascript

//description: Complete the solution so that it reverses all of the words within the string passed in. 



function reverseWords(str) {
  return str.split(' ').reverse().join(' ')
}

function reverseWords(str) {
  let reverseStr = ''

  str = str.split(' ')

  for (i = str.length - 1; i >= 0; i--) {
    reverseStr += `${str[i]} `
  }

  return reverseStr.trim()
}


console.log(reverseWords("hello world!"), "world! hello")
console.log(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
console.log(reverseWords("foobar"), "foobar")
console.log(reverseWords("kata editor"), "editor kata")
console.log(reverseWords("row row row your boat"), "boat your row row row")
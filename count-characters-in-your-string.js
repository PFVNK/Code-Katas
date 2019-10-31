// count-characters-in-your-string   https://www.codewars.com/kata/count-characters-in-your-string/train/javascript

// description: The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
// What if the string is empty ? Then the result should be empty object literal { }


function count(string) {
  let frequency = {}

  let strArr = string.split('')

  for (i = 0; i < strArr.length; i++) {
    let char = strArr[i]
    console.log(char)
    if (frequency[char]) {
      frequency[char]++
    } else {
      frequency[char] = 1
    }
  }

  return frequency
}


function count(string) {
  let frequency = {}

  let strArr = string.split('')

  strArr.forEach(char => {
    if (frequency[char]) {
      frequency[char]++
    } else {
      frequency[char] = 1
    }
  });

  return frequency
}

function count(string) {
  let frequency = {}

  let strArr = string.split('')

  strArr.forEach(char => {
    frequency[char] ? frequency[char]++ : frequency[char] = 1
  });

  return frequency
}



console.log(count("aba"), { a: 2, b: 1 });
console.log(count(""), {});   
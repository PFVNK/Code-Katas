//your-order-please  https://www.codewars.com/kata/your-order-please/train/javascript

//description: Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.


function order(words) {
  let splitWords = words.split(' ')
  let final = new Array(splitWords.length).fill(0)

  if (splitWords.length > 0) {
    for (i = 0; i < splitWords.length; i++) {
      let word = splitWords[i]
      let number = word.match(/\d+/g)

      final.splice(+number - 1, 1, word)
    }

    return final.join(' ')
  }
}


console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), "")
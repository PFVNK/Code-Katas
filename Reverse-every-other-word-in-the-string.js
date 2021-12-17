//Reverse every other word in the string



function reverse(str) {
  let final = []
  let split = str.split(' ')

  for (let i = 0; i < split.length; i++) {
    let word = split[i]

    if (i % 2 !== 0) {
      let chopped = word.split('').reverse().join('')
      final.push(chopped)
    } else {
      final.push(word)
    }
  }

  return final.join(' ').trim()
}



console.log(
  reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
console.log(
  reverse("I really don't like reversing strings!"), "I yllaer don't ekil reversing !sgnirts")

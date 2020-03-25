//I love you, a little , a lot, passionately ... not at all   https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

//Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.



function howMuchILoveYou(nbPetals) {
  const phrases = [
    'not at all',
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
  ]

  return phrases[nbPetals % 6]
}



console.log(howMuchILoveYou(7), "I love you")
console.log(howMuchILoveYou(3), "a lot")
console.log(howMuchILoveYou(6), "not at all")
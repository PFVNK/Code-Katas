//the-feast-of-many-beasts   https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript

//description: All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. 



function feast(beast, dish) {
  let beastLetters = [beast.slice(0, 1), beast.slice(-1)].join('')
  let dishLetters = [dish.slice(0, 1), dish.slice(-1)].join('')

  return beastLetters === dishLetters
}


let feast = (beast, feast) => [beast.slice(0, 1), beast.slice(-1)].join('') === [dish.slice(0, 1), dish.slice(-1)].join('')


function feast(beast, dish) {
  let beastLetters = `${beast[0]}${beast[beast.length - 1]}`
  let dishLetters = `${dish[0]}${dish[dish.length - 1]}`

  return beastLetters === dishLetters
}


let feast = (beast, dish) => `${beast[0]}${beast[beast.length - 1]}` === `${dish[0]}${dish[dish.length - 1]}`



console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)
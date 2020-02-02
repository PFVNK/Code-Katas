// My-head-is-at-the-wrong-end   https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

//description: You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).



function fixTheMeerkat(arr) {
  let animal = []

  for (i = arr.length - 1; i >= 0; i--) {
    animal.push(arr[i])
  }

  return animal
}



console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
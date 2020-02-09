//Opposites-Attract   https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

//description: Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.



function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true
  }

  return false
}



console.log(lovefunc(1, 4), true)
console.log(lovefunc(2, 2), false)
console.log(lovefunc(0, 1), true)
console.log(lovefunc(0, 0), false)
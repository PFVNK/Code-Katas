//counting-sheep-dot-dot-dot   https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript

//descritption: Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).



function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(sheep => sheep === true).length
}

let countSheeps = arrayOfSheep => arrayOfSheep.filter(sheep => sheep === true).length


var array1 = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true];

console.log(countSheeps(array1) == 17, "There are 17 sheeps in total")
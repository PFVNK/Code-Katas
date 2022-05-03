//Fold an array



function foldArray(array, runs) {
  let fold = []
  let newArray = array.slice()

  while (newArray.length > 1) {
    fold.push(newArray[0] + newArray[newArray.length - 1])
    newArray = newArray.slice(1, newArray.length - 1)
  }

  if (newArray.length > 0) {
    fold.push(newArray[0])
  }

  if (runs > 1) {
    return foldArray(fold, runs - 1)
  }

  return fold
}



var input = [1, 2, 3, 4, 5];
console.log(foldArray(input, 1), [6, 6, 3])
console.log(foldArray(input, 2), [9, 6])
console.log(foldArray(input, 3), [15])
console.log(foldArray(input, 1), [6, 6, 3])


  // let middle = array.splice(Math.floor((array.length - 1) / 2), 1)[0

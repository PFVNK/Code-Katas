//Divide and Conquer



function divCon(x) {
  if (x.length > 0) {
    let strings = x.filter(num => num === num.toString()).map(num => +num).reduce((acc, num) => acc + num)
    let numbers = x.filter(num => Number.isInteger(num)).reduce((acc, num) => acc + num)

    return numbers - strings
  }
}



console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);

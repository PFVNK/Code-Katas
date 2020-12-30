//Vasya - Clerk

// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine) {
  let twentyFive = 0
  let fifty = 0

  for (let i = 0; i < peopleInLine.length; i++) {
    let amount = peopleInLine[i]

    if (amount === 25) {
      twentyFive += 1
    }

    if (amount === 50) {
      twentyFive -= 1
      fifty += 1
    }

    if (amount === 100) {
      if (twentyFive >= 3 && fifty === 0) {
        twentyFive -= 3
      } else {
        twentyFive -= 1
        fifty -= 1
      }
    }

    if (twentyFive < 0 || fifty < 0) {
      return 'NO'
    }
  }

  return 'YES'
}



console.log(tickets([25, 25, 50, 50]), "YES");
console.log(tickets([25, 100]), "NO");
console.log(tickets([25, 25, 50, 100]), "YES");
console.log(tickets([25, 50, 25, 50, 100, 25, 25, 50]), "NO");


// function tickets(peopleInLine) {
//   let vasyaMoney = 0

//   for (let i = 0; i < peopleInLine.length; i++) {
//     let num = peopleInLine[i]

//     if (num === 25) {
//       vasyaMoney += 25
//       if (vasyaMoney < 0) { return 'NO' }
//     } else if (num === 50) {
//       vasyaMoney += 25
//       if (vasyaMoney < 0) { return 'NO' }
//     } else if (num === 100) {
//       vasyaMoney -= 75
//       if (vasyaMoney < 0) { return 'NO' }
//     }
//   }

//   return vasyaMoney >= 0 ? 'YES' : 'NO'
// }
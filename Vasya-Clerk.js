//Vasya - Clerk



function tickets(peopleInLine) {
  let vasyaMoney = 0

  for (let i = 0; i < peopleInLine.length; i++) {
    let num = peopleInLine[i]

    if (num === 25) {
      vasyaMoney += 25
      if (vasyaMoney < 0) { return 'NO' }
    } else if (num === 50) {
      vasyaMoney += 25
      if (vasyaMoney < 0) { return 'NO' }
    } else if (num === 100) {
      vasyaMoney -= 75
      if (vasyaMoney < 0) { return 'NO' }
    }
  }

  return vasyaMoney >= 0 ? 'YES' : 'NO'
}



// console.log(tickets([25, 25, 50, 50]), "YES");
// console.log(tickets([25, 100]), "NO");
console.log(tickets([25, 25, 50, 100]), "YES");
console.log(tickets([25, 50, 25, 50, 100, 25, 25, 50]), "NO");
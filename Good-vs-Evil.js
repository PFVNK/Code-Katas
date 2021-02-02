//Good vs Evil



function goodVsEvil(good, evil) {
  let goodNums = good.split(' ')
  let evilNums = evil.split(' ')

  let goodArmy = [1, 2, 3, 3, 4, 10]
  let evilArmy = [1, 2, 2, 2, 3, 5, 10]

  let goodPoints = 0
  let evilPoints = 0

  for (let i = 0; i < goodNums.length; i++) {
    let num = +goodNums[i]

    if (num > 0) {
      goodPoints += num * goodArmy[i]
    }
  }

  for (let i = 0; i < evilNums.length; i++) {
    let num = +evilNums[i]

    if (num > 0) {
      evilPoints += num * evilArmy[i]
    }
  }

  return goodPoints > evilPoints ? 'Battle Result: Good triumphs over Evil' :
    evilPoints > goodPoints ? 'Battle Result: Evil eradicates all trace of Good' :
      'Battle Result: No victor on this battle field'
}

function goodVsEvil(good, evil) {
  let goodArmy = [1, 2, 3, 3, 4, 10]
  let evilArmy = [1, 2, 2, 2, 3, 5, 10]

  let goodNum = good.split(' ').map((num, i) => +num * goodArmy[i]).reduce((acc, num) => num + acc)
  let evilNum = evil.split(' ').map((num, i) => +num * evilArmy[i]).reduce((acc, num) => num + acc)

  if (goodNum > evilNum) return 'Battle Result: Good triumphs over Evil'
  if (evilNum > goodNum) return 'Battle Result: Evil eradicates all trace of Good'
  return 'Battle Result: No victor on this battle field'
}



console.log(goodVsEvil(
  '1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good', 'Evil should win');
console.log(goodVsEvil(
  '0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil', 'Good should win');
console.log(goodVsEvil(
  '1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field', 'Should be a tie');

// return goodNums > evilNums ? "Battle Result: Good triumphs over Evil" :
//   evilNums > goodNums ? "Battle Result: Evil eradicates all trace of Good" :
//     "Battle Result: No victor on this battle field"

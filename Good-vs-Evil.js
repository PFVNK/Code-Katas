//Good vs Evil



function goodVsEvil(good, evil) {
  let goodNums = good.split(' ').reduce((acc, num) => +num + +acc)
  let evilNums = evil.split(' ').reduce((acc, num) => +num + +acc)

  if (goodNums > evilNums) {
    return "Battle Result: Good triumphs over Evil"
  } else if (evilNums > goodNums) {
    return 'Battle Result: Evil eradicates all trace of Good'
  } else if (evilNums === goodNums) {
    return 'Battle Result: No victor on this battle field'
  }
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

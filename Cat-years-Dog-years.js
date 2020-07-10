//Cat years, Dog years  https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript



function humanYearsCatYearsDogYears(humanYears) {
  let dogYears = 0
  let catYears = 0

  for (i = 1; i <= humanYears; i++) {
    if (i === 1) {
      dogYears += 15
      catYears += 15
    } else if (i === 2) {
      dogYears += 9
      catYears += 9
    } else if (i > 2) {
      dogYears += 5
      catYears += 4
    }
  }

  return [humanYears, catYears, dogYears];
}



console.log(humanYearsCatYearsDogYears(1), [1, 15, 15]);
console.log(humanYearsCatYearsDogYears(2), [2, 24, 24]);
console.log(humanYearsCatYearsDogYears(10), [10, 56, 64]);
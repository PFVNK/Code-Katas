//Find the Difference in Age between Oldest and Youngest Family Members



function differenceInAges(ages) {
  let oldToYoung = ages.sort((a, b) => a - b)
  let youngest = oldToYoung[0]
  let oldest = oldToYoung[oldToYoung.length - 1]
  let ageDiff = oldest - youngest

  return [youngest, oldest, ageDiff]
}



console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

//Highest Rank Number in an Array



const highestRank = (arr) => [...arr.reduce((acc, cur) => {
  acc.set(cur, (acc.get(cur) || 0) + 1);
  return acc;
}, new Map()).entries()]
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    }

    return b[0] - a[0];
  })[0][0];



console.log(highestRank([12, 10, 8, 7, 6, 4, 10, 12]), 12);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 10]), 10);
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3);

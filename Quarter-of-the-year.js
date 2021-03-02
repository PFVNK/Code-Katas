//Quarter of the year



const quarterOf = (month) => {
  return month > 10 ?
    4 : month >= 7 ?
      3 : month >= 4 ?
        2 : month >= 1
          ? 1 : null
}



console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)

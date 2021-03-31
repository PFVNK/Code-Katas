//Multiplication table



multiplicationTable = function (size) {
  let final = []

  for (let i = 1; i <= size; i++) {
    let numbers = Array(size)
      .fill(1)
      .map((num, idx) => (num + idx) * i)
    final.push(numbers)
  }

  return final
}



console.log(
  multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);

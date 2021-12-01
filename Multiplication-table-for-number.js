//Multiplication table for number



function multiTable(number) {
  let table = []

  for (let i = 1; i < 11; i++) {
    table.push(`${i} * ${number.toString()} = ${i * number}`)
  }



  return table.join('\n').toString()
}



console.log(
  multiTable(5));
console.log(
  multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');

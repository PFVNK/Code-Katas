//Grouped by commas  https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript

//Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.



function groupByCommas(n) {
  return n.toLocaleString()
}

function groupByCommas(n) {
  n = n.toString().split('')

  n.reverse()

  for (let i = 3; i < n.length; i += 4) {
    n.splice(i, 0, ',')
  }

  n.reverse()

  return n.join('')
}



console.log(groupByCommas(1), '1');
console.log(groupByCommas(10), '10');
console.log(groupByCommas(100), '100');
console.log(groupByCommas(1000), '1,000');
console.log(groupByCommas(10000), '10,000');
console.log(groupByCommas(100000), '100,000');
console.log(groupByCommas(1000000), '1,000,000');
console.log(groupByCommas(35235235), '35,235,235');
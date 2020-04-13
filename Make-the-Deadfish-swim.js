//Make the Deadfish swim   https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

//Write a simple parser that will parse and run Deadfish.
// Deadfish has 4 commands, each 1 character long:
// i increments the value(initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array



function parse(data) {
  let count = 0
  let arr = []

  for (i = 0; i < data.length; i++) {
    if (data[i] === 'i') { count += 1 }
    if (data[i] === 's') { count = count * count }
    if (data[i] === 'd') { count -= 1 }
    if (data[i] === 'o') { arr.push(count) }
  }

  return arr
}



console.log(parse("iiisdoso"), [8, 64]);
console.log(parse("iiisxxxdoso"), [8, 64]);
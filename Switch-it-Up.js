//Switch it Up!   https://www.codewars.com/kata/5808dcb8f0ed42ae34000031


//When provided with a number between 0-9, return it in words.
// Input:: 1
// Output:: "One".
// If your language supports it, try using a switch statement.



function switchItUp(number) {
  let numbers = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine'
  }

  let num

  let keys = Object.keys(numbers)

  keys.forEach((key, i) => {
    if (number === +key) {
      num = Object.values(numbers)[i]
    }
  })

  return num
}



console.log(switchItUp(1), "One");
console.log(switchItUp(3), "Three");
console.log(switchItUp(5), "Five");
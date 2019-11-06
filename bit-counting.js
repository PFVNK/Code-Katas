// bit-counting   https://www.codewars.com/kata/bit-counting/train/javascript

//description: Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.



var countBits = function (n) {
  let one = 0
  let binary = n.toString(2).split('')

  for (let i = 0; i < binary.length; i++) {
    let number = binary[i]
    if (number === '1') {
      one += 1
    }
  }

  return one
};


var countBits = function (n) {
  let binary = n.toString(2).split('')
  let one = 0

  binary.forEach((number, i) => {
    number === '1' ? one += 1 : number
  });

  return one
};


var countBits = function (n) {
  return n.toString(2).split('').filter(x => x === '1').length
};


let countBits = n => n.toString(2).split('').filter(x => x === '1').length


console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
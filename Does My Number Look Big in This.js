// DOES MY NUMBER LOOK BIG IN THIS!  www.codewars.com/kata/does-my-number-look-big-in-this/train/javascript

// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

// The Challenge:
// Your code must return true or false depending upon whether the given number is a Narcissistic number.
// Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.


function narcissistic( value ) {
  let power = value.toString().length;
	let splitNum = value.toString()
						.split('')
						.map(x => Math.pow(x, power))
						.reduce((total, number) => {return total + number});
	let final = value == splitNum ? true : false;					
	return final;
}
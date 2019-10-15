// Simple Fun #2: Circle of Numbers  https://www.codewars.com/users/PFVNK/completed_solutions

// DESCRIPTIONS: Task

// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal(note that 0 and n - 1 are neighbouring, too).

// Given n and firstNumber / first_number, find the number which is written in the radially opposite position to firstNumber.
//   Example

// For n = 10 and firstNumber = 2, the output should be

// circleOfNumbers(n, firstNumber) === 7

// Input / Output

// [input] integer n

// A positive even integer.

//   Constraints: 4 ≤ n ≤ 1000.

//   [input] integer firstNumber / first_number

// Constraints: 0 ≤ firstNumber ≤ n - 1

// [output] an integer



function circleOfNumbers(n, firstNumber) {
  let median = n * .5
  if (firstNumber == median) {
    return 0;
  } else if (firstNumber > median) {
    return firstNumber - median;
  } else if (firstNumber < median) {
    return firstNumber + median;
  }
}
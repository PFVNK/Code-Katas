// FINT THE PARITY OUTLIER  https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// DESCRIPTION: You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11(the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160(the only even number)



function findOutlier(integers) {
  let even = 0
  let odd = 0

  integers.slice(0, 3).map(x => x % 2 === 0 ? even += 1 : odd += 1)

  return even > odd ? integers.filter(number => number % 2 !== 0)[0] : integers.filter(number => number % 2 === 0)[0]
}
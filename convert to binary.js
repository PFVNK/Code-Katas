// CONVERT TO BINARY  https://www.codewars.com/kata/59fca81a5712f9fa4700159a

// DESCRIPTION: Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

// Example:

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

function toBinary(n) {
  return +(n >>> 0).toString(2);
}
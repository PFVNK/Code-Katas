// PRODUCT OF ARRAY ITEMS  https://www.codewars.com/kata/5901f361927288d961000013

// DESCRIPTION: Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.


function product(values) {
  const total = (a, b) => a * b
  return (values && values.length > 0 ? values.reduce(total) : null)
}
//Incrementer



function incrementer(nums) {
  const updated = []

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i]
    let product = number + (i + 1)

    if (product >= 10) {
      let split = product.toString().split('')
      updated.push(+split[1])
    } else {
      updated.push(product)
    }
  }

  return updated
}



console.log(
  incrementer([1, 2, 3]), [2, 4, 6])
console.log(
  incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4])
console.log(
  incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8])
console.log(
  incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]), [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2])


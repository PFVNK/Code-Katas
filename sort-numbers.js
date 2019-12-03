//sort-numbers  https://www.codewars.com/kata/sort-numbers/train/javascript

//description: Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.



function solution(nums) {
  if (nums) {
    return nums.sort((a, b) => a - b)
  } else {
    return []
  }
}


let solution = nums => nums ? nums.sort((a, b) => a - b) : []


//bubble sort
function solution(nums) {
  if (!nums) { return [] }
  let len = nums.length
  let flipped
  do {
    flipped = false
    for (i = 0; i < len; i++) {
      if (nums[i] > nums[i + 1]) {
        let tmp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = tmp
        flipped = true
      }
    }
  } while (flipped)
  return nums
}



console.log(solution([1, 2, 10, 50, 5]), [1, 2, 5, 10, 50])
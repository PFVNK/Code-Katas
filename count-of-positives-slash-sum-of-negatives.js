//count-of-positives-slash-sum-of-negatives  https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript

//descritption: Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.



function countPositivesSumNegatives(input) {
  let positiveCount = 0
  let negativeSum = 0

  if (input && input.length > 0) {
    for (i = 0; i < input.length; i++) {
      let number = input[i]
      if (number > 0) {
        positiveCount += 1
      } else {
        negativeSum += number
      }
    }
  } else {
    return []
  }

  return [positiveCount, negativeSum]
}




console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65])
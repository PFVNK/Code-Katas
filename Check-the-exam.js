//Check the exam



function checkExam(array1, array2) {
  let score = 0

  for (let i = 0; i < array2.length; i++) {
    let answer = array2[i]

    if (answer === array1[i]) {
      score += 4
    } else if (answer && answer !== array1[i]) {
      score -= 1
    }
  }

  return score < 0 ? 0 : score
}



console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0); 

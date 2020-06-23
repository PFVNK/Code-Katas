//Student's Final Grade   https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases



function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100
  } else if (exam > 75 && projects >= 5) {
    return 90
  } else if (exam > 50 && projects >= 2) {
    return 75
  }

  return 0
}

const finalGrade = (exam, projects) => exam > 90 || projects > 10 ?
  100 :
  exam > 75 && projects >= 5 ?
    90 :
    exam > 50 && projects >= 2 ?
      75 :
      0



console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
//Grasshopper - Grade book



function getGrade(s1, s2, s3) {
  let mean = Math.floor((s1 + s2 + s3) / 3)

  if (mean >= 90) return 'A'
  if (mean >= 80 && mean < 90) return 'B'
  if (mean >= 70 && mean < 80) return 'C'
  if (mean >= 60 && mean < 70) return 'D'
  if (mean >= 0 && mean < 60) return 'F'
}



console.log(getGrade(95, 90, 93), 'A')
console.log(getGrade(82, 85, 87), 'B')
console.log(getGrade(70, 70, 70), 'C')
console.log(getGrade(65, 70, 59), 'D')

//Sum consecutives



function sumConsecutives(s) {
  let current = 0
  let summed = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      current += s[i]
    } else if (s[i] !== s[i + 1] && s[i] !== s[i - 1]) {
      summed.push(current)
      summed.push(s[i])
    }
  }

  return summed
}



console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]), [1, 12, 0, 4, 6, 1])
console.log(sumConsecutives([1, 1, 7, 7, 3]), [2, 14, 3])
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0]), [-10, 14, 12, 0])
console.log(sumConsecutives([3, 3, 3, 3, 1]), [12, 1])

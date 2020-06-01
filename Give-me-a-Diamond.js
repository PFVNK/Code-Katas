//Give me a Diamond   https://www.codewars.com/kata/5503013e34137eeeaa001648

//You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).



function diamond(n) {
  if (n <= 0 || n % 2 === 0) { return null }

  n = n

  let top = ''

  let lineWidth = 1

  const createLine = lw => ''.repeat((n - lw) / 2) + '*'.repeat(lw) + '\n'

  while (lineWidth < n) {
    top += createLine(lineWidth)
    lineWidth += 2
  }

  const middle = '*'.repeat(n)

  const bottom = top.split('\n').reverse().join('\n')

  diam = top + middle + bottom + '\n'

  return diam
}



console.log(diamond(1), "*\n")
console.log(diamond(3), " *\n***\n *\n")
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
console.log(diamond(2), null)
console.log(diamond(-3), null)
console.log(diamond(0), null)
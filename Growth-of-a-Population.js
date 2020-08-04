//Growth of a Population  https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

//1000 + 1000 * 0.02 + 50 => 1070 inhabitants



function nbYear(p0, percent, aug, p) {
  let sum = p0, i = 0

  while (sum < p) {
    sum += sum * (percent / 100) + aug
    i++
  }

  return i
}



console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
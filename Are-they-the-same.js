//Are they the "same"?  https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

//Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities.



function comp(array1, array2) {
  if (array1 === null || array2 === null) return false
  let sort1 = array1.sort((a, b) => a - b).map(num => num ** 2)
  let sort2 = array2.sort((a, b) => a - b)

  for (let i = 0; i < sort1.length; i++) {
    let number = sort1[i]
    if (number !== sort2[i]) {
      return false
    }
  }

  return true
}



a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2), true);

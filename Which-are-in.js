//Which-are-in  https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

//description: Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.



function inArray(array1, array2) {
  let arr = [];
  array1.forEach(function (a1) {
    array2.some(function (a2) {
      if (a2.search(a1) > -1) {
        if (!arr.includes(a1)) {
          arr.push(a1);
          return true
        }
      }
    })
  });
  return arr.sort()
}



a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2), [])
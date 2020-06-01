//You only need one - Beginner  https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.



function check(a, x) {
  return a.includes(x) ? true : false
}

let check = (a, x) => a.includes(x) ?
  true :
  false

function check(a, x) {
  for (i = 0; i < a.length; i++) {
    let element = a[i]
    if (element === x) {
      return true
    }
  }

  return false
}



console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
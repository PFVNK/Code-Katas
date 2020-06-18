//All Star Code Challenge #18  https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

//Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.



function strCount(str, letter) {
  let counter = 0
  for (i = 0; i < str.length; i++) {
    let letters = str[i]
    if (letter === letters) {
      counter += 1
    }
  }

  return counter
}



console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);
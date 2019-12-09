//string-incrementer   https://www.codewars.com/kata/string-incrementer/train/javascript

//description: Your job is to write a function which increments a string, to create a new string.



// function incrementString(strng) {
//   strng = strng.split('')
//   let number = []
//   let letters = ''

//   for (i = 0; i < strng.length; i++) {
//     let letter = strng[i]

//     if (!isNaN(Number(letter))) {
//       number.push(letter)
//     } else {
//       letters += letter
//     }
//   }

//   let increment = +number.join('') + 1

//   return letters + increment
// }

function incrementString(strng) {
  let string = strng.replace(/[0-9]/g, '');

  let len = strng.length - string.length;
  console.log(len)

  let str = strng.slice(string.length) || "0";

  str = (parseInt(str) + 1).toString();

  while (str.length < len) {
    str = "0" + str;
  }

  return string.concat(str);
}



console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");
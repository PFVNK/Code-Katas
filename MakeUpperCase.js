//MakeUpperCase   https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript

//desription: Write function makeUpperCase.



function makeUpperCase(str) {
  return str.split().map(letter => letter.toUpperCase()).join()
}

let makeUpperCase = str => str
  .split()
  .map(letter => letter.toUpperCase())
  .join()



console.log(makeUpperCase("hello"), "HELLO");
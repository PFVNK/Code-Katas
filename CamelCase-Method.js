//CamelCase Method



String.prototype.camelCase = function () {
  let final = []
  let arr = this.split(' ').filter(letter => letter !== '')

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]

    final.push(word[0].toUpperCase() + word.substr(1))
  }

  return final.join('')
}



console.log("test case".camelCase(), "TestCase");
console.log("camel case method".camelCase(), "CamelCaseMethod");
console.log("say hello ".camelCase(), "SayHello");
console.log(" camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");

//Hello, Name or World!



function hello(name) {
  if (name) {
    return `Hello, ${name[0].toUpperCase() + name.substring(1).toLowerCase()}!`
  }

  return 'Hello, World!'
}



console.log(
  hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
console.log(
  hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
console.log(
  hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
console.log(
  hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String")

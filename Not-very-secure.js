//Not very secure



function alphanumeric(string) {
  return string.match("^[A-Za-z0-9]+$") ? true : false
}



console.log(alphanumeric("Mazinkaiser"), true)
console.log(alphanumeric("hello world_"), false)
console.log(alphanumeric("PassW0rd"), true)
console.log(alphanumeric("     "), false)

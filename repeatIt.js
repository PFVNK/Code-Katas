//repeatIt



var repeatIt = function (str, n) {
  if (typeof str === 'string') {
    return str.repeat(n)
  }

  return 'Not a string'
}



console.log(
  repeatIt("*", 3), "***", 'Returned unexpected value')
console.log(
  repeatIt("Hello", 11), "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello", 'Returned unexpected value')

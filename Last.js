//Last



function last(list) {
  if (Array.isArray(list) || typeof list === 'string') {
    return list[list.length - 1]
  } else {
    return arguments[arguments.length - 1]
  }
}



console.log(last([1, 2, 3, 4, 5]), 5);   //-- array
console.log(last("abcde"), "e");     //-- string
console.log(last(1, "b", 3, "d", 5), 5);
console.log(last('a'), 'a');//-- arguments

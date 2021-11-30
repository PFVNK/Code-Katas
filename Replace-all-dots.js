//FIXME: Replace all dots



let replaceDots = function (str) {
  return str.replace(/\./g, '-');
}



console.log(replaceDots("one.two.three", "one-two-three"))

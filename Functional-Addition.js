//Functional Addition



function add(n) {
  return function (m) {
    return n + m;
  }
}



console.log(add(1)(3), 4, 'add one to three equals four')

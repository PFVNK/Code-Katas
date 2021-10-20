//Switcheroo



function switcheroo(x) {
  let split = x.split('')
  let final = []

  for (let i = 0; i < split.length; i++) {
    let letter = split[i]
    if (letter === 'a') {
      final.push('b')
    }

    if (letter === 'b') {
      final.push('a')
    }

    if (letter === 'c') {
      final.push('c')
    }
  }

  return final.join('')
}



console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');

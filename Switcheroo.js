//Switcheroo



function switcheroo(x) {
  let final = []

  for (let i = 0; i < x.length; i++) {
    let letter = x[i]
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

function switcheroo(x) {
  return x.split('').map((letter) => {
    if (letter === 'a') return 'b'
    if (letter === 'b') return 'a'
    if (letter === 'c') return 'c'
  }).join('')
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');

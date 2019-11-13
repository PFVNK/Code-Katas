//credit-card-mask   https://www.codewars.com/kata/credit-card-mask/train/javascript

//description: Your task is to write a function maskify, which changes all but the last four characters into '#'.


function maskify(cc) {
  return [...cc].map((number, index) => index > cc.length - 5 ? number : number.replace(number, '#')).join('')
}


console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
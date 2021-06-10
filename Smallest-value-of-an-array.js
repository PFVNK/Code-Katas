//Smallest value of an array



function min(arr, toReturn) {
  if (toReturn === 'value') return Math.min(...arr)

  return arr.indexOf(Math.min(...arr))
}



console.log(min([1, 2, 3, 4, 5], 'value'), 1)
console.log(min([1, 2, 3, 4, 5], 'index'), 0)
console.log(min([5, 2, 1, 4, 3], 'value'), 1)
console.log(min([500, 250, 750, 5000, 1000, 230], 'index'), 5)
console.log(min([839,
  632,
  771,
  347,
  719,
  706,
  71,
  939,
  589,
  560,
  569,
  206,
  499,
  989,
  11,
  440,
  481,
  324,
  683,
  935,
  -395,
  168,
  609,
  32,
  783,
  370,
  94,
  585,
  611,
  271,
  90,
  514,
  808,
  548,
  500,
  416,
  326,
  300,
  973,
  41,
  641,
  469,
  870,
  371,
  395,
  970,
  250,
  135,
  883,
  167], 'index'), 39)

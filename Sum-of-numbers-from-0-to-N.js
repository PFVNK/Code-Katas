//Sum of numbers from 0 to N



var SequenceSum = (function () {
  function SequenceSum() { }

  SequenceSum.showSequence = function (count) {
    let arr = []
    //Fill array up to count
    for (let i = 0; i < count + 1; i++) { arr.push(i) }
    //Get sum of array
    let sum = arr.reduce((acc, val) => {
      return acc + val
    }, 0)
    //Format string with +
    let eq = arr.join('+')
    //Return combined string
    return `${eq} = ${sum}`
  };

  return SequenceSum;

})();


var SequenceSum = (function () {
  function SequenceSum() { }

  SequenceSum.showSequence = function (count) {
    if (count === 0) return '0=0'
    if (count < 0) return `${count}<0`
    let arr = []
    //Fill array up to count
    for (let i = 0; i < count + 1; i++) { arr.push(i) }
    //Format string with +
    let eq = arr.join('+')
    //Return combined string
    return `${eq} = ${eval(eq)}`
  };

  return SequenceSum;
})();



console.log(
  SequenceSum.showSequence(6), "0+1+2+3+4+5+6 = 21")

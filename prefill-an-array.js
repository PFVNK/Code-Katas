//prefill-an-array   https://www.codewars.com/kata/prefill-an-array/train/javascript

//descritption: Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.



function prefill(amount, value) {
  let numAmount = Number(amount)

  if (!value) {
    return new Array(amount).fill('undefined')
  } else if (amount === 0) {
    return []
  } else if (!Number.isInteger(numAmount)) {
    throw new TypeError(`${amount} is invalid`);
  }

  return new Array(amount).fill(value)
}



console.log(prefill(3, 1), [1, 1, 1]);
console.log(prefill(2, 'abc'), ['abc', 'abc']);
console.log(prefill('1', 1), [1]);
console.log(prefill(3, prefill(2, '2d')), [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
var errorThrown = false;
try { prefill('xyz', 1) }
catch (e) {
  console.log(e.name, "TypeError");
  console.log(e.message, "xyz is invalid");
  errorThrown = true;
}
console.log(errorThrown, "prefill did not throw an error");
//Sum Strings as Numbers   https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

//Given the string representations of two integers, return the string representation of the sum of those integers.



// function sumStrings(a, b) {
//   let num =  +a + +b
//   return num.toString()
// }

function sumStrings(a, b) {
  function carry(value, index) {
    if (!value) {
      return;
    }
    this[index] = (this[index] || 0) + value;
    if (this[index] > 9) {
      carry.bind(this)(this[index] / 10 | 0, index + 1);
      this[index] %= 10;
    }
  }

  var array1 = a.split('').map(Number).reverse(),
    array2 = b.split('').map(Number).reverse();

  array1.forEach(carry, array2);
  return array2.reverse().join('');
}


console.log(sumStrings('123', '456'), '579')
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'), '712577413488402631964821329')
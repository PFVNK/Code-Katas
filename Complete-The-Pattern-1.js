//Complete The Pattern #1 



function pattern(n) {
  var output = [];
  for (let i = 1; i <= n; i++) {
    let numFill = Array(i).fill(i)

    output.push(numFill.join('') + '\n')
  }
  return output.join('').slice(0, -1);
}



console.log(pattern(1), "1");
console.log(pattern(2), "1\n22");
console.log(pattern(5), "1\n22\n333\n4444\n55555");

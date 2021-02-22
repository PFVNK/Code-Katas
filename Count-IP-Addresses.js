//Count IP Addresses


function arrayParse(num) {
  let arr = num.split('.')
  let total = 0

  total += +arr[3]
  total += +arr[2] * 256
  total += +arr[1] * 256 * 256
  total += +arr[0] * 256 * 256 * 256

  return total
}

function ipsBetween(start, end) {
  return arrayParse(end) - arrayParse(start)
}



console.log(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
console.log(ipsBetween("20.0.0.10", "20.0.1.0"), 246);
console.log(ipsBetween("10.0.0.0", "10.0.1.0"), 256);

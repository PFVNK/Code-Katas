//Simple Encryption #1 - Alternating Split



function encrypt(text, n) {
  if (n <= 0) return text
  let even = text.split('').filter((el, i) => i % 2 === 0)
  let odd = text.split('').filter((el, i) => i % 2 !== 0)
  let combined = odd.concat(even).join('')

  if (n === 1) {
    return combined
  } else {
    return encrypt(combined, n - 1)
  }
}

function decrypt(encryptedText, n) {
  if (n <= 0) return encryptedText

  let even = encryptedText.split('').filter((el, i) => i % 2 === 0)
  let odd = encryptedText.split('').filter((el, i) => i % 2 !== 0)
  let combined = even.concat(odd).join('')

  if (n === 1) {
    return combined
  } else {
    return encrypt(combined, n - 1)
  }
}



console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), " Tah itse sits!");
console.log(encrypt("This is a test!", 4), "This is a test!");
console.log(encrypt("This is a test!", -1), "This is a test!");
console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");

console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

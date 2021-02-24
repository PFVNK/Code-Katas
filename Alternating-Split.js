//Simple Encryption #1 - Alternating Split



function encrypt(text, n) {
  let second = []

  for (let i = 0; i < text.length; i++) {
    let letter = text[i]

    if (i % 3 === 0) {
      second.push(letter)
      text.slice(i, i + 1)
    }
  }

  console.log(second)
  console.log(text)
}

function decrypt(encryptedText, n) {

}



console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
// console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
// console.log(encrypt("This is a test!", 3), " Tah itse sits!");
// console.log(encrypt("This is a test!", 4), "This is a test!");
// console.log(encrypt("This is a test!", -1), "This is a test!");
// console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");

// console.log(decrypt("This is a test!", 0), "This is a test!");
// console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
// console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
// console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
// console.log(decrypt("This is a test!", 4), "This is a test!");
// console.log(decrypt("This is a test!", -1), "This is a test!");
// console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

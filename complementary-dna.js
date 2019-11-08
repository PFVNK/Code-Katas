//complementary-dna   https://www.codewars.com/kata/complementary-dna/train/javascript

//desciption: In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side



function DNAStrand(dna) {
  let DNA = []

  for (i = 0; i < dna.length; i++) {
    let molecule = dna[i]

    if (molecule === 'A') {
      DNA.push('T')
    } else if (molecule === 'T') {
      DNA.push('A')
    } else if (molecule === 'C') {
      DNA.push('G')
    } else if (molecule === 'G') {
      DNA.push('C')
    }
  }

  return DNA.join('')
}



console.log(DNAStrand("AAAA"), "TTTT");
console.log(DNAStrand("ATTGC"), "TAACG");
console.log(DNAStrand("GTAT"), "CATA");
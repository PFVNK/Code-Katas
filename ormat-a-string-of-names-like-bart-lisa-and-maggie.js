// FORMAT A STRING OF NAMES LIKE BART AND LISA AND MAGGIE  https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript

// DESCRIPTION: Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
// list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
// // returns 'Bart, Lisa & Maggie'
// list([{ name: 'Bart' }, { name: 'Lisa' }])
// // returns 'Bart & Lisa'
// list([{ name: 'Bart' }])
// // returns 'Bart'
// list([])
// // returns ''
// Note: all the hashes are pre - validated and will only contain A - Z, a - z, '-' and '.'.


function list(names) {
  if (!names) return ''
  if (names.length === 2) return `${names[0].name} & ${names[1].name}`

  return names
    .map(({ name }) => name)
    .join(', ')
    .replace(/[,](?!.*,)/g, ' &')
}


console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]), 'Bart, Lisa, Maggie, Homer & Marge',
  "Must work with many names")
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie',
  "Must work with many names")
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa',
  "Must work with two names")
console.log(list([{ name: 'Bart' }]), 'Bart', "Wrong output for a single name")
console.log(list([]), '', "Must work with no names")


// if (names[names.length - 3]) {
//   simpsons += 
//     }
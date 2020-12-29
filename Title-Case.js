//Title Case



function titleCase(title, minorWords) {
  if (title === '') return ''
  if (minorWords === undefined) return title.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ')

  let final = []
  let lowercaseTitle = title.split(' ').map(word => word.toLowerCase())
  let lowercaseMinor = minorWords.split(' ').map(word => word.toLowerCase())


  for (let i = 0; i < lowercaseTitle.length; i++) {
    let word = lowercaseTitle[i]

    if (lowercaseMinor.includes(word)) {
      final.push(word)
    } else if (!lowercaseMinor.includes(word)) {
      final.push(word[0].toUpperCase() + word.substring(1).toLowerCase())
    }
  }

  return final.join(' ').charAt(0).toUpperCase() + final.join(' ').slice(1)
}

const titleCase = (title, minorWords) => {

  if (!title)
    return title;

  let cap = word =>
    word[0].toUpperCase() + word.slice(1);

  let minors = (minorWords || '')
    .toLowerCase()
    .split(' ');

  let result = title
    .toLowerCase()
    .replace(/\S+/g, w => minors.indexOf(w) === -1 ? cap(w) : w);

  return cap(result);

}



console.log(titleCase(''), '')
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')

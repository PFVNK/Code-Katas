//two-to-one   https://www.codewars.com/kata/two-to-one/train/javascript

//description: Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,


function longest(s1, s2) {
  return Array.from(new Set([...s1, ...s2])).sort().join('')
}

let longest = (s1, s2) => Array.from(new Set([...s1, ...s2])).sort().join('')


console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
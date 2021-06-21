//Counting Array Elements



function count(array) {
  let count = {}

  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    if (count[element]) {
      count[element]++
    } else {
      count[element] = 1
    }
  }

  return count
}



console.log(count(['a', 'a', 'b', 'b', 'b']), { 'a': 2, 'b': 3 })

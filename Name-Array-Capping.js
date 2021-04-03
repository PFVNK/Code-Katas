//Name Array Capping



function capMe(names) {
  return names.map(name => name[0].toUpperCase() + name.substring(1).toLowerCase())
}



console.log(capMe(['jo', 'nelson', 'jurie']))

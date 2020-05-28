//Filter out the geese  https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

//Write a function, gooseFilter / goose-filter / goose_filter /GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.



function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter(bird => {
    return geese.indexOf(bird) === -1
  })
};

var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

let gooseFilter = birds => birds.filter(bird => geese.indexOf(bird) === -1)



console.log(
  gooseFilter(
    ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
console.log(
  gooseFilter(
    ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]), ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
console.log(
  gooseFilter(
    ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), []);
// DIRECTIONS REDUCTION  www.codewars.com/kata/directions-reduction/train/javascript

// Once upon a time, on a way through the old wild west,…
// … a man was given directions to go from one point to another. 
// The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
// Going to one direction and coming back the opposite direction is a needless effort. 
// Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!


function dirReduc (arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i+1] && arr[i].length === arr[i+1].length) {
      arr.splice(i,2);
      i = -1;
    } 
  }
  return arr;
}
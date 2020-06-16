//Is the string uppercase?  https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

//Add the isUpperCase method to String to see whether the string is ALL CAPS.



String.prototype.isUpperCase = function () {
  if (this === this.toUpperCase()) {
    return true
  } else {
    return false
  }
}




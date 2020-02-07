//Remove-exclamation-marks   https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

//description: Write function RemoveExclamationMarks which removes all exclamation marks from a given string.



function removeExclamationMarks(s) {
  return s.replace(/!/g, '')
}

let removeExclamationMarks = s => s.replace(/!/g, '')



console.log(removeExclamationMarks("Hello World!"), "Hello World");
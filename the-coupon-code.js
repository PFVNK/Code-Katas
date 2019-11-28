//the-coupon-code   https://www.codewars.com/kata/the-coupon-code/train/javascript

//description: Write a function called checkCoupon which verifies that a coupon code is valid and not expired.



function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  console.log(currentDate)
  if (enteredCode === correctCode) {
    return true
  } else {
    return false
  }
}



console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
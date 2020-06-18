//Sleigh Authentication  https://www.codewars.com/kata/52adc142b2651f25a8000643/train/javascript

//Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password.



function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
  if (this.name === 'Santa Claus' && this.password === 'Ho Ho Ho!') {
    return true
  }

  return false
};




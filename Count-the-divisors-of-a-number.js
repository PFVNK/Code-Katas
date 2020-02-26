//Count-the-divisors-of-a-number   https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

//description: Count the number of divisors of a positive integer n.



function getDivisorsCnt(n) {
  for (i = 1; i <= n; ++i) {
    if (n % i == 0) {
      cout << i << endl;
    }
  }
}



console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
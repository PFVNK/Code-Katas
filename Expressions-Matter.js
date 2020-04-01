//Expressions-Matter   https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()



const expressionMatter = (a, b, c) => Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))



console.log(expressionMatter(2, 1, 2), 6);
console.log(expressionMatter(2, 1, 1), 4);
console.log(expressionMatter(1, 1, 1), 3);
console.log(expressionMatter(1, 2, 3), 9);
console.log(expressionMatter(1, 3, 1), 5);
console.log(expressionMatter(2, 2, 2), 8);
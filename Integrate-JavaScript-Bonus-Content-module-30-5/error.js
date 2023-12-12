// not in js that frequently: range error
const numbers = [3, 4, 5, 8];
// you should not do it(most of the time)
numbers.length = 2;
console.log(numbers);
console.log(numbers.length);
// console.log(numbers[25]);

/* 
// ReferenceError
console.log(money);
const money = 80;
 */
/* 
SyntaxError
for (let i = 0; i < 5 i++) {

}
 */

// if (numbers.length \> 2) {

// }

// let student = {};
let student = { address: "kochukhet" };
console.log(student.address.city);

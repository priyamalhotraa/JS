// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 !=1);


console.log("2" > 1);  // true
console.log("02" > 1);  // true


/* avoid these comparions usually for clean code

console.log(null > 0);  // false
console.log(null == 0);  // false  // works differently
console.log(null >= 0);  // true  // conversion happens ..null converted to 0
(the reason is that an equality check == and comparisons
> < >= <= work differently. Comparisons convert null to
a number, treating it as 0. Thas why (3) null >=0 is true and
(1) null > 0 is false)

console.log(undefined == 0); // always false in any comparison in undefined
console.log(undefined > 0);
console.log(undefined < 0);

*/

// === (strict check) (also checks datatype)
console.log("2" === 2);  // false

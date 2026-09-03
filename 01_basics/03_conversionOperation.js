let score = 33  //number
let marks ="33abc" 

// for null = 0
// for undefined = NaN (not a number)
// for bool true = 1, false = 0

// console.log(typeof score); 
// console.log(typeof(score));// also can be written as a method
// console.log(typeof marks);

let valueInNumber = Number(marks)// in capital  // conerting to number datatype
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "abc"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);  // gives string

/******************** Operations ******************/

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " Priya"

let str3 = str1 + str2
// console.log(str3);
 
// console.log("1" + 2);  // 12
// console.log(1 + "2");  // 12
// console.log("1" + 2 + 2);  // 122
// console.log(1 + 2 + "2");   // 32  // bad practice // ecma script 7.1 (tc39.es)

// console.log((3 + 4) * 5 % 3); // use parenthesis for clean code and avoiding confusion

// console.log(+true); // gives 1  // bad practice
// console.log(+""); // gives 0  // bad practice

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  // confusion

let gameCounter = 100
gameCounter++;   // prefix n postfix operator from mdn
console.log(gameCounter);

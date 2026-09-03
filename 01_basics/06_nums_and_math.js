const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());  // converts to string
// console.log(typeof balance.toString());  // tells data type 
// console.log(balance.toString().length);  // finds length of string
// console.log(balance.toFixed(2));  // precision valueafter decimel

const oneNumber = 23.8956
const otherNumber = 123.8966

// toPrecision give precise values upto what digit is mentioned

// console.log(oneNumber.toPrecision(3));  //23.9 
// console.log(otherNumber.toPrecision(3));  // 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // changes to indian standard numbering systems(comma), also can do the US one

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // 4  // negative value to positive
// console.log(Math.round(4.6));  // 5
// console.log(Math.ceil(4.2));  // 5 
// console.log(Math.floor(4.9));  // 4
// console.log(Math.min(4, 5, 2, 7));  // 2
// console.log(Math.max(4, 5, 2, 7));  // 7

console.log(Math.random());  // always output between 0 and 1
console.log((Math.random()*10) + 1);  // usually for dice game and games
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
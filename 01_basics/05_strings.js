const namee = "priya" // string declaration and definition
const repoCount = 10

// console.log(namee + repoCount + " Concat");  // outdated syntax // not recomended

// use backticks // string interpolation
console.log(`Hello my name is ${namee} and my repo count is ${repoCount}`)

// one more way to declare string
const gameName = new String('priya-priya') // new keyword is used in objects in js

console.log(gameName[0]);  // accessing key value pairs
console.log(gameName.__proto__);  // accessing prototype 

// using objects

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)  // in output last value mentioned for substring(here 4) will not be included
console.log(newString);

const anotherString = gameName.slice(-1, 4)  //we can give give negative values in this and it will start count in reverse according to the negative value till the last value
console.log(anotherString);

const newStringOne = "     anmol    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://priya.com/priya%20malhotra"

console.log(url.replace('%20', '-'))  // search %20 and replace it with -

console.log(url.includes('priya'));

console.log(url.includes('anmol'));

console.log(gameName.split('-')); // separator and limit


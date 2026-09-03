// Primitive (call by value(copy of data)) (stack)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Is javascript statically typed or dynamically typed?
/* JavaScript is a dynamically typed language, which means that data types of 
variables are determined by the value they hold at runtime and can change
 throughout the program as we assign different values to them.*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);  // false

const bigNumber = 123456789012345678n // bigInt

// Reference (Non primitive)(call by reference) (heap)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Priya",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "PriyaMalhotra"

let anotherName = myName
anotherName = "AnmolMalhotra"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user123"
}

let userTwo = userOne

userTwo.email = "priya@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
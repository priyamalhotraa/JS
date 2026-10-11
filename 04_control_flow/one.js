// if 
const isUserLoggedIn = true
const temperature = 41

// if (temperature === 40 ) {
//     console.log("less than 50"); 
// }
// else{
// console.log("Temperature is greater than 50"); 
// }

// console.log("execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // gives error because this is out of scope


// Short hand notation

// const balance = 1000

// // if(balance > 500) console.log("test");  // implicit scope - executed in one line only but be donr in multiple lines too by using comma(very much not recommended to do like this) also dont forget semi colons at end of print statement

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allowed to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
const user = {
    username: "priya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this refers to the current context
        // console.log(`the price is ${this.price}, please proceed to pay it`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// in browser it shows window, because window is the most global object in the browser

// function chai(){
//     let username = "priya"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "priya"
//     console.log(this.username);
// }

// const chai = () => {  // arrow function
//     let username = "priya"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // implicit return   // no need for return 
// const addTwo = (num1, num2) =>  (num1 + num2)  
// if curly braces are there, then write return keyword; if parenthesis, then no return keyword

const addTwo = (num1, num2) =>  ({username: "priya"})  // this is an object to be returned, and for returning object you have to warp it in parenthesis otherwise it will not work

console.log(addTwo(3, 4))


const myArray = [2, 3, 5, 7, 8]
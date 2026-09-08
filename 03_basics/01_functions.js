
function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
}

// sayMyName()  //sayMyName = reference; () = execute

// function addTwoNumbers(number1, number2){  // parameters (when function definition)
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){  // parameters (when function definition)
//    let result = number1 + number2
//    return result
//    console.log("hi"); // this will never be executed because this is default function definition rule that after return no work will be done

    return number1 + number2
}

// addTwoNumbers(3, 4)  // 7  // arguments (when function is called)
// addTwoNumbers(3, "4")  // 34
// addTwoNumbers(3, "a")  // 3a

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);  // gives undefined when console.log and answer with return 

function loginUserMessage(username = "sam"){  // sam is default value here if no argument is passed in function calling
    if(username === undefined){   // same as (!username) means username is undefined,  (undefined is false value, also empty string is false value)
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("priya"));
console.log(loginUserMessage()); // undefined

function calculateCartPrice(...num1){  // rest operator basically pack in a bundle and give
    return num1
}
console.log(calculateCartPrice(200, 300, 500));

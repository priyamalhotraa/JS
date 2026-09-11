// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log(`DB connected`);
}) ();  // in parenthesis, it will work; without parenthesis, it will give syntax error
// first code should end first (with semi colon, for the next one to run)

// (function definition) (execution)

/* there is a problem due to pollution of global scope sometimes it has to do with the variables
which are declared there. To remove the pollution, we use iife */ 

(function coffee(){
    console.log(`DB connected 2`);
}) ();

( (name) => {
    console.log(`DB connected 3 ${name}`);
}) ('priya')
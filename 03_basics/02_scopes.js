// var c = 400
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "priya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// 

if(true) {
    const username = "priya"
    if(username === "priya") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // not accessible because out of scope
}
// console.log(username);  // not accessible because out of scope


// ++++++++++++++++++++ interesting +++++++++++++++++++


addone(5) // here i can access this befoe the declaration because of how it is initialized
function addone(num){
    return num + 1
}

// addone(5)
// console.log(addone(5));


addTwo(5)  // here i can not access this before declaration because the function is inside a variable, if it was not in a variable and decalred normally it could be accessed like in the previous exanple of addone
const addTwo = function(num){  // function but also called expression
    return num + 2
}

// addTwo(5)
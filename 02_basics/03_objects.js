// 2 ways to declare objects - lierals and constructors
// singleton - (not by literals) (by constructor)
// Object.create

// object literals

const mySym = Symbol("key1")  // symbol declaration

const JsUser = {
    name: "Priya",
    "full name": "Priya Malhotra",
    [mySym]: "mykey1",  // to use as a symbol
    age: 21,
    location: "punjab",
    email: "priya@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // better practice to access object because if anything in the object is declared by string ..this is the only way to access that
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);  // this is how symbol is accessed (in square brackets)

JsUser.email = "priya@chatgpt.com"
// Object.freeze(JsUser) // any further changes done to this will not show up
JsUser.email = "priya@hello.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting) // function is not executed .. we got function reference 
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
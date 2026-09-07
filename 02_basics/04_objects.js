const tinderUser = new Object()  // singleton object (constructor)
// const tinderUser = {} // non singleton object (literal)

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "priya",
            lastname: "malhotra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  // accessing object nesting here

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // same array problem where object2 is merged inside the object1

const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // important  // [ 'id', 'name', 'isLoggedain' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'sammy', false ]
// console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedain', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedin')); // checks if the user that property or not  // true
// console.log(tinderUser.hasOwnProperty('isLogged')); // false


const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "youtube"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // de structuring  // also now can call courseinstructor as instructor

// console.log(courseInstructor);
console.log(instructor);

// { // json
//     "name": "priyaa",
//     "coursename": "javascript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


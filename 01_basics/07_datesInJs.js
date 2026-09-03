// Dates
/// Date is an object

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2026, 0, 14)  // months starts from 0\
// console.log(myCreatedDate.toDateString());
 
// let myCreatedDate = new Date(2026, 0, 14, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2026-01-14")  // MM/DD/YY 
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2026")  
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()// exact time stamp values for quizzes and polls

// console.log(myTimeStamp);
// console.log(myCreatedDate);
// console.log(myCreatedDate.getTime()); // in milliseconds
// 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  // or getMonth() + 1 for exact 
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is...`

newDate.toLocaleString('default', {
    weekday: "long",
})
// array

const myArr = [0, 1, 2, 3, 4, 5]
const fruits = ["apple", "mango"]

const myArr2 = new Array(4, 3, 2, 1)
console.log(myArr2[1]);

// Array methods

// myArr.push(6)  // puts element at the end of the array whatever in the argument 
// myArr.push(7)
// myArr.pop()  // remove last element from the array ; no need to pass any argument

// myArr.unshift(9)  // inserts value at the start of the array, shifting all other values ahead
// myArr.shift()  // removes the first element, shifting behind all other values

// console.log(myArr.includes(9));  // true or false // boolean
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // binds the array and changes to string datatype

// console.log(myArr);
// console.log(newArr);  

// console.log(typeof newArr);


// slice, splice

console.log("A", myArr);  // 0, 1, 2, 3, 4, 5

const myn1 = myArr.slice(1, 3)

console.log(myn1);  // 1, 2
console.log("B", myArr);  // 0, 1, 2, 3, 4, 5

const myn2 = myArr.splice(1, 3)  //  here the whole splice portion is removed from the original array and the original array is changed 
console.log("C", myArr);  // 0, 4, 5
console.log(myn2);  // 1, 2, 3
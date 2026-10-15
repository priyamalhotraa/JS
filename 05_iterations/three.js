// for of

// ["", "", ""]  // strings in array
// [{}, {}, {}]  // objects in array

// array specific loops

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Helo World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {   // array de structure 
    console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  // in this, object not iterable
// }
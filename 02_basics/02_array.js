const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // bad practice coz it gives output as array inside an array 
// and the whole array that was added to is just treated as a single element 

// console.log(marvel_heros);
// console.log(marvel_heros.length);  // gives 4
// console.log(marvel_heros[3][1]);  // flash

// concat combines two or more arrays. This method returns a new array w/o modifying any existing arrays.
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// spread
const all_new_heros = [...marvel_heros, ...dc_heros]  // works like concat
// console.log(all_new_heros)  // spread out values 


// flat - returns a new array with all sub-array elements concatenatedinto it recursively up to the specific depth.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // need to give a specific depth here but infnity takes it all we have 
console.log(real_another_array)



console.log(Array.isArray("Priya"))  // checks if it is array or not
console.log(Array.from("Priya"))  // converts it to an array
console.log(Array.from({name: "priya"}))  // need to specify that whether to convert array of the keys or value  // intersting case


// of - returns a new array from a set of elements 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

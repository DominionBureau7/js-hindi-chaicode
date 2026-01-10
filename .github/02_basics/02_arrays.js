//                               node .github/02_basics/02_arrays.js
///////////////////////////////////Arrays/////////////////////////////////////

const marvel_heroes = ["thor", "ironman", "spidermam"];
const dc_heroes = ["superman", "flash", "batman"]; 

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);// this will add the dc_heroes array as a single element at the end of marvel_heroes array. Array within Array.

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);// this will merge both arrays into a single array. So, push and concat are similar but different in this case.

// const allNewHeroes = [...marvel_heroes, ...dc_heroes];// spread operator = here taking 2 glasses and dropping them on the floor. the glass spreads all over the floor.
// console.log(allNewHeroes);


///// Push = used less, Concat and Spread operator = used more often to merge arrays.//////


const another_array = [1, 2, 3, [4, 5, 6], 7, [4, 5]];// Here are 2 more levels inside original array.
const real_another_array = another_array.flat(Infinity);// flat method flattens the array by 1 level.// Infinity makes it flatten all levels.//Usually we mention total levels to flatten.
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));// false = checks if the given value is an array or not.
console.log(Array.from("Hitesh"));// ['H', 'i', 't', 'e', 's', 'h'] = converts the given string into an array of characters.
console.log(Array.from({name: "Hitesh"}));// [] = converts the given object into an array. But here it gives empty array as object has no index. Also shows this when cant convert.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));// [100, 200, 300] = creates an array from the given arguments. Another way to convert values into an array.
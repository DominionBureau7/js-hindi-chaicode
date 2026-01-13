//                                   node .github/05_iterations/other_loops.js

//____________________________________________for of loop_________________________________________________
// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5];
// for (const element of object) {
    
// }
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}
//_______________________________________________maps_____________________________________________________

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('Fr', "France")
// map.set('IN', "India")// This won't be repeated now.
// console.log(map);// Maps are known to be unique and are always in the order set by the user.


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('Fr', "France")
// //console.log(map);// Maps are known to be unique and are always in the order set by the user.

// for (const key of map) {
//     console.log(key);
// }// Shows the data in array form.
// for (const [key, value] of map) {// Array desegregation
//     console.log(key,":-",value);
// }// IN :- India and so on.....


// const myObj = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }
// for (const [key, value] of myObj) {
//     console.log(key,":-",value);
// }  Object is not iterable. Doesn't work.



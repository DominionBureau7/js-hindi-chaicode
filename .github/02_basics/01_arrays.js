//                  node .github/02_basics/01_arrays.js
///////////////////////////////////Arrays/////////////////////////////////////

const myArr = [0, 1, 2, 3, 4, 5, 'True', "Hitesh"]// arrays are inside square brackets and inside it are called elements. The elements can be of different nature.
// console.log(myArr[0]);
// console.log(myArr[2]);
// console.log(myArr[6]);
// console.log(myArr[7]);
// const myHeroes = ['Shaktiman', 'Naagraj', 'Doga', 'Bhokal'];
// console.log(myHeroes[0]);
// console.log(myHeroes[2]);
////////////////////////Array Methods//////////////////////////////

// myArr.push("6");// adds element at the end of the array
// myArr.push("7");// 
// console.log(myArr);
// myArr.pop(7);// removes last element from the array
// console.log(myArr);

// myArr.unshift("Starting");// adds element at the beginning of the array
// console.log(myArr);
// myArr.shift(7);// removes first element from the array
// console.log(myArr.includes(5));//TRUE = checks if element is present in the array or not, returns true or false(Boolean)
// console.log(myArr.indexOf(9));//-1 = element not found.
// console.log(myArr.indexOf(3));//3 = element found.
// console.log(myArr);

// const newArr = myArr.join("_");// joins all the elements of the array into a string with the given separator
// console.log(newArr);
// console.log(typeof newArr);

///////////////////////////////////slice , splice////////////////////////////////////////////

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);// slices the array from index 1 to index 3 (3 not included)
console.log(myn1);
console.log("B", myArr);// original array remains unchanged
const myn2 = myArr.splice(1, 3);// removes 3 elements from index 1
console.log(myn2);
console.log("C", myArr);// original array is changed ==== final result
// In slice 1,3 => 1 to 3 (3 not included) and = 1,2
//  in splice 1,3 => range is included. = 1,2,3
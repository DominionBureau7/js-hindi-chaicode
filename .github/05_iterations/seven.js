//                                       node .github/05_iterations/seven.js

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNumbers.map((num) => num + 10)
//console.log(newNums);// this is without {}, without opening a new scope.
//_________________________difference of {}_______________________________
// const newNums = myNumbers.map((num) => {
//     return num + 10})
// console.log(newNums);// this is with {}, with a new scope.

// ________________________________chaining (multiple)___________________________________________
const newNums = myNumbers
                         .map((num) => num * 10)// a new array created, next conditions will apply to new data created.
                         .map((num) => num + 1)// 11,22,33,44,55......
                         .filter((num) => num >= 40)// 41, 51, 61, 71.....
console.log(newNums);



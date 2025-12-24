let score = "hitesh";
console.log(typeof score);
console.log(typeof(score));

// node .github/01_basics/03_conversionOperation.js
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "Nadir"
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
/// 1 = true, 0 = false
// "" = false, "Nadir = true"
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

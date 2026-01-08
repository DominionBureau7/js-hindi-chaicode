// node .github/01_basics/06_nums_and_math.js

//////////////////////////////////Numbers///////////////////////////////////

const score = 400
console.log(score);
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));// 2 decimal places, mostly used while making ecomerce applications.
console.log(typeof balance);

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));// Priority is before the decimal point.
console.log(otherNumber.toPrecision(4));// Priority is before the decimal point.

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));//10,00,000 - makes the numbers easy to read.
console.log(hundreds.toLocaleString("en-US"));//1,000,000
//Rest in console we see that Number.________(Gives multiple methods to work with numbers)


//////////////////////////////////Math Object///////////////////////////////////

// console.log(Math);
// console.log(Math.abs(4));//absolute value
// console.log(Math.abs(-4));//absolute value but neg is changed to positive

// console.log(Math.round(4.3));//4 Round is mostly used.
// console.log(Math.round(4.7));//5
// console.log(Math.ceil(4.3));//5 - always rounds up to roof value
// console.log(Math.floor(4.7));//4 - always rounds down to floor value
// console.log(Math.min(4,1,9,6,3));//1 - gives minimum value
// console.log(Math.max(4,1,9,6,3));//9 - gives maximum value
// console.log(Math.random());//gives random number between 0 and 1
// console.log(Math.random()*10);//gives random number between 0 and 10
// console.log(Math.random()*10+1);//gives random number between 1 and 10
// console.log(Math.floor(Math.random()*10+5));//gives random number between 5 and 10 but 


const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min));
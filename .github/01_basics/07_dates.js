// node .github/01_basics/07_dates.js

//////////////////////////////////Date Object///////////////////////////////////

let myDate = new Date();
console.log(myDate);
console.log(typeof myDate)//object 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date("2023, 1, 23");// 0 is not counted as a month.
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let myNewDate = new Date("2023, 1, 23, 4:36 pm");
console.log(myNewDate.toLocaleDateString());// 1/23/2023
console.log(myNewDate.toLocaleTimeString());// 4:36 PM

let myOtherDate = new Date("2023-02-23");
console.log(myOtherDate.toDateString());



let myTimestamp = Date.now();
console.log(myTimestamp);// prints the number of milliseconds since January 1, 1970
console.log(myCreatedDate.getTime());// prints the number of milliseconds since January 1, 1970 for the given date.
console.log(Math.floor(Date.now()/1000));// prints the number of seconds since January 1, 1970

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());// prints the day of the week as a number (0-6) 0 is Sunday, 1 is Monday, etc.
console.log(newDate.getDate());// prints the day of the month (1-31)
console.log(newDate.getMonth());// prints the month (0-11) 0 is January, 1 is February, etc.
console.log(newDate.getFullYear());// prints the year (4 digits)

// newDate.toLocaleString('default',{
//     weekday: "long"
// })
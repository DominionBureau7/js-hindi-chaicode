// ////                               node .github/03_basics/01_functions.js

// function sayMyName(){
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
// }
// sayMyName();// sayMyName = reference to function, () => execute the function or write// Hitesh 


// function addTwoNumbers(num1, num2 /*parameters*/){
//     console.log(num1 + num2);
// }
// addTwoNumbers(3,4/*arguements*/);// 7
// addTwoNumbers(3,"4");// 34
// addTwoNumbers(3,"a");// 3a
// addTwoNumbers(3,null);// 3


// const result = addTwoNumbers(10,15);//25
// //console.log("Result:" = result);// undefined___________________(instead follow below)
// function addTwoNumbersresult(num1, num2 /*parameters*/){
//     //let result = num1 + num2;
//     //return num1 + num2;// nothing will be executed/printed after return
//     //           or___________________________________easier way
//     return num1 + num2;
// }

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a valid username");
//         return
//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage("Hitesh"));//= Hitesh just logged in
// console.log(loginUserMessage(""));//undefined just logged in




function calculateCartPrice(...num1/*Rest operater here*/){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));// [ 200, 400, 500, 2000 ]
function calculateCartPrice(val1, val2, ...num1/*Rest operater here*/){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));// [ 500, 2000 ] because first 2 values are assigned to val1 and val2


const user = {
    username: "hitesh",
    price: 199,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}// Function defined.
//handleObject(user);// Function called.
//_____________or_____________________
handleObject({
    username: "sami",
    price: 299,
})// Function called with object directly.


const myNewArray = [200, 400, 100, 600];// Array defined.
function returnSecondValue(getArray){
    return getArray[1]
}// Function defined.
console.log(returnSecondValue(myNewArray));// 40
//_____________or_____________________
console.log(returnSecondValue([200, 400, 100, 600]));// = 400 Array passed directly.
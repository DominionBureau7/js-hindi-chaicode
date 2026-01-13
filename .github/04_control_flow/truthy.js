//                                        node .github/04_control_flow/truthy.js
const userEmail = "h@hitesh.ai";
if (userEmail) {
    console.log("Got user email")
}else {
    console.log("Don't have userEmail")
}// Truthy value as we just assume that if there's a value given then it is true.

//Falsy values =
//false, 0, -0, BigInt 0 n , " ", null, undefined, NaN.

//Truthy values = 
//"0", 'false'," ", [], {}, function(){}, 
// false == 0 - true, false == '' - true , 0 == '' - true,

const userName = [];
if (userName.length === 0) {
    console.log("Array is empty");
}// = This is a way to check an array.

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {// Object.keys(emptyObject) = creates an array. THEN .length === 0 shows the array index.
    console.log("Object is empty");
}// This is a way to check an object.

//____________________________________________________________________________________________________________
// Nullish Coalescing Operator(??) : null and undefined.
let val1;
//val1 = 5 ?? 10// = 5
//val1 = null ?? 10// = 10
//val1 = undefined ?? 15// = 15
val1 = null ?? 10 ?? 20// = 10
console.log(val1);
// It checks if a value is missing (null or undefined ). If it is, it uses the value on the right side. Otherwise, it keeps the value on the left side.
//____________________________________________________________________________________________________________
// Terniary operator
//condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");// = more than 80
// The Ternary Operator in JavaScript is a shorthand way of writing an  statement. It allows you to choose between two values based on a condition, all in a single line.
//____________________________________________________________________________________________________________



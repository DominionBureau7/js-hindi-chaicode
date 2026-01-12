//                                  node .github/03_basics/02_scopes.js

 //////// Scope = {}/////////////////////////////////////////////
var c = 300
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;

}// Anything written in the {} block is called block scope and everything outside is called global scope
//console.log(a); a is not defined
//console.log(b); b is not defined
//console.log(c); //= 30 c is defined because var is function-scoped or globally-scoped

// let a = 300;
// if (true) {
//     let a = 10;
//     const b = 20
// }
//console.log(a); //= 300 a is defined because it is defined in the global scope

// let a = 300;
// if (true) {
//     let a = 10;
//     const b = 20
//     console.log("Inner :", a)//= 10 this way we can show the inner scope variable
// }
// console.log(a);



function one (){
    const username = "hitesh"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); // it wont work because website is not defined in this scope
    two() // = hitesh 
}
one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); //= hitesh youtube
    }
    //console.log(website); // website is not defined = this is because website is defined in the inner block scope but we are trying to access it from the outer block scope
}
//console.log(username); // username is not defined = this is because website is defined in the inner block scope but we are trying to access it from the outer block scope

// ++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++

// function addOne (num){
//     return num + 1
// }// This is a function. Technique 1
// console.log(addOne(5))//= 6
// const addTwo = function (num){
//     return num + 2
// }// This is a function expression. Technique 2
// console.log(addTwo(5))//= 7

//_____________________________________Hoisting______________________________________________

addOne(5)//= 6     This works because of hoisting.
function addOne (num){
    return num + 1
}// This is a function. Technique 1

addTwo(5)//= 7   This wont work because function expressions are not hoisted.
const addTwo = function (num){
    return num + 2
}// This is a function expression. Technique 2

//                               node .github/03_basics/03_Arrows.js

const user = {
    username: "Hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);// prints the whole object
        
    }
};
// user.welcomeMessage(); //= Hitesh, welcome to website. (1.Look inside the object. 2.Find the property named. 3.Execute it as a function.)
// user.username = "SAMI"
// user.welcomeMessage(); //= SAMI, welcome to website.
console.log(this); //= {}. prints the global object (in node.js it's an empty object {})

// function chai() {
//     let username = "hitesh";
//     console.log(this.username); //= global object (in node.js it's an empty object {})
// }
// chai();// = undefined because this points to global object which doesn't have username property

//+++++++++++++++++++++++++++++++++++ Arrow Function 
// const chai = () => {
//     let username = "hitesh";
//     console.log(this); 
// }
// chai();

// const addTwo = (num1, numn2) => {
//     return num1 + numn2;
// }
// console.log(addTwo(3, 4)); //= 7

//_________________________Implicit return method of arrow function___________
// const addTwo = (num1, numn2) => num1 + numn2;
// console.log(addTwo(3, 4)); //= 7. Thats it.
//_______________or_____________
// const addTwo = (num1, numn2) => (num1 + numn2);
// console.log(addTwo(3, 4)); //= 7. Thats it.
// When using {} - we have to use return statement but when () is used we don't have to use return statement.

const addTwo = (num1, numn2) => ({username: "hitesh"});
console.log(addTwo(3, 4)); //= { username: 'hitesh' } . when returning object from arrow function, we have to use () to wrap the object to run it successfully.



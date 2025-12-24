// node .github/01_basics/datatypes-summary.js
////////////////////////////Primitive//////////////////////////////////////
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint(scientific values)

const score = 100; // number
const scoreValue = 100.3; // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined
const id = Symbol('123');
const anotherId = Symbol('123')
// console.log(id === anotherId); // = false

const bigNumber = 48573485945745n; // Bigint

///////////////////////////Reference (Non-primitive)//////////////////////////
// Arrays, Objects, Functions

const heroes = ["shaktiman","Krish","Flying jatt"];// Arrays
let myObj = {
    name: "nadir",
    age: 23,
} // Objects [mainly in brackets, declaring variable not needed]
const myFunction =function(){
    // console.log("hello world");
}
// console.log(typeof heroes);// = object
// console.log(typeof bigNumber); // = Bigint
// console.log(typeof outsideTemp);// = object
// console.log(typeof scoreValue);// = number
// console.log(typeof userEmail);// = undefined
// console.log(typeof myFunction);// = function

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

////////////Stack memory(Primitive), Heap memory(Non-primitive)///////////////

let myYoutubename = "NadsandTechdotcom";// string = in stacks
let anotherName = myYoutubename;// also in stacks = gives the reference only
console.log(myYoutubename);
console.log(anotherName);// Stacks = keeps reference to the object

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}//object created and then stored in heaps
let userTwo = userOne
userTwo.email = "hitesh@google.com"// object's data changed 
console.log(userOne.email);
console.log(userTwo.email);// Heaps = Keeps the object itself



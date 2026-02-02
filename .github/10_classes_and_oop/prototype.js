//    node .github/10_classes_and_oop/prototype.js

// let myName = "hitesh     "
// let mychannel = "chai     "
// //console.log(myName.length);// 11 which is due to the space. So
// console.log(myName.truelength);// undefined
// console.log(myName.trim().length);// 6 but low IQ method
// This is the challenge.

let myHeroes = ["thor", "spiderman"]
let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidey power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects.`);
    
}
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
    
}




//heroPower.hitesh() // `hitesh is present in all objects
myHeroes.hitesh()// `hitesh is present in all objects
myHeroes.heyHitesh()// Hitesh says hello. So yes an array can get the power even before going through the object.
//heroPower.heyHitesh() // error

// ____________________________Inheritence______________________
// Below is whats called Prototypal Inheritence

// Old syntax
const user ={
    name : "chai",
    email : "chai@google.com",
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__: TeachingSupport// earlier this was used to merge two objects to get access as one later.
}
Teacher.__proto__= user

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
//_________________________________________________________________________________//
let anotherUsername = "ChaiAurCode       "
String.prototype.truelength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);//undefined
    console.log(`True length is : ${this.trim().length}`);
    
}
anotherUsername.truelength()
"hitesh".truelength()
"iceTea".truelength()

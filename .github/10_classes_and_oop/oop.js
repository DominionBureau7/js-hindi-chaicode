//        node .github/10_classes_and_oop/oop.js

// Objects - collection of properties and methods.
// const user = {
//     username : "hitesh",
//     loginCount : 8,
//     signedIn : true,// these are all properties

//     getUserDetails : function(){
//         // console.log("Got user details from database");
//         // console.log(`username : ${this.username}`);
//         //console.log(this);// gives the whole object. because this. is used to define the context of the result explected.
        
//     }// this is a method
//}
// console.log(user.username);
// console.log(user.getUserDetails); 
//console.log(this); // {} = global has nothing.

//______________________Constructor______________

// const promiseOne = new Promise()
// const date = new Date()// new = constructor function


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this// This is by default no need to write i.
}

// const userOne = User("hitesh", 12, true);
// const userTwo = User("ChaiAurCode", 11, false);
// console.log(userOne);// Here on printing userTwo will overwrite userOne data.
// But this is chaos. Reason = we havent added (new) to this. Correct way :-

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);// gives reference to itself
//console.log(userTwo);

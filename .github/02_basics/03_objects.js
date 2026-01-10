////                           node .github/02_basics/03_objects.js

/// Singleton - made through constructor
///Object.create

/// Object literals +++++++++++++++++++++++++++++++++++++++++++++In this 
// In arrays we have to define the index to access the value but in objects we can access the value directly by its key.
const mySym = Symbol("Key1");

const Jsuser = {
    name: "Hitesh",
    full_name: "Hitesh Choudhary",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 
console.log(Jsuser.name);// 1 method to access the value from object
console.log(Jsuser.email);
console.log(Jsuser["location"]);// 2 method to access the value from object
console.log(Jsuser["full_name"]);
console.log(Jsuser[mySym]);// not as "mySym" because mySym is a symbol here and not a string.

///changing values in object-----
Jsuser.age = 19;
Jsuser.email = "hitesh@chatgpt.com";
//Object.freeze(Jsuser)//Freeze to avoid changes in object by anyone.
Jsuser.email = "hitesh@microsoft.com";// this will not work now
console.log(Jsuser);

///adding greetings----------
Jsuser.greeting = function(){
    console.log("Hello JS user")};
    console.log(Jsuser.greeting());//Error because JSuser object is freezed.
    //After unfreezing it will work.
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}, ${this.email}`)};// this refers to the current object and shows the available key value pairs.
    console.log(Jsuser.greetingTwo());
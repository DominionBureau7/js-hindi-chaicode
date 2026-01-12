// ////                        node .github/02_basics/04_objects.js
// // Objects +++++++++++++++++++++++++++++++                Singleton with constructor

//const tinderUser = new Object();// = {}
// const tinderUser = {};// = {}
// console.log(tinderUser);
const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Sami";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Sami",
            lastname: "Khanna"
}}}
console.log(regularUser.fullname.userFullname);

// const obj1 = {1: "a", 2: "b"};//keys are numbers
// const obj2 = {3: "a", 4: "b"};//keys are numbers
// const obj3 = {obj1, obj2};// Same problem as arrays, objects within objects
// console.log(obj3);
// const obj3 = Object.assign(obj1, obj2);//Merges two objects
// console.log(obj3);________________________________below is the correct way.
// const obj3 = Object.assign({}, obj1, obj2);// {} = A good practice to keep the original objects safe
// console.log(obj3);// Also guarentees the result expected.
// // But the most widely used method is spread operator.______________________(Below)
// const obj3 = {...obj1, ...obj2};// Spread operator to merge 2 objects__________(90% used)
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com",

    },
    {
        id: 1,
        email: "h@gmail.com",
        
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));// gives all the keys of the object in an array,i.e., tinderUser
console.log(Object.values(tinderUser));// gives all the values of the object in an array,i.e., tinderUser
console.log(Object.entries(tinderUser));// gives all the key value pairs of the object in an array,i.e., tinderUser
console.log(tinderUser.hasOwnProperty("name"));// true = checks if the given key is present in the object or not.

//const obj1 = {1: "a", 2: "b"}; - paste this in console. type obj1. dropdown will show all the methods available for object.

////// Destructuring of objects ++++++++++++++++++++++++++++++
const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh",
}
const {courseInstructor} = course;// Destructuring of objects into variables.
console.log(courseInstructor);

////// JSON API ++++++++++++++++++++++++++++++ Can be any [] or {} structure.
// {
//     "name" : "Hitesh",
//     "courseName": "JS in hindi",
//     "price": "free",
// }// this is JSON format. Used in API's to send data from server to client and vice versa.
[
    {},
    {},
    {},
]
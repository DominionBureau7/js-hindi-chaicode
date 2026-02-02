// All of this javascript is post ES6.
//    node .github/10_classes_and_oop/myClasses.js


// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }// Another function for encrypting passwords.
//     changeaUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai", "chai@gmail.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeaUsername());

// Behind the scenes _____________________________

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
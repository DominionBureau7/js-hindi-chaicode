//     node .github/10_classes_and_oop/inheritence.js

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User{// Teacher inherits from user
    constructor(username, email, password){
        super(username)//In a child class, you MUST call super() before using this.
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new couse was added by ${this.username}`);
        
    }
}
const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe()// Username is Masalachai
console.log(chai === masalaChai);// false
console.log(chai === Teacher);// false
console.log(chai instanceof Teacher);// true
console.log(chai instanceof User);// true
// instanceof checks whether an object exists in the prototype chain of a constructor
// SYNTAX = object instanceof Constructor

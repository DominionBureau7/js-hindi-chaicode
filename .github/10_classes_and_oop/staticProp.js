//    node .github/10_classes_and_oop/staticProp.js

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }// Now we want that if a user is created, a unique ID is attached to it simultaneously
    /*static*/ createID(){// Use static when the behavior belongs to the class itself, not to individual objects.
        return `123`
     }
}
// const hitesh = new User("hitesh")
// console.log(hitesh.createID())
//______________________________________________________________________//

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iPhone = new Teacher("iPhone", "iPhone@.com")
console.log(iPhone.logMe);
iPhone.logMe();
console.log(iPhone.createID());// remove static from createID for this to work.


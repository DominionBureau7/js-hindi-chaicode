//     node .github/10_classes_and_oop/properties_get_set.js

// This is the older syntax of get er and setter. Newer ones have clearer syntax.

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, "email",{// need to give this. again
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

     Object.defineProperty(this, "password",{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}
const chai = new User("chai@chai.com","chai")
console.log(chai.email);
console.log(chai.password);


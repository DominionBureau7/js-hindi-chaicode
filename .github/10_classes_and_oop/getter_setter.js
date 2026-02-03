//     node .github/10_classes_and_oop/getter_setter.js

// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }
//     get passsword(){// get = getter
//         return this.password.toUpperCase()
//     }// This alone is not sufficient. We need to use setter after getter.
//     set password(value){
//         this.password = value
//     }
// }
// const hitesh = new User("h@hitesh.ai", "123")
// console.log(hitesh.password);

// In this whole operation, constructor and setter, both are trying to set value, hence an error is bound to happen. Error = Maximum call stack size exceeded. Constructor and setter both are trying to race their same operations
// Correct way ________________________________________________

// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }
//     get password(){// get = getter
//         return this._password.toUpperCase()
//     }// This alone is not sufficient. We need to use setter after getter.
//     set password(value){// set = setter
//         this._password = value.toUpperCase()
//     }
// }
// const hitesh = new User("h@hitesh.ai", "abc")
// console.log(hitesh.password);// ABC 

// _________________________Another way_____________________________________

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){// value should be given to avoid race.
        this._email = value
    }


    get password(){// get = getter
        return `${this._password}hitesh`
    }// This alone is not sufficient. We need to use setter after getter.
    set password(value){// set = setter
        this._password = value.toUpperCase()
    }
}
const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
console.log(hitesh.password);
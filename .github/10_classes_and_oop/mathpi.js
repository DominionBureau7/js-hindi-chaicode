//      node .github/10_classes_and_oop/mathpi.js
//__________________________________________________explainantion_____________________________________________________________//
// Object.getOwnPropertyDescriptor//It tells you HOW a property exists on an object, not just WHAT its value is.
// {
//   value: "chai", = The actual value stored.

//   writable: true, = Can this value be changed?

//   enumerable: true, = Will it show up in: for. in, Object.keys(), JSON.stringify()

//   configurable: true = Can this property be: deleted?/ redefined?
// }
//____________________________________________________________________________________________________________________________//
//Object.getOwnPropertyDescriptor(Math);
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);// Value of PI isnt changed, not overwritten. 

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const chai = {
    name : "ginger chai",
    price : 250,
    isAvailable : true,
    orderChai : function(){
        console.log("Chai nahi bani");
        
    }
}

// Object.defineProperties(chai, {"name": {
//     writable : false,
//     enumerable : false,
// }})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// // In getOwnPropertyDescriptor = (object) alone wont give the property details. (object, "property") is needed to access the function.


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
        
    }
    
}// chai is not iterable = because its an object
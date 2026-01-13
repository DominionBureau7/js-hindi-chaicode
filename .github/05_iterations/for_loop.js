//                                     node .github/05_iterations/one.js

//______________________________________________for__________________________________________________________
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }// = 0,1,2,3,4,5,6,7,8,9,10
// //console.log(element);  = not accessible as the element is inside the scope.
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log("5 is the best number.");
        
//     }
//     console.log(element);
// }// = 0,1,2,3,4,5 is the best number,6,7,8,9,10


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`Inner loop value: ${j} and inner loop ${i}`);    or
//         console.log(i + '*' + j + '=' + i*j); // creating tables
        
//     }    
// }


// let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//_______________________________________break and continue________________________________________________

// for (let index = 1; index <= 20; index++) {
//     console.log(`Value of i is ${index}`);
// }
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;----------------------------------ending the loop on the condition
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }
for (let index = 1; index <= 20; index++) {
    console.log(`Value of i is ${index}`);
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // -------------------------------skipping the condition once and moving ahead
    }
    console.log(`Value of i is ${index}`);
    
    
}
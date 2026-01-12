//                               node .github/04_control_flow/one.js
////////////if-------
// if(true){

// }   // if true only then the condition is applied
// if(false){

//}    // if false then overwritten
// <,>,<=,>=,!=, ==== (strict -- checks type too), !==

// const isUserLoggedIn = true
// const temperature = 41
// if(temperature=== 41){
//     console.log("less than 50")
// }else{
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");// this will definitely execute as this has nothing to do with the if statement.

//______________________scope related________________________ //
// const score = 200;
// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }// no problem but if the console.log part is written outside the {}, then error - power is not defined. Hence, written below is a cause of error.
// console.log(`User power: ${power}`)
//_____________________________________________________________//

//___________________________Short hand notation________________________________
// const balance = 1000
// if (balance>500) console.log("test"),
// console.log("test 2");--------------------------not the right way to code. ( , )
//______________________________________________________________________________

//___________________________Multiple conditions________________________________
// const balance = 1000
// if(balance < 500){
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 1200){
//     console.log("less than 1200");
// }
//______________________________________________________________________________

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard && 2==2){
    console.log("Allowed to buy course")
}// if any of the statements were to be false, nothing would've been printed.
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}// In JavaScript, the symbol || is called the logical OR operator, and it is used in  statements to check whether at least one of the given conditions is true; if either condition evaluates to true, the whole expression becomes true, and the code inside the  block runs, while if both conditions are false, the  block executes.
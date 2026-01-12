//                          node .github/03_basics/04_iife.js
 //                      Immediately Invoked Function Expression (IIFE)
 // (IIFEs are used to create private scope, avoid global pollution, encapsulate logic, and run code immediately.)
 // Named iife -----

function chai (){
console.log(`DB connected`);
}
chai ();  //or//

// Simple iife -----
(function() {
    console.log("DB connected");
})();     //or//

((name) => {
    console.log(`DB connected Two ${name}`);
})("SAMI");
// A ; is always added after an IIFE to avoid issues.
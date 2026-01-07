// node .github/01_basics/01_variables.js
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2// not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
// console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var.
Because of  issue in block scope and functional scope.
*/

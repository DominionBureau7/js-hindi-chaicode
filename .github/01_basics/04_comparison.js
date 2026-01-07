// node .github/01_basics/04_comparison.js;

// console.log(2>1); = true [string and string or num and num]
// console.log(2>=1); = true [string and string or num and num]
// console.log(2<1); = false [string and string or num and num]
// console.log(2==1); = false [string and string or num and num]
// console.log(2!=1); = true [string and string or num and num]

// console.log("2">1); = true [Different data types]
// console.log("02">1); = true [Different data types]

///////////////////Avoid these types of comparisons/////////////////////////
// console.log(null > 0); = false
// console.log(null == 0); = false
// console.log(null >= 0);= true [comparisons convert null to a number, treating it as 0]
// console.log(undefined==0); = false
// console.log(undefined > 0); = false
// console.log(undefined < 0); = false
///////////////////Avoid these types of comparisons/////////////////////////

//////////////////////////// === [strict check]////////////////////////
// console.log("2" === 2); = false 3 = means the values and the data types
// console.log("2" == 2); = true 2 = means the values only



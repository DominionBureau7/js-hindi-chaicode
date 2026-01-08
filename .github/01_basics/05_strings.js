//                        node .github/01_basics/05_strings.js

/////////////////////////////////Strings///////////////////////////////////
const name = "Hitesh";
const repoCount = 50;
console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Hitesh-Hc");
console.log(gameName);
console.log(gameName[0]);
console.log(typeof gameName);

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4); // hite => 0,1,2,3 will be included but not the 4th one// also doesnt accept the negative values.
console.log(newString);

const anotherString = gameName.slice(-8, 4); 
console.log(anotherString);

const newStringOne = "    hitesh   "// commonly entered like this by users
console.log(newStringOne);
console.log(newStringOne.trim());// removes the extra spaces from start and end

const url = "https://hitesh.com/hitesh%20chaudhary"; // %20 is space as default given by the browser automatically
console.log(url.replace("%20", "-"));
console.log(url.includes("hitesh")); // returns true.
console.log(url.includes("gaming")); // returns false.
console.log(gameName.split("-")); //  puts these substrings into an array, and returns the array.
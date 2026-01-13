//                                    node .github/05_iterations/while_dowhile.js

// The output matters the most, even if you use for loop, while loop or do-while loop. In the end the output matters.
// ____________________________________________while loop____________________________________________________
// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2// in every loop an exit must be encoded.
// }

// let myArray = ["flash", "batman", "superman"]
// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }
//___________________________________________do-while loop___________________________________________________


// let score = 1
// do {
//     console.log(`Score is ${score}`);
//     score++// in every loop an exit must be encoded.
// } while (score <= 10);

let score = 11
do {
    console.log(`Score is ${score}`);
    score++// in every loop an exit must be encoded.
} while (score <= 10); // = Score is 11. thats it. 
// A do while loop in JavaScript always runs the code block at least once before checking the condition. In your example, score starts at 11, so the loop prints "score is 11" once. After that, score becomes 12, and the condition score<=10 is false, so the loop stops immediately. That’s why the output is only one line.
//                                    node .github/05_iterations/for_each_loop.js

const coding = ["js", "ruby", "python", "cpp"]
// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach(item => {
//     console.log(item);
// });// formula used with arrow function

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe);// Another way.

// coding.forEach((item, index, array) => {
//     console.log(item, index, array);
// })

const myCoding =[
    {
        languageName : "Javascript",
        languageFileName : "JS",
    },
    {
        languageName : "Java",
        languageFileName : "Java",
    },
    {
        languageName : "Python",
        languageFileName : "Py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})//-------------------------------Commonly seen = Acessing multiple objects within an array.

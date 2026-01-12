//                       JavaScript execution context (How it runs)

// When JavaScript code is executed, it runs in two main phases: the Creation Phase and the Execution Phase.
// code - Global Execution Context is created. kept under this. It is a single thread language.
// 1 Global Execution Context.
// 2 Function Execution Context.
// 3 Eval Execution Context.
// Code -> Memory creation phase -> Code execution phase.
let val1 = 10; 
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// Step1 = Global execution
// Step2 = Memory phase - val1 = undefined, val2 = undefined, addNum = definition, result 1 = undefined, result2 = undefined
// Step3 = Execution phase - val1 = 10, val2 = 5, addNum = will create a new variable environment + execution thread.
// Step4 = Memory phase and execution phase will be created again for addNum function.
//         Memory phase - val1 = undefined, val2 = undefined, total = undefined.
//         Execution phase - num1 = 10, num2 = 5, total = 15
//         Function will return the value to Global execution context.
// Step5 = The newly created variable environment + execution thread for addNum function will be destroyed/deleted after execution is completed.
// Step6 = The same process will be repeated for result2 variable.
//         addNum = will create a new variable environment + execution thread.
//         Memory phase and execution phase will be created again for addNum function.
//         Memory phase - val1 = undefined, val2 = undefined, total = undefined.
//         Execution phase - num1 = 10, num2 = 5, total = 15
//         Function will return the value to Global execution context.
//         The newly created variable environment + execution thread for addNum function will be destroyed/deleted after execution is completed.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Global execution will always be the first to be created.
// Method 1 -> Global Execution (gets executed) -> out
// Method 2 -> Global Execution (gets executed) -> out
// Method 3 -> Global Execution (gets executed) -> out
// If there are multiple methods, each method will create its own execution context when invoked. And then Last in First Out (LIFO) will be applied. on methods. Meaning : here first Method 3 will get out and so on.
// Go to web/inspect/source
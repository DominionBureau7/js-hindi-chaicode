//                                      node .github/04_control_flow/switch.js

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// const month = 3
// switch (month) {
//     case 1:
//         console.log("January")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;

//     default:
//         console.log("default case match")
//         break;
//}   = // The switch statement in JavaScript is used to perform different actions based on different conditions. It’s an alternative to writing multiple if, else statements, and is especially useful when you’re checking the same variable against many possible values.
const month = "March"
switch (month) {
    case "January":
        console.log("January")
        break;
    case "February":
        console.log("February")
        break;
    case "March":
        console.log("March")
        break;
    case "April":
        console.log("April")
        break;

    default:
        console.log("default case match")
        break;
}

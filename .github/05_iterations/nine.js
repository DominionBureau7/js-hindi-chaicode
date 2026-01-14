//                                      node .github/05_iterations/nine.js


// --------------------------.reduce------------------syntax(below)

// const anyVariable = primaryVariable.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue(mostly 0),
// );

// console.log(anyVariable);





const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)// Here 0 is given as an initial value my user to start with. its important. The game here - Accumulator = 0, Current value = 1, then added and answer = 1, now this 3 will be taken as an accumulator for next repetition = 3.
// console.log(myTotal);// 6 


// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)// Initial value is a must.
// console.log(myTotal);// Same thing in arrow function. = 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);// 22,996

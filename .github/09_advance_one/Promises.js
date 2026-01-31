//                node .github/09_advance_one/Promises.js
// Promise 1----------------------------
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    }, 1000)
})// Here a promise is created and now we can focus on its consumption
promiseOne.then(function(){// .then is for resolve 
    console.log("Promise consumed.");
    
})

// Promise 2----------------------------
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()// Resolve needs to be called like this.
    }, 1000)
}).then(function(){// Directly .then because we havent stored it in a variable
    console.log("Async 2 resolved")
})

// Promise 3----------------------------

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "chai", email : "chai@example.com"})// Mostly the data passed from here would be an object. 
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

// Promise 4----------------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true// = Error : something went wrong. If false = Hitesh
        if (!error){
            resolve({username : "Hitesh", password : "123"})
        }else {
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})
const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    
}).catch(function(error){// .catch = “If anything goes wrong anywhere above, handle it here.”
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"));// .finally = default 

// Promise 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true// = Error : something went wrong. If false = Hitesh
        if (!error){
            resolve({username : "Javascript", password : "123"})
        }else {
            reject("ERROR : JS went wrong")
        }
    }, 1000)
});
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }// trycatch 
}
consumePromiseFive()

// For the next class = fetch ------------------------
// await = “WAIT here until this Promise finishes.”
// _________________Mehthod 1 _________________

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()// await needed here because  
//         console.log(data); 
//     } catch (error) {
//         console.log("E: ", error);
        
// }}
// getAllUsers()

//__________________Method 2_____________________

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error));


// Here in the console we can see that the entire previous code will be shown in the last in console, whereas the json from url is shown first???

// Answer : "Fetch" = now a part of Node.js 

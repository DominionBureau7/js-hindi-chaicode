# Projectrs related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# Solution code
### Project 1

```Javascript
console.log("Hitesh")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function (e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey'//e.target.id = same thing as it holds the same color here too.
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = 'white'
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = 'blue'
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow'
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = 'purple'
    }
  })
});
```
### Project 2
```Javascript
const form = document.querySelector('form')
//Form when submitted is by post or get. When this happens the value of it goes to the url or server. We have to stop this, the actions by default.
//const height = parseInt(document.querySelector('#height').value)
//This use case will give empty value.

form.addEventListener('submit', function(e){
  e.preventDefault()
  //parseInt = “take the integer part from a string”
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

if(height === ''|| height <0 || isNaN(height) ){
  results.innerHTML = `Please give a valid Height ${height}`;
}else if(weight === ''|| weight <0 || isNaN(weight) ){
  results.innerHTML = `Please give a valid Weight ${weight}`;
}else{
  const bmi = (weight / ((height*height)/10000)).toFixed(2)// toFixed(2)= reduce to 2 decimal value
  //Show the result
  results.innerHTML = `<span>${bmi}</span>`
}
})
```

### Project 3
``` Javascript 
const clock = document.getElementById('clock')//   or
//const clock = document.querySelector('#clock') 

//let date = new Date()
//console.log(date.toLocaleTimeString());// Here the current time will be shown but only in Console. So to get that running in our desired way -----
// setInterval(function(){},1000) - we will use this for time clocking.
setInterval(function(){
  let date = new Date()
//console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString()// - Gets the current time and displays it inside the HTML element called 'clock'.
},1000) // Here in console we will have a new time value every second. But we dont need it to show in console rather in out clock. so we comment it whole. 9th line
```

### Project 4
``` Javascript
let randomNumber = parseInt(Math.random() * 100 + 1); // generates a random whole number between 1–100
console.log(randomNumber)

const submit = document.querySelector('#subt'); // selects the submit button using its id
const userInput = document.querySelector('#guessField'); // selects the input field where user types the guess
const guessSlot = document.querySelector('.guesses'); // selects the element showing previous guesses
const remaining = document.querySelector('.lastResult'); // selects the element showing remaining attempts
const lowOrHi = document.querySelector('.lowOrHi'); // Shows whether the values are low or high
const startOver = document.querySelector('.resultParas');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const p = document.createElement('p');
let prevGuess = []
let numGuess = 1
let playGame = true // Found in games to let user know about the times he/she may play again
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//_______________________________________________________________
if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()// values submitted in forms by default go to the servers. So to stop this <-
    const guess= parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)// entry point of the game loop
  })
}
//______________________________________________________________
function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please add a valid number.")
  }else if(guess < 1){
    alert("Please add a number more than 1.")
  }else if(guess > 100){
    alert("Please add a number less than 100.")
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over, Random number was ${randomNumber}`)
      endGame()
    }else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
//___________________________________________________________
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Number is too low.`)
  }else if(guess > randomNumber){
    displayMessage(`Number is too high.`)
}}// compares the guess with the secret number.
//___________________________________________________________

function displayGuess(guess){
  userInput.value = ""
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
}//shows the guess on screen and updates attempts left.
//___________________________________________________________

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}//shows feedback like “Too high!” or “Too low!”
//___________________________________________________________

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h1 id = 'Newgame'> Start a new game</h1>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}
//____________________________________________________________
function newGame(){
  const newGameButton = document.querySelector('#Newgame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled', '')
    startOver.removeChild(p)
    playGame = true
})
}
```
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
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
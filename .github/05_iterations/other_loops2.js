//                                    node .github/05_iterations/other_loops2.js
//_____________________________________________for in__________________________________________________
// In for in loop, when printing the keys - the index numbers are printed rather than the values itself as per the for of loop.
const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'Swift by apple'
}
for (const key in myObject) {
    //console.log(key);// js, cpp
    //console.log(myObject[key]);
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    //console.log(key);// 0,1,2,3,4
    //console.log(programming[key]);// js, rb, py......
    
}
//___________________________for in on map______________________
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
}// Not iterable.
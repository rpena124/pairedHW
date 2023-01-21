### Challenge 1

Create a function addTwo that accepts one input and adds 2 to it.
Navigator: Rosa / Devon
Driver: Christine

function addTwo (num) {
    return num + 2
}

console.log(addTwo(4))


### Challenge 2

Create a function addSthat accepts one input and adds an "s" to it.
Navigator: Christine/ Devon
Driver: Rosa

  function addS (word){
     return `${word}s`
`}
`console.log(addS("pizza"))

### Challenge 3

Create a function called mapthat takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have mapreturn a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4


function multiplyByTwo (num) {
    return num * 2
}
function map(arr, func) {
    const newArr = []
    arr.forEach(item => {
       newArr.push(func(item))
    })
    return newArr
}

const test = map([1,2,3,4,5], multiplyByTwo)
console.log(test)
  
### Challenge 4

The function forEachtakes an array and a callback, and runs the callback on each element of the array. forEachdoes not return anything.
Navigator: Christine/Rosa
Driver: Devon

  function forEach (arr, func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i])
    }
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
    alphabet += char;
});
console.log(alphabet); 

## Challenge 5

Construct a json api with the ExpressJS Framework. You will not use a database. You will mock a database of blogposts in a seperate JS file with the following starter data ***Do in Python if you can with flask***
Navigator: Devon/ Rosa
Driver: Christine

```const mockBlog = [
    {
        id: 1,
        title: 'First Blog Post',
        description: 'My first blog post!'
    },
    {
        id: 2,
        title: 'Second Blog Post',
        description: 'My Second blog post!'
    },
    {
        id: 3,
        title: 'Third Blog Post',
        description: 'My Third blog post!'
    }
];
module.exports = mockBlog
```
Challenge5.js

const mockBlog = require('./Challenge5/seed')
const express = require('express')
const Blog =require('./Challenge5/blogSchema')


const app = express()
app.use(express.json())
//index
app.get('/blog', (req,res) => {
     res.send(mockBlog)
})
//show
app.get('/blog/:id', (req, res) => {
     res.send(mockBlog[req.params.id]);
})

 //create
 app.post('/blog', (req,res) => {
     res.send(req.body)
 }

 )
app.listen(3008,() => {
     console.log("I hear you on this port 3008")
})

[](../pairedHW/Show.png)
[](../pairedHW/Index.png)
[](../pairedHW/Create.png)
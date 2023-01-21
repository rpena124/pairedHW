### Challenge 1

Create a function addTwo that accepts one input and adds 2 to it.

```
```

### Challenge 2

Create a function addSthat accepts one input and adds an "s" to it.

### Challenge 3

Create a function called mapthat takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have mapreturn a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4
  
### Challenge 4

The function forEachtakes an array and a callback, and runs the callback on each element of the array. forEachdoes not return anything.

  let alphabet = '';
  const letters = ['a', 'b', 'c', 'd'];
  forEach(letters, function(char) {
    alphabet += char;
  });
  console.log(alphabet);   //prints 'abcd'
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'

Extension 1

In the first part of the extension, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWithinstead of using a forloop.

Extension 2
The function reducetakes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

   const nums = [4, 1, 3];
   const add = function(a, b) { return a + b; }
   reduce(nums, add, 0);   //-> 8
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8
Here's how it works. The function has an "accumulator value" which starts as the initialValueand accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4)is called. The accumulator's value is now 4. Then add(4, 1)to make it 5. Finally add(5, 3)brings it to 8, which is returned.

Extension 3
Construct a function intersectionthat compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

console.log(intersection([5, 10, 15, 20, 10], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
should log: [15, 5] 
Extension 4
Construct a function unionthat compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!

console.log(union([5, 10, 15, 5], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5])); //should log: [5, 10, 15, 88, 1, 7, 100]
Extension 5
Construct a function objOfMatchesthat accepts two arrays and a callback. objOfMatcheswill build an object and return it. To build the object, objOfMatcheswill test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value. Do in Python if you can

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], 
['HI', 'Howdy', 'BYE', 'LATER', 'hello'], 
function(str) { return str.toUpperCase(); })); // should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }
Extension 6
Construct a function multiMapthat will accept two arrays: an array of values and an array of callbacks. multiMapwill return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key. Do in Python if you can

console.log(mutiMap(['catfood', 'glue', 'beer'], [
function(str) { return str.toUpperCase(); }, 
function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, 
function(str) { return str + str; }
]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
Extension 7
Construct a function objectFilterthat accepts an object as the first parameter and a callback function as the second parameter. objectFilterwill return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback. Do in Python if you can

console.log(objectFilter({ me: 'ME', you: 'you', them: 'THEM' }, (key) => key.toUpperCase()))
// should log {me: 'ME', them: 'THEM'}
Challenge 5
Construct a json api with the ExpressJS Framework. You will not use a database. You will mock a database of blogposts in a seperate JS file with the following starter data ***Do in Python if you can with flask***
const mockBlog = [
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
The json API should
Have an Index, Create, Show route using paths (/blog and /blog/:id) Delete and Update not necessary
Run on port 3008
Accept JSON data not urlencoded data
Be testible by me via postman
Extension 8
Use some of your functions in your JSON API via importing/requiring them into your Json API and making additional routes, for example a search route (be creative)

Extension 9
Deploy it to Heroku ( add a primary /path that sends html to the user describes each route and what type of data to send it)
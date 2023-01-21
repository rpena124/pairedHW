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
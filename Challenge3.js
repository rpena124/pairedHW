
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
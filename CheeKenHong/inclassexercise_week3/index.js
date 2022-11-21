// Question 1
// Write a function named onlyEven that returns evens numbers in an array. 
// Write one version that use forEach and then write another version that uses filter
console.log("Question 1")
let arrNum = [1, 2, 3, 4, 5, 6, 7]

arrNum.forEach((e, i) => {
    if (e % 2 === 0) {
        console.log(e)
    }
})

function isEven(num) {
    return num % 2 === 0;
}
let arrEven1 = arrNum.filter(isEven);
console.log("arrEven : " + arrEven1)
console.log(arrEven1)

// Aiman's answer
// function onlyEven(nums){
//     return nums.filter((num) => num % 2 === 0)
// }

let arrEven2 = arrNum.filter(e => { return e % 2 === 0 });
console.log("arrEven 2 : " + arrEven2);

// Question 2
// counts how many integers there are in an array
console.log("Question 2")
function countIntegers(arr) {
    let totalInteger = arr.filter(function (num) { if (Number.isInteger(num)) { return num } })
    return totalInteger.length
}

let intCount = countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4])
console.log(intCount)

// Question 3
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. 
// The function should return an array of numbers where each number is the length of the corresponding string. use .map
console.log("Question 3")
let letters = ['my', 'cake', 'pudding']
let arrLength = letters.map(function (char) { return char.length })
console.log(arrLength)

// Question 4
// takes in an array of numbers and returns an array of their squares. 
// If you want more practice write one version using .forEach and then write another version using .map
console.log("Question 4")
// way 1
let numArr = [1, 2, 3, 4, 5]
let sqrArr = numArr.map(function (num) { return Math.pow(num, 2) })
console.log(sqrArr)

// way 2
function sqrNum(nums) {
    return nums.map((num) => Math.pow(num, 2))
}

console.log(sqrNum([1, 2, 3, 4, 5]))

// Question 5
// Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array. Use arrow functions
// Get an array of all the machines with value over 500
console.log("Question 5")
var inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]

let filInventory = inventory.filter(e => e.type == "machine")
console.log(filInventory)

let total = filInventory.reduce((total, element) => { return total += element.value }, 0)
console.log("Total value : " + total)

// shorter simpler, answer by Aiman
function totalValue(inventory) {
    let totalValue = inventory
        .filter((item) => item.type === 'machine')
        .reduce((total, element) => { return total += element.value }, 0)
    return totalValue
}

let arrGT500 = inventory.filter(e => e.value > 500 && e.type == 'machine')
console.log("Array of inventory with value GT 500")
console.log(arrGT500)
// Interview Question for NodeJS backend
// Find 3rd position of minimum value in a given Array

let arr = [7, 10, 4, 3, 12, 85, 1]

let min = 0
let max = 0
for (let i = 0; i < arr.length; i++) {
    // to find max number
    if (max < arr[i]) {
        max = arr[i]
    }
}
min = max
let minPos = 2
for (let i = 0; i < arr.length; i++) {
    // to find minimum number
    if (min > arr[i]) {
        // minPos--;
        // if (minPos == 0) 
        min = arr[i]
        console.log("min")
    }
}


console.log("max", max)
console.log("min", min)

console.log("--")

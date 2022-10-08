import EventEmitter from "node:events";
import { sumOfArry } from "./sum-of-array";

// sumOfArry();

// console.log("1st")

// setImmediate(() => {
//     console.log("imdeate")
// })
// setTimeout(() => {
//     console.log("in")
// }, 0)


// console.log("2nd")

// process.nextTick(() => {
//     console.log("next")
// })

// let d = 10
// console.log("3rd", d)

// const myEmitter = new EventEmitter();
// Calbak
// function printString(){
//     console.log("Tom"); 
//     setTimeout(function()  { console.log("Jacob"); }, 300); 
//    console.log("Mark")
//  }

//  printString();

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

// const server = require("./system-design")


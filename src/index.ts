// const xxy = require('./2x=y')


console.log("first")

import { pyramid, pyramid0 } from "./pyramid"

// pyramid(0)
// pyramid0(4)

const settings = {
    dev: 'dev',
    test: 'test',
    prod: 'prod'
}[process.env.NODE_ENV || "def"]

// console.log(settings)


const orgAnum = 1000
const monthAnum = 1000

let anum = 1000
let monthly = (anum / 12) % 1
let mont = anum / 12
console.log(mont, monthly)
let convertedAnum = mont * 12
console.log(convertedAnum)
let convertedMonth = convertedAnum / 12
console.log(Math.round(convertedMonth)) // Showing in UI
let anualFromUI = convertedMonth * 12
console.log(anualFromUI)


// let monthlyMean = (monthly % 1)
// let roundMonthly = Math.round(monthly)
// let monthToAnum = (roundMonthly * 12) + monthlyMean
// let monthToAnumRound = Math.round(monthToAnum)
// let monthToAnumRound = Math.floor(monthToAnum)
// console.log("anum", anum)
// console.log("monthly", monthly)
// console.log("monthlyMean", monthlyMean)
// console.log("roundMonthly", roundMonthly)
// console.log("monthToAnum", monthToAnum)
// console.log("monthToAnumRound", monthToAnumRound)

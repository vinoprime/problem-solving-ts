

// let str = '*'.repeat(1 - 1)
// console.log(str)


// let str = '*'.repeat(5*2 - 1)
// console.log(str)


export const pyramid = (n: number) => {
    for (let i = 1; i <= n; i++) {
        let str0 = ' '.repeat(n - i)
        let str1 = '*'.repeat(i * 2 - 1)
        console.log(str0 + str1 + str0)
    }
}

export const pyramid0 = (n: number) => {
    let str0 = ' '
    let str1 = '*'
    for (let i = 1; i <= n; i++) {
        str0 = ' '
        str1 = '*'
        for (let i0 = 1; i0 <= (n - i); i0++) { str0 += ' ' }
        for (let i1 = 1; i1 < (i * 2 - 1); i1++) { str1 += '*' }
        console.log(str0 + str1 + str0)
    }
}



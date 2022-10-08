const page: any = {
    ['index.html']: '<html>Hello world!</html>'
}

const Database = (key: string, cb: any) => {
    setTimeout(() => {
        cb(page[key])
    }, 3000)
}


export { Database }
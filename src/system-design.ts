import { Database } from './database'
import express from 'express'

const app = express()

const cache: any = {}

app.get('/nocache/index.html', (req: any, res: any) => {
    Database('index.html', (page: any) => {
        res.send(page)
    })
})


app.get('/withcache/index.html', (req: any, res: any) => {
    if ('index.html' in cache) {
        res.send(cache['index.html'])
        return
    }

    Database('index.html',(page:any)=>{
        cache['index.html'] = page
        res.send(page)
    })

})

app.listen(3000, () => {
    console.log("listening on port 3000")
})



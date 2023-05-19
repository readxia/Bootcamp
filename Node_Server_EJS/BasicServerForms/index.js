const express = require('express')
const app = express()

//body parser
//add these two lines to cover all bases of body encoding
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const port = process.env.PORT || 3000

app.get('/home', (req, res)=> {
    res.render('home.ejs')
})

app.get('/senddata', (req, res)=> {
    const {fname, alive, married} = req.query
    res.send(`${fname} is ${alive} and ${married}`)
})

app.post('/postdata', (req, res)=> {
    //body parser is already installed with express!
    //must add in header above ^^^
    const {fname} = req.body
    res.send(fname)
})

app.listen(port, ()=>console.log(`server running on port ${port}`))
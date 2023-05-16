const express = require("express")
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public'))
//import the fakeData.js
const {animals} = require('./fakeData')

app.get('/', (req, res)=> {
    res.send("i am the default route")
})

app.get('/home', (req, res)=> {
    //res.send("i am the home route")

    //for res.render, the first parameter is the file, the second is DATA you want to send to the file
    let arr = ['meow', 'bark', 'OINK']
    res.render("home.ejs", {kitty: 'meow', animals: arr})
})



app.get('/dog/:speak', (req, res)=> {
    let data = req.params.speak
    res.render('result.ejs', {result: data})
})

app.get('/animals', (req, res) =>{
    res.render('animals.ejs', {data: animals})
})

app.get('*', (req, res)=> {
    res.send("i am the star route")
})

app.listen(port, ()=> console.log(`EJS server on port ${port}`))
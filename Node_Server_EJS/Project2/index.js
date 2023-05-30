const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let messages = [
    {name: "Jim", message: "Hi, how are you?"},
    {name: "Jane", message: "How about pasta for dinner?"},
    {name: "Gary", message: "I like my pasta with butter"}
 ]

app.get('/', (req, res)=>{
    res.render('messages.ejs', {messages})
})

app.listen(port, ()=>console.log(`project 2 running on port ${port}`))
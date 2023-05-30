const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let pizza = 'i like my pizza with extra pineapple'
let cappuccino = 'i like my cappuccino to be sweet'
let fries = 'i like my fries crispy with extra salt'

app.get('/', (req, res)=>{
    res.render('home.ejs', {pizza: pizza})
})

app.get('/about', (req, res)=>{
    res.render('about.ejs', {cappuccino: cappuccino})
})

app.get('/contact', (req, res)=>{
    res.render('contact.ejs', {fries})
})

app.listen(port, ()=>console.log(`project 1 running on port ${port}`))
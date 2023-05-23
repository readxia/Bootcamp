const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const logger = require('morgan')
app.use(logger('dev'))
const fetch = require('node-fetch')
const { valueConvertor, dealCards, cardSort } = require('./helpers')

const baseUrl = 'https://deckofcardsapi.com/api/deck/'
app.get('/', (req, res, next)=>{
    let route = 'new/shuffle/?deck_count=1'
    let endpoint = baseUrl + route
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        req.card_id = data.deck_id
        next()
    })
    .catch(err => {
        console.log('first error')
        res.render('error.ejs')
    })
})

app.get("/", (req, res)=>{
    let route = `${req.card_id}/draw/?count=10`
    let endpoint = baseUrl + route
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        let results = valueConvertor(data.cards)
        let hands = dealCards(results)
        res.render('home.ejs', {player: hands[0], computer: hands[1]})
    })
    .catch(err => {
        console.log('second error')
        res.render('error.ejs')
    })
})

app.get('*', (req, res)=> {
    res.render('error.ejs')
})

app.listen(port, ()=>console.log(`running on port ${port}`))
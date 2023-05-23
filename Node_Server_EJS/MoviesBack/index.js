require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const logger = require('morgan')
app.use(logger('dev'))
const fetch = require('node-fetch')
const {TMDB_API_KEY} = process.env

let baseUrl = 'https://api.themoviedb.org/3'
app.get('/', (req, res) => {
    let route = `movie/now_playing?language=en-US&page=1&api_key=${TMDB_API_KEY}`
    let endpoint = `${baseUrl}/${route}`
    fetch(endpoint)
    .then(response => response.json())
    .then(response => {
        res.render('home.ejs', {data: response.results})
    })
    .catch(err => console.log(err))
    res.send('something broke')
})

app.listen(port, ()=> console.log(`running on port ${port}`))
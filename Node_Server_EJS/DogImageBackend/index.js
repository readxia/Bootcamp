const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public'))

const image = "https://images.dog.ceo/breeds/airedale/n02096051_8613.jpg"
const fetch = require('node-fetch')
const baseUrl = 'https://dog.ceo/api'

app.get('/', (req, res)=> {
    res.redirect('/home')
})

app.get('/home', (req, res)=> {
    res.render('home.ejs', {image: image})
})

app.get('/getimage', (req, res)=> {
    let route = 'breeds/image/random'
    let endpoint = baseUrl + '/' + route
    fetch(endpoint)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw Error('something broke!!!')
    })
    .then(data => {
        res.render('home.ejs', {image: data.message})
    })
    .catch(err => {
        console.log('ERROR: ', err)
        res.end()
    })
})

app.get('/getspecialimage', (req, res)=>{
    // /breed/ASDF/images/random
    //let breed = req.query.breed.toLowerCase()
    //breed = breed.replace(' ', '-')
    let breed = req.query.breed
    let route = 'breed/' + breed + '/images/random'
    let endpoint = baseUrl + '/' + route

    fetch(endpoint)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw Error('something broke!')
    })
    .then(data => {
        res.render('home.ejs', {image: data.message})
    })
    .catch(err => {
        console.log('error: ' + err)
        res.end()
    })
})

app.get('*', (req, res)=> {
    res.send('SOMETHING WENT WRONG')
})

app.listen(port, ()=> console.log(`dog image api on port ${port}`))
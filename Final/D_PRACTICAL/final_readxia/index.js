const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// HOME ROUTE FOR TRENDING PAGE
app.get('/', async (req, res)=> {
    let gifList = []

    //API FETCH FOR TRENDING
    const trendingGifs = async () => {
        const baseUrl = "http://api.giphy.com/v1/gifs/trending"
        // SUPER SECURE API KEY
        const key = 'AKmJ3QDsFpbU3s6RhD8A24uNiV6SE8Wb'
        let endpoint = `${baseUrl}?api_key=${key}&limit=25`
        const response = await fetch(endpoint)
        if (response.ok) {
            let gifdata = await response.json()
            //PUT ALL THE DOWNSIZED GIF URLS INTO A LIST
            gifList = gifdata.data.map((obj) => obj.images.downsized.url)

        }
        else {
            console.log(response)
            console.log('error: resopnse was not ok')
        }
    }
    await trendingGifs()
    
    // RENDER
    res.render('home.ejs', {gifList: gifList})
})

// SEARCH ROUTE
app.get('/searchForGifs/:page', async (req, res) => {
    let gifList = []
    // Grab the search term used
    const {search} = req.query
    let pagination = {}

    //API fetch for searching gifs
    const searchGifs = async () => {
        const baseUrl = "http://api.giphy.com/v1/gifs/search"
        //super secure API key
        const key = 'AKmJ3QDsFpbU3s6RhD8A24uNiV6SE8Wb'

        //creating the 'pagination' with offset set to 25 gifs per page
        let offset = parseInt(req.params.page)
        offset *= 25

        let endpoint = `${baseUrl}?api_key=${key}&q=${search}&limit=25&offset=${offset}`
        const response = await fetch(endpoint)
        if (response.ok) {
            let gifdata = await response.json()
            //put all the downsized urls into a list
            gifList = gifdata.data.map((obj) => obj.images.downsized.url)
            pagination = gifdata.pagination

        }
        else {
            console.log(response)
            console.log('error: resopnse was not ok')
        }
    }
    await searchGifs()
    //send information about what search term was used, and what page we are on to EJS
    res.render('search.ejs', {gifList: gifList, searchTerm: search, pagination: pagination, page: parseInt(req.params.page)})
})

app.listen(port, ()=> console.log(`server on port ${port}`))
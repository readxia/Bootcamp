const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res)=> {
    let gifList = []
    const trendingGifs = async () => {
        const baseUrl = "http://api.giphy.com/v1/gifs/trending"
        const key = 'AKmJ3QDsFpbU3s6RhD8A24uNiV6SE8Wb'
        let endpoint = `${baseUrl}?api_key=${key}&limit=25`
        const response = await fetch(endpoint)
        if (response.ok) {
            let gifdata = await response.json()
            gifList = gifdata.data.map((obj) => obj.images.downsized.url)

        }
        else {
            console.log(response)
            console.log('error: resopnse was not ok')
        }
    }
    await trendingGifs()
    
    res.render('home.ejs', {gifList: gifList})
})

app.get('/searchForGifs/:page', async (req, res) => {
    let gifList = []
    const {search} = req.query
    let pagination = {}

    const searchGifs = async () => {
        const baseUrl = "http://api.giphy.com/v1/gifs/search"
        const key = 'AKmJ3QDsFpbU3s6RhD8A24uNiV6SE8Wb'
        let offset = parseInt(req.params.page)
        offset *= 25

        let endpoint = `${baseUrl}?api_key=${key}&q=${search}&limit=25&offset=${offset}`
        const response = await fetch(endpoint)
        if (response.ok) {
            let gifdata = await response.json()
            gifList = gifdata.data.map((obj) => obj.images.downsized.url)
            pagination = gifdata.pagination

        }
        else {
            console.log(response)
            console.log('error: resopnse was not ok')
        }
    }
    await searchGifs()
    res.render('search.ejs', {gifList: gifList, searchTerm: search, pagination: pagination, page: parseInt(req.params.page)})
})

app.listen(port, ()=> console.log(`server on port ${port}`))
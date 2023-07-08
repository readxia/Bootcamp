create parent directory
touch index.js
npm init -y
npm i express
    const express = require('express')
    const app = express()
    const port = process.env.PORT || 3000

    app.get('/', (req, res)=> {
        res.send('hello')
        OR
        res.render('page.ejs') // this page should be in the views folder
    })

    app.listen(port, ()=> console.log(`server on port ${port}`))
npm i ejs (to add ejs)
must have 'views' folder
    views folder will contain pages
partials folder will be in views folder
partials can be implemented with includes
    <%- includes('partials/componentName.ejs') %>

npm i node-fetch@2
    const fetch = require('node-fetch')
(allows you to fetch outside of the browser)

npm i morgan -D
(allows it not to be a dependency) (morgan just helps console logs things i think)
    const logger = require('morgan')
    app.use(logger('dev'))

npm i dotenv
    require('dotenv').config()
we create a .env file and put it in our parent directory
put in our objects there, require this package, and it should be in our process.env object
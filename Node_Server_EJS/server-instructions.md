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
        res.render(page.ejs) // this page should be in the views folder
    })

    app.listen(port, ()=> console.log(`server on port ${port}`))
npm i ejs (to add ejs)
must have 'views' folder
    views folder will contain pages
partials folder will be in views folder
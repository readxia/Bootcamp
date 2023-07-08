//install express morgan mongoose dotenv
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const logger = require('morgan')
app.use(logger('dev'))

//body parser (this deals with post requests)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Build the CONNECTION
const mongoose = require('mongoose')
const {URI, DB, DB_USER, DB_PASS} = process.env
const url = `${URI}/${DB}`

const connectionObj = {
    authSource: 'admin',
    user: DB_USER, 
    pass: DB_PASS,
}

mongoose.connect(url, connectionObj)
.then(()=> console.log(`Successfully connected to ${DB} db`))
.catch(err => console.log(`Error: ${err}`))



//BLUEPRINTS
    // build a Schema (to make sure the data is consistent)
    const itemSchema = mongoose.Schema({
        description: {
            type: String,
            minLength: 1,
            maxLength: 20,
            required: [true, 'Description is required!']
        },
        isComplete: {
            type: Boolean,
            default: false
        }
    })
    // Model - defines the collection and which schema to use
    const bucketModel = mongoose.model('bucketlist', itemSchema)


//QUERIES

//POST
//when using a post request to get data, the data will be in req.body! (using postman)
//this one will be in req.body.description
app.post('/bucket', (req, res)=> {
    //send thru body, then use body parser, 
    let data = req.body.description
    bucketModel.create({description: data})
    .then(result => {
        console.log(result)
        res.json(result)
    })
    .catch(err => {
        console.log('Error POSTING data to DB: ', err)
        res.status(401).json({message: "unable to POST data to db at this time"})
    })
})


app.get('/', (req, res) => {
    res.send('root route')
})

//READ
app.get('/bucket', (req, res)=> {
    console.log('GET')
    bucketModel.find({})
    .then(results => {
        if (results.length < 0) {
            res.json({message: "there is no data here"})
        }
        res.json(results)
    })
    .catch(err => {
        console.log('Error getting data from DB: ', err)
        res.status(400).json({message: "unable to get data from db at this time"})
    })
})

//DELETE
app.delete('/bucket/:id', (req, res) => {
    //grab value from :id 
    //if sending thru URL :id, it is req.params
    //if there is a ?, it is req.query
    //post is req.body
    //findByIdAndDelete()
    let id = req.params.id
    bucketModel.findByIdAndDelete(id)
    .then(result => {
        console.log(result)
        res.send(result)
    })
    .catch(err => {
        console.log('cannot delete data from database', err)
        res.status(402).json({message:'cannot delete data from database'})
    })
})

//UPDATE
app.put('/bucket/:id', (req, res) => {
    // change isComplete boolean value
    // findById()
    // if it exists, we will update
    let id = req.params.id
    bucketModel.findById(id)
    .then(result => {
        result.isComplete = !result.isComplete
        // need to make another call to the database that will save the result to the db
        result.save()
        .then(updatedResult => {
            console.log(updatedResult)
            res.send(updatedResult)
        })
        .catch(err => {
            console.log('error updating specific ID to DB', err)
            res.status(404).json({message: 'cannot update document with specific ID to db'})
        })
        res.send(result)
    })
    .catch(err => {
        console.log('error updating in DB', err)
        //error message to the user
        res.status(403).json({message: 'cannot update document to db'})
    })
})

app.listen(port, ()=>console.log(`bucketlist server running on port ${port}`))
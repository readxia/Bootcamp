install mongoose, dotenv

    const mongoose = require('mongoose')
    require('dotenv').config

create .env file in the directory
include this:
    URI = 'mongodb://mongodb.accsoftwarebootcamp.com:27017'
    DB = 'rx_bucket'

    change DB to the database name
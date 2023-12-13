const express = require('express')

const artist= require('./routes/RoutMusic')
const genre = require('./routes/RoutGenre')
const album = require('./routes/RoutAlbum')

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/Artist', artist)
app.use('/api/Genre', genre)
app.use('/api/Album', album)

module.exports = app


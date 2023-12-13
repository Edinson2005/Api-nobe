const express = require('express')
const show_routes = require('./routes/RoutMusic')

const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/Artist', show_routes)

module.exports = app


'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/test', (req, res) =>{
    res.status(200).send({message:"hola mundo"})

})

module.exports = app;
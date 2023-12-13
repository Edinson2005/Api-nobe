'use strict';

let mongoose = require ('mongoose')
var Schema = mongoose.Schema

var MusicSchema = Schema({
    name: String,
    release_date: String,

})

module.exports =mongoose.model('Album', MusicSchema, "Album");
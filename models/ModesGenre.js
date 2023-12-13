'use strict';
let mongoose = require('mongoose');
var Schema = mongoose.Schema

var MusicSchema = Schema({
    name: String,
});

module.exports = mongoose.model('Genre', MusicSchema, "Genre");
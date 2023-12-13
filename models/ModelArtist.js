'use strict';
let mongoose = require('mongoose');
var Schema = mongoose.Schema

var MusicSchema = Schema({
    name: String,
    nationality: String,
    photo: String,
});

module.exports = mongoose.model('Artist', MusicSchema ,'Musiclist');
const { Router } = require('express')
const MusicController = require('../controllers/ControArtist')


const router = Router()

router.get('/', MusicController.getMusiclist)

module.exports= router
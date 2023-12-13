const { Router } = require('express')
const MusicController = require('../controllers/ControArtist')


const router = Router()

router.get('/', MusicController.getArtists)
router.get('/:id?', MusicController.getArtist)
router.post('/save', MusicController.saveArtist)
router.put('/edit/:id?', MusicController.updateArtist)
router.delete('/delete/:id?', MusicController.deleteArtist)

module.exports= router
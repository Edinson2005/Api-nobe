const {Router} = require('express')
const GenreController = require('../controllers/ControGenre')

const router = Router()

router.get('/', GenreController.getGenres)
router.get('/:id?', GenreController.getGenre)
router.post('/save', GenreController.saveGenre)
router.put('/edit/:id?', GenreController.updateGenre)
router.delete('/delete/:id?', GenreController.deleteGenre)

module.exports= router
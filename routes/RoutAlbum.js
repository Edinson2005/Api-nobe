const {Router} = require ('express')
const AlbumController = require ('../controllers/ControAlbum')

const router = Router()

router.get('/', AlbumController.getAlbums)
router.get('/:id?', AlbumController.getAlbum)
router.post('/save', AlbumController.saveAlbum)
router.put('/edit/:id?', AlbumController.updateAlbum)
router.delete('/delete/:id?', AlbumController.deleteAlbum)

module.exports = router
let Album = require('../models/ModelAlbum')

const controller = {
    getAlbums: function(req, res){
        Album.find ({}). exec()
        .then(albumlist => {
            if(!albumlist) return res.status(404).end({message: "No album found"})
            return res.status (200).json(albumlist)
        })
        .catch(err => res.status (500). send({message:`Error: ${err}`}))
    },
    getAlbum: function(req, res){
    let albumId = req.params.id
    if (albumId ==null) return res.status (404).send({message: "No album found"})

    Album.findbyId(albumId).exec()
    .then(data =>{
        if(!data) return res.status(404). send({message: "No album found"})
        return res.status (200).json(data)
    })
    .catch(err => res.status (500). send({message:`Error: ${err}`}))
    },
    //create
    saveAlbum: function (req, res) {
        let album = new Album();
        const { name, release_date } = req.body;

        if (name && release_date) {
            album.name = name;
            album.release_date = release_date;

            album.save()
                .then(storedAlbum => {
                    storedAlbum
                        ? res.status(200).json({ album: storedAlbum })
                        : res.status(400).send({ message: "Error saving the document" });
                })
                .catch(error => res.status(500).send({ message: "Error while saving the document" }));
        } else {
            return res.status(400).send({ message: "Data is not right" });
        }
    },
    //update

    updateAlbum: function (req, res) {
        let albumId = req.params.id
        let update = req. body

        Album.findByIdAndUpdate(albumId, update,{returnDocument: 'after'})
        .then(updateAlbum =>{
            if(!updateAlbum) return res.status(404).send({message: "The document does not exist"})
        return res.status(200).send({album: updateAlbum})
        })
        .catch(error => res.status(500).send({message: `Error while updating ${error}`}))
    },

    //delete
    deleteAlbum: function (req, res) {
        let albumId = req.params.id;
    
        Album.findByIdAndDelete(albumId)
            .then(removeAlbum => {
                if (!removeAlbum) return res.status(404).send({ message: "The album does not exist" });
                return res.status(200).send({ album: removeAlbum });
            })
            .catch(err => res.status(500).send({ message: "Error while deleting" }));
    }
}
module.exports = controller
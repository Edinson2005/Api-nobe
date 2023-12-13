let Artist = require('../models/ModelArtist')

const controller ={
    getArtists: function(req, res){
        Artist.find({}).exec()
        .then(artistlist =>{
            if(!artistlist) return res.status(404).send ({message: "data not found"})
            return res.status(200).json(artistlist)
        })
        .catch(err => res.status(500).send({message: `Error: ${err}`}))
    },
    getArtist: function (req, res){
        let artistId = req.params.id
        if(artistId == null) return res. status(404).send ({message: "music not found"})

        Artist.findbyId(artistId).exec()
        .then(data =>{
            if(!data) return res.status(404).send ({message: "data not found"})
            return res. status(200).json(data)
        })
        .catch(err => res.status(500).send({message: `Internal error-> ${err}`}))
    },
//create
    saveArtist: function (req,res){
        let artist = new Artist()
        const {name, nationality} = req.body
        if (name && nationality){
            artist.name = name
            artist.nationality= nationality
            

            artist.save()
            .then(storedArtist =>{
                storedArtist
                ? res.status(200).json({artist: storedArtist})
                : res.status(404).send({message: "Error saving the document"})
            })
            .catch(error => res.status(500).send({message: "Error while saving the document"}))
        }else{
            return res. status(400).send({message: "data is not right"})
        }

    },
    //update
    updateArtist: function (req,res){
        let artistId = req.params.id
        let update = req.body

        Artist.findByIdAndUpdate(artistId, update,{returnDocument: 'after'})
        .then(updateArtist =>{
            if(!updateArtist) return res.status(404).send({message: "The document does not exist"})
            return res.status(200).send({artist: updateArtist})
        })
        .catch(error => res.status(500).send({message: `Error while updating ${error}`}))
    },
    //delete

    deleteArtist: function (req,res){
        let artistId = req.params.id

        Artist.findByIdAndDelete(artistId)
        .then(removedArtist => {
            if (!removedArtist) return res.status(404).send({message: "The show does not exist"})
            return res.status(200).send({artist: removedArtist})
        })
        .catch(err => res.status(500).send({message: "Error while deleting"}))
    }
    }

module.exports = controller
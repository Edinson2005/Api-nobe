let Genre = require('../models/ModesGenre')

const controller ={
    getGenres: function(req, res){
        Genre.find({}). exec()
        .then(genrelist =>{
            if(!genrelist) return res.status(404).send ({message: "data not found"})
            return res.status(200).json(genrelist)
        })
        .catch(err => res.status(500).send({message: `Error: ${err}`}))
    },
    getGenre: function (req, res){
        let genreId = req.params.id
        if(genreId ==null) return res.status(404).send({message: "data not found"})

        Genre.findbyId(genreId).exec()
        .then(data =>{
            if(!data) return res.status(404) .send ({message: "data not found"})
            return res.status(200). json(data)
        })
        .catch(err => res.status(500). send ({message: `Internal error-> ${err}`}))
    },

    //create
    saveGenre : function(req, res){
        let genre = new Genre()
        const {name} = req.body
            if(name){
                genre.name = name

                genre.save()
                .then(storedGenre =>{
                    storedGenre
                    ? res.status(200).json({genre: storedGenre})
                    : res.status(400).send({message: "Error saving the document"})
                })
                .catch(error => res.status(500).send({message: "Error while saving the document"}))
            }else{
                return res. status(400).send({message: "data is not right"})
            }
        
    },
    //update

    updateGenre:function(req, res){
        let genreId = req.params.id
        let update = req.body

        Genre.findByIdAndUpdate(genreId, update,{returnDocument: 'after'})
        .then(updateGenre =>{
            if(!updateGenre) return res.status(404).send({message: "The document does not exist"})
            return res.status(200).send({artist: updateGenre})
        })
        .catch(error => res.status(500).send({message: `Error while updating ${error}`}))
    },
    //delete
    deleteGenre:function(req, res){
        let genreId = req.params.id

        Genre.findByIdAndDelete(genreId)
        .then(removeGenre=> {
            if (!removeGenre) return res.status(404).send({message: "The show does not exist"})
            return res.status(200).send({genre: removeGenre})
        })
        .catch(err => res.status(500).send({message: "Error while deleting"}))
    }
}
module. exports= controller
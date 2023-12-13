let Artist = require('../models/ModelArtist')

const controller ={
    getMusiclist: function(req, res){
        Artist.find({}).exec()
        .then(Musiclist =>{
            if(!Musiclist) return res.status(404).send ({message: "data not found"})
            return res.status(200).json(Musiclist)
        })
        .catch(err => res.status(500).send({message: `Error: ${err}`}))
    },
    }

module.exports = controller
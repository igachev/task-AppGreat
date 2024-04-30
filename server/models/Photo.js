
const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({

    title: {
        type: String
    },

    description: {
        type: String
    },

    image: {
        type: String
    }

})

const Photo = mongoose.model('Photo',photoSchema)

module.exports = Photo
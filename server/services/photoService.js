const Photo = require("../models/Photo.js")


exports.addPhoto = async (title,description,photo) => {

    try {
        const newPhoto = new Photo({title,description,photo})
        const savedPhoto = await newPhoto.save()
        return savedPhoto
    } catch (err) {
        throw err
    }

}
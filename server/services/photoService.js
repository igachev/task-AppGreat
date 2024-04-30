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

exports.getPhotos = async () => {
    try {
        const photos = await Photo.find({})
        return photos
    } catch (err) {
        throw err
    }
}

exports.getPhoto = async (photoId) => {
    try {
        const photo = await Photo.findById(photoId)
        return photo
    } catch (err) {
        throw err
    }
}
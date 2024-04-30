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

exports.editPhoto = async (photoId,title,description,photo) => {
    try {
        const editedPhoto = await Photo.findOneAndUpdate(
            {_id: photoId},

            {
                $set: {
                    title,
                    description,
                    photo
                }
            },

            {runValidators: true, new: true}
        )

        return editedPhoto
    } catch (err) {
        throw err
    }
}

exports.deletePhoto = async (photoId) => {

    try {
        const deletedPhoto = await Photo.findByIdAndDelete(photoId)
        return deletedPhoto
    } catch (err) {
        throw err
    }
}

const router = require('express').Router()
const photoService = require('../services/photoService.js')

router.post('/', async (req,res) => {
    const {title,description,photo} = req.body;

    try {
        const result = await photoService.addPhoto(title,description,photo)
        res.status(201).json(result)
    } catch (err) {
        console.log(err)
    }
})

router.get('/', async (req,res) => {

    try {
        const result = await photoService.getPhotos()
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
    }

})

router.get('/:photoId', async(req,res) => {
    const photoId = req.params.photoId

    try {
        const result = await photoService.getPhoto(photoId)
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
    }

})

router.put('/:photoId', async(req,res) => {
    const photoId = req.params.photoId
    const {title,description,photo} = req.body;

    try {
        const result = await photoService.editPhoto(photoId,title,description,photo)
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
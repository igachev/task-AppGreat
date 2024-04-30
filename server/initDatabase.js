
const mongoose = require('mongoose')
const database = "mongodb://127.0.0.1:27017/photos";

async function startDatabase() {
    mongoose.set('strictQuery',false)
    await mongoose.connect(database)
    console.log('connected to DB..')
}

module.exports = startDatabase
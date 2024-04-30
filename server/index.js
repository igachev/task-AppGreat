
const express = require('express')
const startDatabase = require('./initDatabase.js')

const app = express()

startDatabase()
.then(() => {
    app.listen(5000, () => {
        console.log('server started..')
    })
})
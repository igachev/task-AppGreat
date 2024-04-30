
const express = require('express')
const startDatabase = require('./initDatabase.js')
const routes = require('./routes.js')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(routes)

startDatabase()
.then(() => {
    app.listen(5000, () => {
        console.log('server started..')
    })
})
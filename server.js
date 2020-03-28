// eslint-disable-next-line no-undef
require('dotenv').config()
require('server/db/mongoose')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

//setup routes for api
const index = require('server/routes/index')
const locations = require('server/routes/locations')

//user body parser
app.use(bodyParser.json())

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (_, res) => res.send('COVID19 API Integration'))
app.use('/api', index)
app.use('/api/location', locations)

app.listen(port, () => console.log(`Hope is listening on port ${port}!`))

module.exports = { app }
// eslint-disable-next-line no-undef
require('dotenv').config()
require('server/db/mongoose')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const index = require('server/routes/index')
const locations = require('server/routes/locations')
const users = require('server/routes/users')

const authenticate = require('server/middleware/requestAuthentication')

// Use body parser
app.use(bodyParser.json())

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (_, res) => res.send('COVID19 API Integration'))
app.use('/api', authenticate, index)
app.use('/api/location', authenticate, locations)
app.use('/api/users', authenticate, users)

// Here we go...
app.listen(port, () => console.log(`Hope is listening on port ${port}!`))

module.exports = { app }
// eslint-disable-next-line no-undef
require('dotenv').config()
require('./server/db/mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')


//setup routes for api
const apiRoutes = require('./api-routes')

//user body parser
app.use(bodyParser.json())

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}))


app.get('/', (req, res) => res.send('COVID19 API Integration'))
app.use('/api', apiRoutes)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = { app }
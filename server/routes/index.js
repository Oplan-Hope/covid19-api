// Initialize express router
const _ = require('lodash')
let router = require('express').Router()
const { UserLocation } = require('../models/userLocation')
const { requestAuthentication } = require('../middleware/requestAuthentication')

// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Hello kindly input the proper router for specific endpoint'
  })
})

router.post('/location', requestAuthentication, async (req, res) => {
  try {
    const body = _.pick(req.body, ['userId', 'name', 'latitude', 'longitude'])
    const userLocation = new UserLocation(body)

    const doc = await userLocation.save()
    res.status(201).send(doc)
  } catch (error) {
    console.error('Error saving user location: ', error)
  }
})

router.get('/location/:userid', async (req, res) => {
  try {
    const { userid } = req.params
    const { limit } = req.query

    const doc = await UserLocation.find(
      { userId: userid }, 
      {}, 
      { sort: { 'createdAt' : -1 }, limit: parseInt(limit) }
    )

    if (doc) {
      res.send(doc)
    }

    return res.status(404).send('User location not found')
  } catch (error) {
    console.error('Error finding location: ', error)
  }
})

module.exports = router
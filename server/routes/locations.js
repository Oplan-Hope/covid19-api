const router = require('express').Router()
const pick = require('lodash/pick')
const { UserLocation } = require('server/models/userLocation')
const { requestAuthentication } = require('server/middleware/requestAuthentication')

router.post('/', requestAuthentication, async (req, res) => {
  try {
    const body = pick(req.body, ['userId', 'name', 'latitude', 'longitude'])
    const userLocation = new UserLocation(body)

    const doc = await userLocation.save()
    res.status(201).send(doc)
  } catch (error) {
    console.error('Error saving user location: ', error)
  }
})

router.get('/:userid', async (req, res) => {
  try {
    const { userid } = req.params
    const { limit } = req.query

    const doc = await UserLocation.find({ userId: userid }, {}, { sort: { createdAt: -1 }, limit: parseInt(limit) })

    if (doc) {
      res.send(doc)
    }

    return res.status(404).send('User location not found')
  } catch (error) {
    console.error('Error finding location: ', error)
  }
})

module.exports = router

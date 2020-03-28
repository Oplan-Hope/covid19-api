const router = require('express').Router()
const STATUS_CODES = require('http-status-codes')
const pick = require('lodash/pick')
const UserLocation = require('server/models/userLocation')
const validate = require('server/middleware/validate')
const locationValidation = require('server/validations/locations.validation')

router.post('/', validate(locationValidation.store), async (req, res) => {
  try {
    const body = pick(req.body, ['userId', 'name', 'latitude', 'longitude'])
    const userLocation = new UserLocation(body)

    const doc = await userLocation.save()
    res.status(STATUS_CODES.CREATED).send(doc)
  } catch (error) {
    console.error('Error saving user location: ', error)
  }
})

router.get('/:userid', async (req, res) => {
  try {
    const { userid } = req.params
    const { limit } = req.query

    const userLocation = await UserLocation.find(
      { userId: userid },
      {},
      { sort: { createdAt: -1 }, limit: parseInt(limit) }
    )

    if (!userLocation) {
      return res.status(STATUS_CODES.NOT_FOUND).send('User location not found')
    }

    return res.send(userLocation)
  } catch (error) {
    console.error('Error finding location: ', error)
  }
})

module.exports = router

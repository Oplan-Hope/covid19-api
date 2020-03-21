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

router.post('/location', requestAuthentication,  function (req, res) {
  const body = _.pick(req.body, ['userId', 'name', 'latitude', 'longitude'])
  const userLocation = new UserLocation(body)
  userLocation.save().then((doc) => {
    res.send(doc)
  }, (err)=> {
    res.send(err)
  })
})

router.get('/location/:userid',requestAuthentication,  function (req, res) {
  var { userid } = req.params

  UserLocation.find({userId:userid}).then((UserLocation) => {
    res.send({
      UserLocation
    })
  }, (e) => {
    res.send(e)
  })
})



module.exports = router
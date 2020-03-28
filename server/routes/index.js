// Initialize express router
const router = require('express').Router()

// Set default API response
router.get('/', function(_, res) {
  res.json({
    status: 'API Its Working',
    message: 'Hello kindly input the proper router for specific endpoint'
  })
})

module.exports = router

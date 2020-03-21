
require('dotenv').config({ path: '../../.env'})

const apiKeyHope = process.env.API_HOPE_KEY

const requestAuthentication = (req, res, next) => {
  var token = req.header('X-Hope-Key')

  if (token === apiKeyHope)
    next()
  else 
    res.status(401).send({ 
      message: token ? 'X-Hope-Key given is incorrect': 'No X-Hope-Key header found'
    })
}

module.exports.requestAuthentication = requestAuthentication
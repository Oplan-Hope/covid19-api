
require('dotenv').config({ path: '../../.env'})

const apiKeyHope = process.env.API_HOPE_KEY

const requestAuthentication = (req, res, next) => {
  var token = req.header('x-hope-key')
  
  if(token === apiKeyHope)
    next()
  else 
    res.status(401).send({message:'No x-hope-key header found'})

}

module.exports.requestAuthentication = requestAuthentication
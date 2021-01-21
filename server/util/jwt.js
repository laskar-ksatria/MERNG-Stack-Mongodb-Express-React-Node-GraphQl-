const jwt = require('jsonwebtoken')


function generateToken(payload) {
    console.log(payload)
    return jwt.sign(payload, "heeey")    
}

function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY)
}


module.exports = { generateToken, verifyToken }
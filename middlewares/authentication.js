const jwt = require('../helpers/jwt')
const {
    User
} = require('../models')

/**
 * This middleware is to check the token that being sent 
 * via header in a key called Authorization
 */
module.exports = async (req, res, next) => {
    try {
        // 
        let payload = await jwt.verify(req.headers.authorization) // this is for verifying the token and save the the token value to variable payload
        console.log(payload)
        req.user = await User.findByPk(payload.id)// find the related user data based on user id on payload
        if (!req.user) throw new Error()
        
        next()
    } catch {
        res.status(401).json({
            status: "fail",
            errors: ["Invalid Token"]
        })
    }  
}
'use strict';
const passport = require('passport')
const Strategy = require('passport-http-bearer').Strategy
const jwt = require('../helpers/jwt');

// Setup work and export for the JWT passport strategy


passport.use(new Strategy(
    (token, done) => {
        jwt.verify(token, (err, decoded) => {
            if (err) {
                done(err)
            } else {
                done(null, decoded)
            }
        })
    }))

let library = {
    authentication: (req, res, next) => {
        passport.authenticate('bearer', {
            session: false
        }, function (err, user, info) {
            if (err) {
                return res.status(401).send({
                    status: 'failed',
                    message: err.message,
                });
            } else if (!user) {
                return res.status(401).send({
                    status: 'failed',
                    message: err.message,
                });
            } else {
                next()
            }
        })(req, res, next);
    }
}


module.exports = library
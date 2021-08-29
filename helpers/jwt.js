const jwt = require('jsonwebtoken');

exports.sign = (data) => {
    return jwt.sign(data , process.env.SECRET);
}

exports.verify = (authorization) => {
    return jwt.verify(authorization, process.env.SECRET);
}
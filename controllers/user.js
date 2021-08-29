const {
  User
} = require('../models')
const bcrypt = require('../helpers/bcrypt')
const jwt = require('../helpers/jwt')
const axios = require('axios')

module.exports = {
  async register(req, res) {
    let {
      email,
      password,
      name
    } = req.body
    try {
      let user = await User.create({
        email,
        password,
        name
      })

      let token = jwt.sign({
        id: user.id
      })

      user = user.entity

      return res.status(201).json({
        status: 'success',
        result: {
          user,
          token
        }
      })
    } catch (err) {
      return res.status(400).json({
        status: 'register failed'
      });

    }
  },
  async login(req, res) {
    let {
      email,
      password
    } = req.body
    try {
      let user = await User.findOne({
        where: {
          email
        }
      })

      let isValidated = bcrypt.checker(password, user.password);

      if (isValidated) {
        let token = jwt.sign({
          id: user.id,
          email: user.email
        })

        user = user.entity
        
        return res.status(200).json({
          status: 'success',
          result: {
            user,
            token
          }
        })
      } else {
        return res.status(401).json({
          status: 'wrong password'
        });
      }
    } catch {
      return res.status(422).json({
        status: 'email or password is wrong'
      });
    }
  }
}
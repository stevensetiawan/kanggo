const {
  User
} = require('../models')
const bcrypt = require('../helpers/bcrypt')
const jwt = require('../helpers/jwt')
const axios = require('axios')

module.exports = {
  async register(req, res) {
    let {
      email ,
      password,
      name
    } = req.body

    try {  
      console.log("masuk ga?")
      console.log(email,password,name)
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
      console.log(err)
      console.log('masuk sini')
      return res.status(400).json({
        status: 'register failed',
        message: err
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
            token
          }
        })
      } else {
        return res.status(401).json({
          status: 'wrong email or password'
        });
      }
    } catch {
      return res.status(422).json({
        status: 'wrong email or password'
      });
    }
  }
}
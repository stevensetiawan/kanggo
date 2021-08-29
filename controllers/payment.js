const {
  Payment
} = require('../models')

module.exports = {
  async createPayment(req, res) {
    let {
      name,
      price,
      qty
    } = req.body

    try {
      let payment = await Payment.findOne({
        where: {
          name
        }
      })

      if (!payment) {
        let payment = await Payment.create({
          name,
          price,
          qty
        })
        return res.status(201).json({
          status: 'success',
          result: {
            payment
          }
        })
      } else {
        throw new Error('Payment is already existed')
      }
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      });
    }
  },
  async updatePayment(req, res) {
    let {
      name,
      price,
      qty
    } = req.body
    try {

      let payment = await Payment.update({
        name,
        price,
        qty
      }, {
        where: {
          id: req.params.id
        }
      })

      return res.status(200).json({
        status: 'success',
        result: {
          payment
        }
      })
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      })
    }
  },
  async getAllPayment(req, res, next) {
    try {
      let count = await Payment.count()
      let page = await Math.floor(count / 5) + 1
      let payments = await Payment.findAll({
        attributes: {
          exclude: ['created_at', 'updated_at']
        },
        limit: 5,
        offset: (req.query.page - 1) * 5,
        order: [
          ['updated_at', 'DESC'],
        ]
      })
      return res.status(200).json({
        status: 'success',
        result: {
          payments,
          count,
          page
        }
      })
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      })
    }
  },
  async getOnePayment(req, res, next) {
    try {
      let payment = await Payment.findOne({
        where: {
            id: req.params.id
        },
        attributes: {
            exclude: ['created_at', 'updated_at']
        }
    })

    return res.status(200).json({
      status: 'success',
      result: {
        payment
      }
    })
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      })
    }
  },
  async deletePayment(req, res, next) {
    try {  
        let payment = await Payment.destroy({
          where: {
            id: req.params.id
          },
        })

        return res.status(200).json({
          status: 'success deleted'
        })
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      })
    }
  }
}
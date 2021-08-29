const {
  Order_transaction
} = require('../models')

module.exports = {
  async createorder(req, res) {
    let {
      name,
      price,
      qty
    } = req.body

    try {
      let order = await Order_transaction.findOne({
        where: {
          name
        }
      })

      if (!order) {
        let order = await Order_transaction.create({
          name,
          price,
          qty
        })
        return res.status(201).json({
          status: 'success',
          result: {
            order
          }
        })
      } else {
        throw new Error('order is already existed')
      }
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      });
    }
  },
  async updateorder(req, res) {
    let {
      name,
      price,
      qty
    } = req.body
    try {

      let order = await Order_transaction.update({
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
          order
        }
      })
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      })
    }
  },
  async getAllorder(req, res, next) {
    try {
      let count = await Order_transaction.count()
      let page = await Math.floor(count / 5) + 1
      let orders = await Order_transaction.findAll({
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
          orders,
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
  async getOneorder(req, res, next) {
    try {
      let order = await Order_transaction.findOne({
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
        order
      }
    })
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      })
    }
  },
  async deleteorder(req, res, next) {
    try {  
        let order = await Order_transaction.destroy({
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
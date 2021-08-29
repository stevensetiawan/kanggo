const {
  Order_transaction
} = require('../models')

module.exports = {
  async createorder(req, res) {
    let {
      amount,
      product_id
    } = req.body

    try {
      let order = await Order_transaction.findAll({
        attributes: {
          exclude: ['created_at', 'updated_at']
        }
      })

      if (order.length > 0) {
        create_order = await Order_transaction.create({
          order_id: order[order.length - 1].order_id += 1,
          user_id: req.user.id,
          product_id,
          amount
        })
      } else {
        create_order = await Order_transaction.create({
          order_id: 1,
          user_id: req.user.id,
          product_id,
          amount
        })
      }
      return res.status(201).json({
        status: 'success',
        result: {
          create_order
        }
      })
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      });
    }
  },
  async updateorder(req, res) {
    let {
      amount,
      product_id
    } = req.body
    try {

      let order = await Order_transaction.findOne({
        where: {
          id: req.params.id
        },
        attributes: {
          exclude: ['created_at', 'updated_at']
        }
      })

      let update_order = await Order_transaction.update({
        amount,
        product_id
      }, {
        where: {
          order_id: order.order_id
        }
      })

      return res.status(200).json({
        status: 'success',
        result: {
          update_order
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
      let order = await Order_transaction.findOne({
        where: {
          id: req.params.id
        },
        attributes: {
          exclude: ['created_at', 'updated_at']
        }
      })

      let delete_order = await Order_transaction.destroy({
        where: {
          order_id: order.order_id
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
const {
  Product
} = require('../models')

module.exports = {
  async createProduct(req, res) {
    let {
      name,
      price,
      qty
    } = req.body

    try {
      let product = await Product.findOne({
        where: {
          name
        }
      })

      if (!product) {
        let product = await Product.create({
          name,
          price,
          qty
        })
        return res.status(201).json({
          status: 'success',
          result: {
            product
          }
        })
      } else {
        throw new Error('Product is already existed')
      }
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      });
    }
  },
  async updateProduct(req, res) {
    let {
      name,
      price,
      qty
    } = req.body
    try {

      let product = await Product.update({
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
          product
        }
      })
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      })
    }
  },
  async getAllProduct(req, res, next) {
    try {
      let count = await Product.count()
      let page = await Math.floor(count / 5) + 1
      let products = await Product.findAll({
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
          products,
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
  async getOneProduct(req, res, next) {
    try {
      let product = await Product.findOne({
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
        product
      }
    })
    } catch (err) {
      return res.status(422).json({
        status: 'failed',
        message: err
      })
    }
  },
  async deleteProduct(req, res, next) {
    try {  
        let product = await Product.destroy({
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
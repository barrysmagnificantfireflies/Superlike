const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('orderItem', {
  price: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      not: ['[a-z]', 'i'],
      notEmpty: true,
      max: 100,
      min: 0
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      not: ['[a-z]', 'i'],
      min: 0,
      max: 100
    }
  }
})

OrderItem.prototype.addOne = function() {
  this.quantity++
}

module.exports = OrderItem

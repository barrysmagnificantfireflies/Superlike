const Sequelize = require('sequelize')
const db = require('../db')

const OrderItems = db.define('orderItems', {
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
OrderItems.prototype.addOne = function(itemId) {
  const item = OrderItems.findbyPk(itemId)
  item.quantity++
}
module.exports = OrderItems

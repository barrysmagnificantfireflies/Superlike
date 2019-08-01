const Sequelize = require('sequelize')
const db = require('../db')
const Item = require('./item')

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
  console.log(this)
  return this.quantity++
}

OrderItem.prototype.getPrice = async function() {
  const item = await Item.findbyPk(this.itemId)

  return item.price
}

OrderItem.checkOrder = async function(orderId) {
  const order = await OrderItem.findbyPk(orderId)

  if (order) return true
  return false
}

//check item is within order, add itemId, orderId
OrderItem.checkItem = async function(itemId) {
  const item = await OrderItem.findbyPk(itemId)

  if (item) return true
  return false
}

OrderItem.addItem = async function(orderId, itemId) {
  try {
    let updateCart
    if (OrderItem.checkOrder(orderId)) {
      if (OrderItem.checkItem(itemId)) {
        updateCart = await OrderItem.update(
          {
            quantity: this.addOne()
          },
          {
            where: {
              itemId: itemId,
              orderId: orderId
            }
          }
        )
      } else {
        updateCart = await OrderItem.create({
          price: this.getPrice(),
          quantity: 1,
          orderId: orderId,
          itemId: itemId
        })
      }
    }
    return updateCart
  } catch (error) {
    console.error(error)
  }
}

module.exports = OrderItem

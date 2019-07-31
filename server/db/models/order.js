const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

//this prototype method finds purchase history for individual users, taking in a userId as a paramater, returning an array of purchase objects
Order.findPurchaseHistory = async function(userId) {
  const purchase = await this.findAll({
    where: {
      userId,
      isPurchased: true
    }
  })
  return purchase
}
// this takes an order and finds the price of all items * their quantity
// not certain this makes sense
Order.prototype.findTotalPrice = function() {
  const itemArr = this.getItems()
  let price = 0
  for (let i = 0; i < itemArr.length; i++) {
    price += parseInt(i[price] * i[quantity])
  }
  return price
}

module.exports = Order

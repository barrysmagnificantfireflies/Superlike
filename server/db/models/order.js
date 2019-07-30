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

module.exports = Order

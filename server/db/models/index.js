const User = require('./user')
const Order = require('./order')
const Item = require('./item')
const OrderItem = require('./orderItem')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 *
 *

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
Order.belongsToMany(Item, {through: OrderItem})
Item.belongsToMany(Order, {through: OrderItem})
User.hasMany(Order)
Order.belongsTo(User)
module.exports = {
  User,
  Order,
  Item,
  OrderItem
}

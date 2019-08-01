const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')
const {isAdmin, isCorrectUser, doesCartExist} = require('./utils')
module.exports = router

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', isCorrectUser, async (req, res, next) => {
  try {
    const userOrders = await Order.findPurchaseHistory(req.params.userId)
    res.json(userOrders)
  } catch (err) {
    next(err)
  }
})
//need to add back in teh check for the correct user
router.get('/:userId/cart', async (req, res, next) => {
  try {
    const cart = await Order.findCart(req.params.userId)
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

router.post('/', doesCartExist, async (req, res, next) => {
  try {
    const newOrder = await Order.create({
      userId: req.user.id
    })
    res.send(newOrder)
  } catch (error) {
    next(error)
  }
})

//need to secure with something
router.put('/', async (req, res, next) => {
  try {
    const cart = await Order.findCart(req.body.userId)
    const orderItem = await OrderItem.findOrCreate({
      where: {
        orderId: cart.userId,
        itemId: req.body.itemId
      },
      defaults: {
        orderId: cart.userId,
        itemId: req.body.itemId,
        price: parseInt(req.body.price),
        quantity: 1
      }
    })
    if (!orderItem[1]) {
      await orderItem[0].increment('quantity', {by: 1})
    }
    res.json(orderItem)
  } catch (error) {
    next(error)
  }
})

const router = require('express').Router()
const {Order} = require('../db/models')
const {isAdmin, isCorrectUser} = require('./utils')
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

router.get('/:userId/cart', isCorrectUser, async (req, res, next) => {
  try {
    const cart = await Order.findCart(req.params.userId)
    res.json(cart)
  } catch (error) {
    next(err)
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

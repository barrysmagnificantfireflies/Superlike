const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const userOrders = await Order.findPurchaseHistory(req.params.id)
    res.json(userOrders)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    res.send(newOrder)
  } catch (error) {
    next(error)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    await Order.update(
      {isPurchased: true},
      {
        where: {
          userId: req.params.userId
        }
      }
    )
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

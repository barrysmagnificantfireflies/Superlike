const router = require('express').Router()
const {User, Order} = require('../db/models')
const {isUser} = require('./utils')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')
const {isAdmin, isCorrectUserOrAdmin, doesCartExist} = require('./utils')
module.exports = router

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'imageUrl']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', isUser, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  const request = req.body
  try {
    const createdUser = await User.create(request)
    res.json(createdUser)
  } catch (error) {
    next(error)
  }
})

router.put('/:userId', async (req, res, next) => {
  const request = req.body
  try {
    await User.update(
      {email: request.email, imageUrl: request.imageUrl},
      {
        where: {
          id: req.params.userId
        }
      }
    )
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

router.put('/:userId/checkout', async (req, res, next) => {
  const request = req.params
  try {
    await Order.checkout(request.userId) //flips the isPurchased value on the cart to true
    await Order.newCart(request.userId) //creates a new cart so that there is always a cart in the DB
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

router.post('/charge', async (req, res, next) => {
  const request = req.body
  try {
    let {status} = await stripe.charges.create({
      amount: request.total,
      currency: 'usd',
      description: 'An example charge',
      source: request.source
    })
    res.json({status})
  } catch (err) {
    next(err)
  }
})

router.delete('/', isCorrectUserOrAdmin, async (req, res, next) => {
  const request = req.body
  try {
    const destroyedUser = await User.destroy(request)
    res.json(destroyedUser)
  } catch (error) {
    next(error)
  }
})

const router = require('express').Router()
const {User, Order} = require('../db/models')
const {isUser} = require('./utils')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
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
  try {
    const createdUser = await User.create(req.body)
    res.json(createdUser)
  } catch (error) {
    next(error)
  }
})

router.put('/:userId', async (req, res, next) => {
  console.log('req.body', req.body)
  try {
    await User.update(
      {email: req.body.email, imageUrl: req.body.imageUrl},
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
  try {
    await Order.checkout(req.params.userId) //flips the isPurchased value on the cart to true
    await Order.newCart(req.params.userId) //creates a new cart so that there is always a cart in the DB
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})
router.post('/charge', async (req, res, next) => {
  try {
    let {status} = await stripe.charges.create({
      amount: req.body.total,
      currency: 'usd',
      description: 'An example charge',
      source: req.body.source
    })
    res.json({status})
  } catch (err) {
    next(err)
  }
})

router.delete('/', isUser, async (req, res, next) => {
  try {
    const destroyedUser = await User.destroy(req.body)
    res.json(destroyedUser)
  } catch (error) {
    next(error)
  }
})

const router = require('express').Router()
const User = require('../db/models/user')
const Order = require('../db/models/order')
module.exports = router

router.post('/login', async (req, res, next) => {
  const request = req.body
  try {
    const user = await User.findOne({where: {email: request.email}})
    if (!user) {
      console.log('No such user found:', request.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(request.password)) {
      console.log('Incorrect password for user:', request.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  const request = req.body
  try {
    const user = await User.create(request)
    await Order.newCart(user.id)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))

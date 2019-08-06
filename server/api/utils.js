const {Order, User} = require('../db/models')

function isAdmin(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.send('not an admin')
  }
}

function isCorrectUser(req, res, next) {
  let id = parseInt(req.params.userId)
  if (req.user && req.user.id === id) {
    next()
  } else {
    res.send('Not Correct User')
  }
  console.log('req.user', req.user.id)
  console.log('params', id)
}

function isCorrectUserOrAdmin(req, res, next) {
  let id = parseInt(req.params.userId)
  if (req.user && (req.user.isAdmin || req.user.id === id)) {
    next()
  } else {
    res.send('Not correct user or admin')
  }
}

async function doesCartExist(req, res, next) {
  //confirm this is correct logic!
  if (!Order.findCart(req.user.id)) {
    next()
  }
  res.send('cart already exists')
}

async function isUser(req, res, next) {
  try {
    const user = await User.findbyPk(req.body.user.id)
    if (user) {
      next()
    }
    res.send('not a User')
  } catch (error) {
    next(error)
  }
}

module.exports = {
  isAdmin,
  isCorrectUser,
  doesCartExist,
  isUser,
  isCorrectUserOrAdmin
}

const {Order, User} = require('../db/models')

function isAdmin(req, res, next) {
  if (req.user.isAdmin) {
    next()
  }
  res.send('not an admin')
}

function isCorrectUser(req, res, next) {
  if (req.user.id === req.params.id) {
    next()
  }
  res.send('Not Correct User')
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
  isUser
}

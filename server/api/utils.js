const {Order} = require('../db/models')

function isAdmin(req, res, next) {
  if (req.user.isAdmin) {
    next()
  }
  res.send('notAdmin')
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

module.exports = {
  isAdmin,
  isCorrectUser,
  doesCartExist
}

const User = require('./users')
function isAdmin(req, res, next) {
  if (req.user.isAdmin) {
    next()
  }
  res.send('not an admin')
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
module.exports = {isAdmin, isUser}

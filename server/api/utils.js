function isAdmin(req, res, next) {
  if (req.user.isAdmin) {
    next()
  }
  res.send('notAdmin')
}
module.exports = isAdmin

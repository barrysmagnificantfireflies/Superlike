const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/item', require('./item')) //need to change this to items to keep consistency -- whoops
router.use('/orders', require('./orders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

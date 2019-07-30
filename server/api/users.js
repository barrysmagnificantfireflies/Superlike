const router = require('express').Router()
const {User} = require('../db/models')
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
router.get('/:id', async (req, res, next) => {
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
router.put('/', async (req, res, next) => {
  try {
    const putUser = await User.update(req.body)
    res.json(putUser)
  } catch (error) {
    next(error)
  }
})
router.delete('/', async (req, res, next) => {
  try {
    const destroyedUser = await User.destroy(req.body)
    res.json(destroyedUser)
  } catch (error) {
    next(error)
  }
})

const router = require('express').Router()
const {Item} = require('../db/models')
const {isAdmin} = require('./utils')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

router.put('/:itemId/edit', async (req, res, next) => {
  try {
    const updatedItem = await Item.update(req.body)
    res.json(updatedItem)
  } catch (error) {
    console.error(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id)
    res.json(item)
  } catch (error) {
    next(error)
  }
})
router.post('/', isAdmin, async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body)
    res.json(newItem)
  } catch (error) {
    next(error)
  }
})
router.put('/', isAdmin, async (req, res, next) => {
  try {
    const updatedItem = await Item.update(req.body)
    res.json(updatedItem)
  } catch (error) {
    next(error)
  }
})

router.delete('/', isAdmin, async (req, res, next) => {
  try {
    const deletedItem = await Item.destroy(req.body)
    res.json(deletedItem)
  } catch (error) {
    next(error)
  }
})

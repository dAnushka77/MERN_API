const express = require('express')
const router = express.Router()
const {getGoals} = require('../controllers/goalControllers')
const {setGoals} = require('../controllers/goalControllers')
const {updateGoals} = require('../controllers/goalControllers')
const {deleteGoals} = require('../controllers/goalControllers')

router.get('/', getGoals)

router.post('/', setGoals)

router.put('/:id', updateGoals)

router.delete('/:id', deleteGoals)

module.exports = router


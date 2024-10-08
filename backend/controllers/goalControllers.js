const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')


// @desc Get Goals
// @route GET/api/goals
// @access Private
const getGoals = asyncHandler (async (req, res) => {
    const goal = await Goal.find()
    res.status(200).json(goal)
})


// @desc Set Goals
// @route POST/api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add some text')
    }
    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})


// @desc Update Goals
// @route PUT/api/goals/id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json({message: `Update goal ${req.params.id}`})
})


// @desc Delete Goals
// @route DELETE/api/goals/id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await Goal.findByIdAndDelete(req.params.id);


    res.status(200).json({id: req.params.id})
})


module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}

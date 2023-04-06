const express = require('express')
const router = express.Router()
const pomoController = require('../controllers/pomo') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, pomoController.getTodos)

router.post('/createTodo', pomoController.createTodo)

router.put('/markComplete', pomoController.markComplete)

router.put('/markIncomplete', pomoController.markIncomplete)

router.delete('/deleteTodo', pomoController.deleteTodo)

module.exports = router
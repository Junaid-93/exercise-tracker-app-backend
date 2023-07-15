const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/userController')
const verifyToken = require('../middlewares/auth')

// Routes
// router.get('/', verifyToken, getUsers)
router.post('/register', register)
router.post('/login', login)
// router.patch('/profileUpdate', verifyToken, profileUpdate)
// router.delete('/deleteUser', verifyToken, deleteUser)

module.exports = router

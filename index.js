const express = require('express')
// const dotenv = require('dotenv').config()
// const mongoose = require('mongoose')
// const colors = require('colors')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const exerciseRoutes = require('./routes/exerciseRoutes')
// configuration
const app = express()
app.use(cors())
const connectDB = require('./config/connectDatabase')
const verifyToken = require('./middlewares/auth')
app.use(cookieParser())
//
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Connect Database
connectDB()
app.get('/', async (req, res) => {
    res.send('Hello There')
})
// app.get('/dashboard', verifyToken, async (req, res) => {
//   res.send('Hello dashboard')
// })

app.use('/api/users', userRoutes)
app.use('/api/exercises', exerciseRoutes)
const port = process.env.PORT || 8000
app.listen(port, async (req, res) => {
    console.log(`Server started at http://localhost:${port}`.cyan.underline)
})

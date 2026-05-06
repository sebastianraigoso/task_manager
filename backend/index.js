require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db')

app.use(express.json())
app.use(cors())

const authRoutes = require('./routes/auth')
const tasksRoutes = require('./routes/tasks')

app.use('/api', authRoutes)
app.use('/api', tasksRoutes)

app.get('/', (req, res) => {
  res.send('Backend is running!!!!')
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`)
})
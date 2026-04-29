const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

let tasks = []

app.get('/', (req, res) => {
  res.send('Backend is running!!!!')
})

app.get('/tasks', (req, res) => {
  res.json(tasks)
})

app.post('/tasks', (req, res) => {
  const task = req.body
  tasks.push(task)
  res.json(task)
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
const express = require('express')
const cors = require('cors')

const app = express()
const db = require('./db')

app.use(express.json()) // parse Json from the frontend
app.use(cors()) // lets Vue call express

app.get('/', (req, res) => {
  res.send('Backend is running!!!!')
})

app.get('/tasks', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tasks')
    res.json(rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('/tasks', async (req, res) => {
  try {
    const task = req.body

    await db.query(
      'INSERT INTO tasks (id, title, description, date, priority) VALUES (?, ?, ?, ?, ?)',
      [task.id, task.title, task.description, task.date, task.priority]
    )

    res.json(task)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.delete('/tasks/:id', async (req, res) => {
  try{
    const id = Number(req.params.id)

    await db.query('DELETE FROM tasks WHERE id = ?', [id])

    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`)
})
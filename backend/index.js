require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./db')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Backend is running!!!!')
})


app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body

    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email])
    
    if(users.length > 0) {
      return res.status(400).json({
        error: 'Email already exists'
      })
    }

    await db.query('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)', 
      [username, email, password])

    res.json({ success: true })

  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
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
      'INSERT INTO tasks (title, description, date, priority) VALUES (?, ?, ?, ?, ?)',
      [task.title, task.description, task.date, task.priority]
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
const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/tasks', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tasks')
    res.json(rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.post('/tasks', async (req, res) => {
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

router.delete('/tasks/:id', async (req, res) => {
  try{
    const id = Number(req.params.id)
    await db.query('DELETE FROM tasks WHERE id = ?', [id])
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
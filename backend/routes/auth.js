const express = require('express')
const router = express.Router()
const db = require('../db')

router.post('/register', async (req, res) => {
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


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email])

    if(users.length === 0) {
      return res.status(400).json({
        error: 'Email does not exist'
      })
    }

    if(users[0].password_hash !== password) {
      return res.status(400).json({
        error: 'Wrong password'
      })
    }

    res.json({ success: true })

  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
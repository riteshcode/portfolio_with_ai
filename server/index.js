// server/index.js
//
// Local dev backend for Ritesh Kumar's "digital twin" chatbot. Mirrors
// api/chat.js (the Vercel serverless function that actually serves
// production) so you can run and test the chat locally without the Vercel
// CLI. Both share the same prompt/model logic in lib/twin.js.
//
// Setup:
//   npm install
//   copy .env.example to .env and set ANTHROPIC_API_KEY
//
// Run:
//   npm run server

import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { generateReply } from '../lib/twin.js'

const PORT = process.env.PORT || 3001

if (!process.env.ANTHROPIC_API_KEY) {
  console.error(
    'Error: ANTHROPIC_API_KEY is not set.\n' +
      '  Create a .env file next to server/index.js with:\n' +
      '    ANTHROPIC_API_KEY=sk-ant-...\n',
  )
  process.exit(1)
}

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body ?? {}

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages must be a non-empty array' })
  }

  try {
    const reply = await generateReply(messages)
    res.json({ reply })
  } catch (err) {
    console.error('[Anthropic API error]', err)
    res.status(502).json({ error: 'Something went wrong reaching the digital twin.' })
  }
})

app.listen(PORT, () => {
  console.log(`Digital twin API listening on http://localhost:${PORT}`)
})

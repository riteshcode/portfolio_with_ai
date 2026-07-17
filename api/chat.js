// Vercel serverless function — this is what actually answers /api/chat in
// production (a plain `app.listen()` Express server, like server/index.js,
// never runs on Vercel; every route needs its own file under /api).
//
// Requires the ANTHROPIC_API_KEY environment variable to be set in the
// Vercel project (Settings -> Environment Variables).

import { generateReply } from '../lib/twin.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { messages } = req.body ?? {}
  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: 'messages must be a non-empty array' })
    return
  }

  try {
    const reply = await generateReply(messages)
    res.status(200).json({ reply })
  } catch (err) {
    console.error('[Anthropic API error]', err)
    res.status(502).json({ error: 'Something went wrong reaching the digital twin.' })
  }
}

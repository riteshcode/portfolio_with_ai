import type { SendMessageFn } from './types'

/**
 * Calls the backend digital-twin API (server/index.js), which is a port of
 * twin_bot.py — same system prompt, same profile.md, same Anthropic model.
 * Requires the backend running: `npm run server` (see server/index.js).
 */
export const apiResponder: SendMessageFn = async (_message, history) => {
  const messages = history
    .filter((m) => m.id !== 'welcome')
    .map((m) => ({ role: m.role, content: m.content }))

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  })

  if (!res.ok) {
    throw new Error(`Chat API error: ${res.status}`)
  }

  const data = (await res.json()) as { reply?: string }
  return data.reply ?? "I didn't get a proper reply — try again in a moment."
}

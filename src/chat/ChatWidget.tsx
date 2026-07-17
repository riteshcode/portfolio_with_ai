import { useEffect, useRef, useState } from 'react'
import './ChatWidget.css'
import { apiResponder } from './apiResponder'
import { SparkleIcon } from './icons'
import type { ChatMessage, SendMessageFn } from './types'

const SUGGESTIONS = [
  "What's your Laravel experience?",
  'Tell me about QuickB2B',
  'Are you open to freelance work?',
  'What integrations have you built?',
]

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hey, I'm Ritesh's digital twin \u{1F44B} Ask me anything about his experience, projects, or stack — Laravel, integrations, whatever you're curious about.",
}

export interface ChatWidgetProps {
  /**
   * Handles a user message and resolves to the assistant's reply.
   * Defaults to calling the backend digital-twin API (server/index.js).
   * Pass your own function here to swap in a different backend.
   */
  onSendMessage?: SendMessageFn
}

export function ChatWidget({ onSendMessage = apiResponder }: ChatWidgetProps) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isThinking])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  async function handleSend(text: string) {
    const trimmed = text.trim()
    if (!trimmed || isThinking) return

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      content: trimmed,
    }
    const nextHistory = [...messages, userMessage]

    setMessages(nextHistory)
    setInput('')
    setIsThinking(true)

    try {
      const reply = await onSendMessage(trimmed, nextHistory)
      setMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-assistant`, role: 'assistant', content: reply },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-error`,
          role: 'assistant',
          content: "Something went wrong reaching the digital twin. Try again in a moment.",
        },
      ])
    } finally {
      setIsThinking(false)
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    handleSend(input)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend(input)
    }
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat with Ritesh's digital twin">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <SparkleIcon className="chat-avatar-icon" />
              </div>
              <div>
                <div className="chat-title">Ritesh's Digital Twin</div>
                <div className="chat-status">
                  <span className="chat-status-dot"></span>
                  Ask about my experience
                </div>
              </div>
            </div>
            <button
              className="chat-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              type="button"
            >
              ✕
            </button>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((message) => (
              <div className={`chat-bubble-row ${message.role}`} key={message.id}>
                {message.role === 'assistant' && (
                  <div className="chat-bubble-avatar">
                    <SparkleIcon className="chat-avatar-icon" />
                  </div>
                )}
                <div className={`chat-bubble ${message.role}`}>{message.content}</div>
              </div>
            ))}

            {isThinking && (
              <div className="chat-bubble-row assistant">
                <div className="chat-bubble-avatar">
                  <SparkleIcon className="chat-avatar-icon" />
                </div>
                <div className="chat-bubble assistant chat-typing">
                  <span className="chat-typing-dot"></span>
                  <span className="chat-typing-dot"></span>
                  <span className="chat-typing-dot"></span>
                </div>
              </div>
            )}

            {messages.length === 1 && !isThinking && (
              <div className="chat-suggestions">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    className="chat-suggestion-chip"
                    key={suggestion}
                    type="button"
                    onClick={() => handleSend(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="chat-input-row" onSubmit={handleSubmit}>
            <textarea
              ref={inputRef}
              className="chat-input"
              placeholder="Ask about my experience..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              className="chat-send-btn"
              type="submit"
              disabled={!input.trim() || isThinking}
              aria-label="Send message"
            >
              ↑
            </button>
          </form>
        </div>
      )}

      <button
        className={`chat-fab ${open ? 'is-open' : 'is-closed'}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Chat with my digital twin'}
        type="button"
      >
        {open ? (
          '✕'
        ) : (
          <>
            <SparkleIcon className="chat-fab-icon" />
            <span className="chat-fab-label">Chat with me</span>
          </>
        )}
      </button>
    </div>
  )
}

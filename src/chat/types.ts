export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export type SendMessageFn = (
  message: string,
  history: ChatMessage[],
) => Promise<string>

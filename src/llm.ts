import type { AIMessage } from '../types'
import { openai } from './ai'
import { zodFunction } from 'openai/helpers/zod'

export const runLLM = async ({ messages, tools }: { messages: AIMessage[], tools:any[] }) => {
   const formattedTools = tools.map(zodFunction)
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.1,
    messages,
    tools:formattedTools,
    tool_choice:'auto',
    parallel_tool_calls:false
  })

  // We comment out this because if there is a tool call
  // the response would be like this:
  // return response.choices[0].tool_calls
 // return response.choices[0].message.content

 // So intead we just send the message
    return response.choices[0].message
}

import type { AIMessage } from '../types'
import { addMessages, getMessages, saveToolResponse } from './memory'
import { runLLM } from './llm'
import { showLoader, logMessage } from './ui'
import { runTool } from './toolRunner'

export const runAgent = async ({
  userMessage,
  tools,
}: {
  userMessage: string
  tools: any[]
}) => {
  await addMessages([{ role: 'user', content: userMessage }])

  const loader = showLoader('🤔')
  const history = await getMessages()

  const response = await runLLM({ messages: history, tools })

  // Order matters
  // we first insert the tool call LLM wants to run
  await addMessages([response])

  // Then we add the response with right tool it wants us to run.
  if (response.tool_calls) {
    const toolCall = response.tool_calls[0]
    loader.update(`executing: ${toolCall.function.name}`)

    const toolResponse = await runTool(toolCall, userMessage)
    await saveToolResponse(toolCall.id, toolResponse)

    loader.update(`executed: ${toolCall.function.name}`)
  }

//   await addMessages([response])

   logMessage(response)
  loader.stop()
  return getMessages()
}

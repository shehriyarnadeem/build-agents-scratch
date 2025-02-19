import 'dotenv/config'
import { runAgent } from './src/agent'
import { z } from 'zod'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

const weatherTool = {
  name: 'get_weather',
  description: `use this to get the weather,i need karachi's weather, but before calling the tool that take approval as yes or  no`,
  parameters: z.object({
    reasoning: z.string().describe('why did you pick this tool?'),
  }),
}

const response = await runAgent({ userMessage, tools: [weatherTool] })

import 'dotenv/config'
import { runAgent } from './src/agent'
import {z} from 'zod'


const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

const weatherTool ={
  name:'get_weather',
  // description:"use this tool to fetch the weather",
  parameters:z.object({
    // reasoning:z.string().describe('Why did you pick this tool?')
  })
}

const messages = await runAgent({
  userMessage,
  tools:[weatherTool]
})

console.log(messages)
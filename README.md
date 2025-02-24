
# Build an AI Agent from Scratch Workshop


## Setup Instructions

This repo requires **Node.js version 20+** or **bun v1.0.20**.

The `main` branch contains the final application. To code along with the workshop, checkout the `step/1` branch. You will also need an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys).

```bash
git clone https://github.com/shehriyarnadeem/build-agents-scratch.git
cd agent-from-scratch
git checkout step/1
npm install # or bun install
```

To run the project:

```bash
npm start
# or
bun run index.ts
```

## OpenAI API Key

Create an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys) and save it in a `.env` file:

```
OPENAI_API_KEY='YOUR_API_KEY'
```

OpenAI requires you to add a minimum of $5 USD credit to your account. Go to the [billing page](https://platform.openai.com/settings/organization/billing/overview) and add credits.



> [!NOTE]  
> It can take up to 20 minutes for the credits to be available via the API. So if you get an `insufficient_quota` error, try again in a few minutes.

# Trivia Voice Agent (Node.js)

A LiveKit-powered voice agent that hosts an interactive trivia game using OpenAI's Realtime API, built with Node.js/TypeScript.

## Features

- **Real-time voice interaction** using OpenAI's Realtime API
- **Multiple trivia categories**: Science, History, Geography, Movies, and Sports
- **Score tracking** with backend API integration
- **Natural conversation flow** with an enthusiastic AI host
- **Automatic question progression**
- **TypeScript** for type safety

## Setup

### Prerequisites

- Node.js >= 20
- npm or pnpm
- LiveKit Cloud account (or self-hosted LiveKit server)
- OpenAI API key

### Installation

1. Install dependencies:

```bash
npm install
# or
pnpm install
```

2. Download required model files:

```bash
npm run download-files
# or
pnpm download-files
```

### Environment Variables

The `.env` file contains:

```
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret
LIVEKIT_URL=wss://your-livekit-url.livekit.cloud
OPENAI_API_KEY=your_openai_api_key
BACKEND_URL=http://localhost:3001
```

## Running the Agent

### Development Mode

Connect to LiveKit Cloud and test with the playground:

```bash
npm run dev
# or
pnpm dev
```

### Production Mode

```bash
npm run build
npm start
# or
pnpm build
pnpm start
```

## How It Works

1. **User joins**: The agent welcomes them and explains the game
2. **Question flow**: Agent asks a trivia question from a random category
3. **Answer evaluation**: User responds via voice, agent checks the answer
4. **Score update**: Score is tracked locally and sent to the backend API
5. **Repeat**: User can request more questions or end the game

## Trivia Data

Questions are stored in `trivia-data.ts` with the following structure:

```typescript
{
  category: "Science",
  question: "What is the chemical symbol for gold?",
  answer: "Au",
  alternatives: ["gold", "au"]
}
```

## Backend Integration

The agent communicates with the Node.js backend at `http://localhost:3001/api/trivia/score` to:

- **POST** score updates after each question
- Store participant ID, score, and questions asked

## Architecture

```
User (Voice) <---> LiveKit <---> Voice Agent <---> Backend API
                                 (Node.js)              |
                                      |          Score Storage
                                Trivia Logic
                                Score Tracking
```

## Function Tools

The agent uses these function tools for game flow:

- `ask_trivia_question()`: Presents the next question
- `check_user_answer(answer)`: Evaluates correctness and updates score
- `get_current_score()`: Returns current score
- `end_game()`: Concludes the session and shows final score

## Customization

### Adding Questions

Edit `trivia-data.ts` and add new questions to the `TRIVIA_QUESTIONS` array:

```typescript
{
  category: "Music",
  question: "Who is known as the King of Pop?",
  answer: "Michael Jackson",
  alternatives: ["michael jackson", "mj"]
}
```

### Changing Voice

In `agent.ts`, modify the voice parameter (around line 264):

```typescript
llm: new openai.realtime.RealtimeModel({
  voice: 'alloy',  // Options: alloy, echo, fable, onyx, nova, shimmer
  ...
})
```

### Adjusting Instructions

Modify the `instructions` parameter in the `TriviaHostAgent` constructor to change the agent's personality and behavior.

## Project Structure

```
agent-node/
├── agent.ts           # Main agent implementation
├── trivia-data.ts     # Trivia questions and utilities
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── .env               # Environment variables
└── README.md          # This file
```

## Troubleshooting

- **Agent not connecting**: Check LiveKit credentials in `.env`
- **No audio**: Ensure microphone permissions are granted
- **Score not updating**: Verify backend is running on port 3001
- **Questions repeating**: Agent reshuffles questions when exhausted
- **TypeScript errors**: Run `npm run build` to check for type errors

## Development Tips

- Use `tsx` for hot reloading during development
- Check console logs for question/answer details
- Backend logs will show score updates in real-time
- Test function tools by asking specific questions

## Deploying to LiveKit Cloud

From the project root, run:

```bash
lk agent create
```

This will create a `Dockerfile`, `.dockerignore`, and `livekit.toml` file, then deploy your agent to LiveKit Cloud.

## License

MIT

